package ddangkong.facade.room;

import static ddangkong.support.fixture.MemberFixture.EDEN;
import static ddangkong.support.fixture.MemberFixture.KEOCHAN;
import static ddangkong.support.fixture.MemberFixture.MARU;
import static ddangkong.support.fixture.MemberFixture.PRIN;
import static ddangkong.support.fixture.MemberFixture.TACAN;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.support.EntityTestUtils;
import ddangkong.exception.room.NotFinishedRoomException;
import ddangkong.exception.room.NotFoundRoomException;
import ddangkong.exception.room.member.InvalidMemberIdException;
import ddangkong.facade.BaseServiceTest;
import ddangkong.facade.room.dto.InitialRoomResponse;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomMemberResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoomStatusResponse;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import ddangkong.facade.room.member.dto.MemberResponse;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.junit.jupiter.params.provider.EnumSource.Mode;
import org.springframework.beans.factory.annotation.Autowired;

class RoomFacadeTest extends BaseServiceTest {

    @Autowired
    private RoomFacade roomFacade;

    @Nested
    class 방_생성 {

        @Test
        void 방_생성_시_방장_멤버를_생성하고_방을_생성한다() {
            // given
            String nickname = "나는방장";
            MemberResponse expectedMemberResponse = new MemberResponse(14L, nickname, true);

            // when
            RoomJoinResponse actual = roomFacade.createRoom(nickname);

            // then
            assertThat(actual.roomId()).isEqualTo(8L);
            assertThat(actual.member()).isEqualTo(expectedMemberResponse);
        }
    }

    @Nested
    class 방_참여 {

        @Test
        void 이미_생성된_방에_참여한다() {
            // given
            String nickname = "나는참가자";
            String uuid = "uuid4";
            MemberResponse expectedMemberResponse = new MemberResponse(14L, nickname, false);

            // when
            RoomJoinResponse actual = roomFacade.joinRoom(nickname, uuid);

            // then
            assertAll(
                    () -> assertThat(actual.roomId()).isEqualTo(4L),
                    () -> assertThat(actual.roomUuid()).isEqualTo(uuid),
                    () -> assertThat(actual.member()).isEqualTo(expectedMemberResponse)
            );
        }

        @Test
        void 존재하지_않는_방에_참여시_예외를_던진다() {
            // given
            String nickname = "나는참가자";
            String nonExistUuid = "hi";

            // when & then
            assertThatThrownBy(() -> roomFacade.joinRoom(nickname, nonExistUuid))
                    .isExactlyInstanceOf(NotFoundRoomException.class);
        }

        @Test
        void 동시에_최대_인원수만큼_방에_참여해도_예외를_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.master(room));
            for (int i = 0; i < 10; i++) {
                memberRepository.save(EDEN.common(room, i));
            }

            // when
            Thread t1 = new Thread(() -> roomFacade.joinRoom("t1member", room.getUuid()));
            Thread t2 = new Thread(() -> roomFacade.joinRoom("t2member", room.getUuid()));
            t1.start();
            t2.start();

            try {
                t1.join();
                t2.join();
            } catch (InterruptedException ignored) {
            }

            // then
            Room foundRoom = roomRepository.findById(room.getId()).orElseThrow();
            long memberCountInRoom = memberRepository.countByRoom(foundRoom);
            assertThat(memberCountInRoom).isEqualTo(12);
        }
    }

    @Nested
    class 사용자_정보_조회 {

        @Test
        void 사용자_정보를_조회한다() {
            // given
            String nickname = "나는참가자";
            String uuid = "uuid4";
            MemberResponse expectedMemberResponse = new MemberResponse(14L, nickname, false);
            roomFacade.joinRoom(nickname, uuid);

            // when
            RoomMemberResponse actual = roomFacade.getRoomMemberInfo(14L);

            // then
            assertAll(
                    () -> assertThat(actual.roomId()).isEqualTo(4L),
                    () -> assertThat(actual.roomUuid()).isEqualTo(uuid),
                    () -> assertThat(actual.member()).isEqualTo(expectedMemberResponse)
            );
        }

        @Test
        void 존재하지_않는_아이디로_사용자_정보를_조회할_수_없다() {
            // given
            Long notExistMemberId = 0L;

            // when & then
            assertThatThrownBy(() -> roomFacade.getRoomMemberInfo(notExistMemberId))
                    .isExactlyInstanceOf(InvalidMemberIdException.class);
        }
    }

    @Nested
    class 방_나가기 {

        @Test
        void 해당_멤버의_투표를_옮긴_후에_요청한_멤버를_삭제한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(EDEN.master(room));
            Member commonMember = memberRepository.save(KEOCHAN.common(room));

            BalanceContent balanceContent = balanceContentRepository.findById(1L).get();
            RoomBalanceVote roomBalanceVote = getRoomBalanceVote(commonMember, balanceContent);
            long countOfTotalVotes = totalBalanceVoteRepository.count();

            // when
            roomFacade.leaveRoom(room.getId(), commonMember.getId());

            // then
            Optional<Member> leavedMember = memberRepository.findById(commonMember.getId());
            Optional<RoomBalanceVote> deletedRoomBalanceVote =
                    roomBalanceVoteRepository.findById(roomBalanceVote.getId());
            long afterCountOfBalanceVotes = totalBalanceVoteRepository.count();
            assertAll(
                    () -> assertThat(leavedMember).isEmpty(),
                    () -> assertThat(deletedRoomBalanceVote).isEmpty(),
                    () -> assertThat(afterCountOfBalanceVotes).isEqualTo(countOfTotalVotes + 1)
            );
        }

        private RoomBalanceVote getRoomBalanceVote(Member member, BalanceContent balanceContent) {
            BalanceOption balanceOption = balanceOptionRepository.findAllByBalanceContent(balanceContent).get(0);
            RoomBalanceVote roomBalanceVote = new RoomBalanceVote(member, balanceOption);
            return roomBalanceVoteRepository.save(roomBalanceVote);
        }

        @Test
        void 방에서_마지막_멤버가_나가면_방을_삭제한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member member = memberRepository.save(EDEN.master(room));

            BalanceContent balanceContent = balanceContentRepository.findById(1L).get();
            RoomContent roomContent = getSavedRoomContent(room, balanceContent);

            // when
            roomFacade.leaveRoom(room.getId(), member.getId());

            // then
            Optional<RoomContent> deletedRoomContent = roomContentRepository.findById(roomContent.getId());
            Optional<Room> deletedRoom = roomRepository.findById(room.getId());
            assertAll(
                    () -> assertThat(deletedRoomContent).isEmpty(),
                    () -> assertThat(deletedRoom).isEmpty()
            );
        }

        private RoomContent getSavedRoomContent(Room room, BalanceContent content) {
            RoomContent roomContent = RoomContent.newRoomContent(room, content, 1);
            return roomContentRepository.save(roomContent);
        }

        @Test
        void 방의_마스터가_나가면_다른_일반_멤버를_마스터로_승급한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member master = memberRepository.save(EDEN.master(room));
            Member commonMember = memberRepository.save(KEOCHAN.common(room));

            // when
            roomFacade.leaveRoom(room.getId(), master.getId());

            // then
            Member foundCommonMember = memberRepository.findById(commonMember.getId()).get();
            assertThat(foundCommonMember.isMaster()).isTrue();
        }
    }

    @Nested
    class 게임_방_정보_조회 {

        @Test
        void 게임_방_정보를_조회한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member master = memberRepository.save(EDEN.master(room));
            memberRepository.save(KEOCHAN.common(room));
            memberRepository.save(MARU.common(room));

            // when
            RoomInfoResponse actual = roomFacade.getRoomInfo(room.getId());

            // then
            assertAll(
                    () -> assertThat(actual.isGameStart()).isFalse(),
                    () -> assertThat(actual.roomSetting().timeLimit()).isEqualTo(10_000),
                    () -> assertThat(actual.roomSetting().totalRound()).isEqualTo(5),
                    () -> assertThat(actual.members()).hasSize(3),
                    () -> assertThat(actual.master().memberId()).isEqualTo(master.getId())
            );
        }
    }

    @Nested
    class 방_설정_변경 {

        @Test
        void 방_설정_정보를_변경한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());

            int totalRound = 8;
            int timeLimit = 10_000;
            Category category = Category.IF;
            RoomSettingRequest roomSetting = new RoomSettingRequest(totalRound, timeLimit, category);

            // when
            roomFacade.updateRoomSetting(room.getId(), roomSetting);

            // then
            Room foundRoom = roomRepository.findById(room.getId()).orElseThrow();

            assertAll(
                    () -> assertThat(foundRoom.getTotalRound()).isEqualTo(totalRound),
                    () -> assertThat(foundRoom.getTimeLimit()).isEqualTo(timeLimit),
                    () -> assertThat(foundRoom.getCategory()).isEqualTo(category)
            );
        }
    }

    @Nested
    class 게임_시작 {

        private static final Long READY_ROOM_ID = 4L;

        @Test
        void 게임_시작_시_방이_진행_상태가_된다() {
            // when
            roomFacade.startGame(READY_ROOM_ID);

            // then
            Room room = roomRepository.findById(READY_ROOM_ID).orElseThrow();
            assertThat(room.isGameProgress()).isTrue();
        }

        @Test
        void 게임_시작_시_해당_방의_컨텐츠가_생성된다() {
            // given
            long beforeRoomContentCount = roomContentRepository.count();

            // when
            roomFacade.startGame(READY_ROOM_ID);

            // then
            Room room = roomRepository.findById(READY_ROOM_ID).orElseThrow();
            long afterRoomContentCount = roomContentRepository.count();
            long addedRoomContentCount = afterRoomContentCount - beforeRoomContentCount;
            assertThat(addedRoomContentCount).isEqualTo(room.getTotalRound());
        }
    }

    @Nested
    class 다음_라운드로_이동 {

        @Test
        void 중간_라운드라면_다음_라운드로_넘어갈_수_있다() {
            // given
            int currentRound = 2;
            RoomSetting roomSetting = new RoomSetting(5, 10_000, Category.IF);
            Room room = roomRepository.save(
                    new Room("uuid", currentRound, RoomStatus.PROGRESS, roomSetting)
            );
            BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));
            roomContentRepository.save(RoomContent.newRoomContent(room, content, currentRound + 1));

            // when
            roomFacade.moveToNextRound(room.getId());

            // then
            Room foundRoom = roomRepository.findById(room.getId()).orElseThrow();
            RoomContent roomContent = roomContentRepository.findByRoomAndRound(foundRoom, currentRound + 1)
                    .orElseThrow();
            assertAll(
                    () -> assertThat(foundRoom.getCurrentRound()).isEqualTo(currentRound + 1),
                    () -> assertThat(foundRoom.isGameProgress()).isTrue(),
                    () -> assertThat(roomContent.getVoteDeadline()).isNotNull()
            );
        }

        @Test
        void 마지막_라운드라면_게임을_종료한다() {
            // given
            int currentRound = 5;
            RoomSetting roomSetting = new RoomSetting(5, 10_000, Category.IF);
            Room room = roomRepository.save(
                    new Room("uuid", currentRound, RoomStatus.PROGRESS, roomSetting)
            );

            // when
            roomFacade.moveToNextRound(room.getId());

            // then
            Room foundRoom = roomRepository.findById(room.getId()).orElseThrow();
            assertAll(
                    () -> assertThat(foundRoom.getCurrentRound()).isEqualTo(foundRoom.getTotalRound()),
                    () -> assertThat(foundRoom.getStatus()).isEqualTo(RoomStatus.FINISH)
            );
        }
    }

    @Nested
    class 라운드_종료_여부 {

        private static final int TOTAL_ROUND = 5;
        private static final int TIME_LIMIT = 10_000;
        private static final RoomStatus STATUS = RoomStatus.PROGRESS;
        private static final Category CATEGORY = Category.IF;

        @Test
        void 라운드가_종료되지_않았으면_게임도_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 2;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = roomRepository.save(new Room("uuid", currentRound, STATUS, roomSetting));
            Member master = memberRepository.save(PRIN.master(room));
            int round = 2;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.master().memberId()).isEqualTo(master.getId())
            );
        }

        @Test
        void 라운드가_종료되면_게임은_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 2;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = roomRepository.save(new Room("uuid", currentRound, STATUS, roomSetting));
            Member master = memberRepository.save(PRIN.master(room));
            int round = 1;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isTrue(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.master().memberId()).isEqualTo(master.getId())
            );
        }

        @Test
        void 게임이_종료되면_라운드는_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 5;
            RoomStatus status = RoomStatus.FINISH;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = roomRepository.save(new Room("uuid", currentRound, status, roomSetting));
            Member master = memberRepository.save(PRIN.master(room));
            int round = 5;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isTrue(),
                    () -> assertThat(roundFinishedResponse.master().memberId()).isEqualTo(master.getId())
            );
        }

        @Test
        void 현재_마지막_라운드여도_게임이_종료되지_않은_상태이면_라운드도_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 5;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = roomRepository.save(new Room("uuid", currentRound, STATUS, roomSetting));
            Member master = memberRepository.save(PRIN.master(room));
            int round = 5;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.master().memberId()).isEqualTo(master.getId())
            );
        }
    }

    @Nested
    class 방_초기화 {

        private static final RoomStatus STATUS = RoomStatus.FINISH;

        private static final RoomSetting ROOM_SETTING = new RoomSetting(5, 15_000, Category.IF);

        private BalanceContent content;

        @BeforeEach
        void setUp() {
            content = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));
        }

        @Test
        void 방을_초기_상태로_초기화한다() {
            // given
            Room room = roomRepository.save(new Room("uuid", 5, STATUS, ROOM_SETTING));
            saveRoomContents(room);

            // when
            roomFacade.resetRoom(room.getId());

            // then
            Room resetRoom = roomRepository.findById(room.getId()).orElseThrow();
            List<RoomContent> roomContents = roomContentRepository.findAllByRoom(room);
            assertAll(
                    () -> assertThat(resetRoom.getStatus()).isEqualTo(RoomStatus.READY),
                    () -> assertThat(resetRoom.getCurrentRound()).isEqualTo(1),
                    () -> assertThat(roomContents).isEmpty()
            );
        }

        @Test
        void 현재_라운드와_전체_라운드가_같지_않을_경우_예외가_발생한다() {
            // given
            int invalidCurrentRound = 4;
            Room room = roomRepository.save(new Room("uuid", invalidCurrentRound, STATUS, ROOM_SETTING));
            saveRoomContents(room);

            // when & then
            assertThatThrownBy(() -> roomFacade.resetRoom(room.getId()))
                    .isExactlyInstanceOf(NotFinishedRoomException.class);
        }

        @ParameterizedTest
        @EnumSource(mode = Mode.EXCLUDE, names = {"FINISH"})
        void 방_상태가_FINISH가_아닐_경우_예외가_발생한다(RoomStatus status) {
            // given
            Room room = roomRepository.save(new Room("uuid", 5, status, ROOM_SETTING));
            saveRoomContents(room);

            // when & then
            assertThatThrownBy(() -> roomFacade.resetRoom(room.getId()))
                    .isExactlyInstanceOf(NotFinishedRoomException.class);
        }

        private void saveRoomContents(Room room) {
            for (int i = 1; i < room.getTotalRound(); i++) {
                roomContentRepository.save(new RoomContent(room, content, i, null));
            }
        }

        @Test
        void 방을_초기화하면_방_투표를_삭제하고_전체_투표에_저장한다() {
            // given
            BalanceOption optionA = balanceOptionRepository.save(new BalanceOption("A", content));
            BalanceOption optionB = balanceOptionRepository.save(new BalanceOption("B", content));
            Room room = roomRepository.save(new Room("uuid", 5, STATUS, ROOM_SETTING));
            Member prin = memberRepository.save(PRIN.master(room));
            Member eden = memberRepository.save(EDEN.common(room));
            Member keochan = memberRepository.save(KEOCHAN.common(room));
            Member tacan = memberRepository.save(TACAN.common(room));
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(eden, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(keochan, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(tacan, optionB));

            // when
            roomFacade.resetRoom(room.getId());

            // then
            List<RoomBalanceVote> roomBalanceVotes = roomBalanceVoteRepository.findByMemberRoom(room);
            Long optionATotalVoteCount = totalBalanceVoteRepository.countByBalanceOption(optionA);
            Long optionBTotalVoteCount = totalBalanceVoteRepository.countByBalanceOption(optionB);
            assertAll(
                    () -> assertThat(roomBalanceVotes).isEmpty(),
                    () -> assertThat(optionATotalVoteCount).isEqualTo(3),
                    () -> assertThat(optionBTotalVoteCount).isEqualTo(1)
            );
        }

        @Test
        void 초기화된_방인지_확인한다() {
            // given
            Room room = roomRepository.save(new Room("uuid", 5, RoomStatus.READY, ROOM_SETTING));
            Member master = memberRepository.save(PRIN.master(room));

            // when
            InitialRoomResponse actual = roomFacade.isInitialRoom(room.getId());

            // then
            assertAll(
                    () -> assertThat(actual.isInitial()).isFalse(),
                    () -> assertThat(actual.master().memberId()).isEqualTo(master.getId())
            );
        }
    }

    @Nested
    class 변경_시간이_특정_시각_이전_방_삭제 {

        @Test
        void 변경이_특정_시각_이전에_일어난_모든_방을_지운다() {
            // given
            LocalDateTime standardModified = LocalDateTime.of(2024, 7, 18, 19, 52, 0);
            long countOfExpectedRestRoom = 5;

            // when
            roomFacade.migrateExpiredRooms(standardModified);

            // then
            long countOfRoom = roomRepository.count();
            assertThat(countOfRoom).isEqualTo(countOfExpectedRestRoom);
        }

        @Test
        @Disabled
            // TODO @LastModifiedDate 비활성화 후 테스트
        void 해당_방과_연관된_모든_정보를_삭제할_수_있다() {
            // given
            LocalDateTime standardModified = LocalDateTime.of(2020, 1, 1, 0, 0, 0);
            Room room = getSavedRoom(standardModified.minusSeconds(1));
            Member master = memberRepository.save(EDEN.master(room));
            Member common = memberRepository.save(KEOCHAN.common(room));

            BalanceContent balanceContent = balanceContentRepository.findById(1L).get();
            RoomContent roomContent = getSavedRoomContent(room, balanceContent);
            RoomBalanceVote roomVote = getSavedRoomBalanceVote(master, balanceContent);
            long countOfTotalVotes = totalBalanceVoteRepository.count();

            // when
            roomFacade.migrateExpiredRooms(standardModified);

            // then
            Optional<Room> deletedRoom = roomRepository.findById(room.getId());
            Optional<Member> deletedMember = memberRepository.findById(common.getId());
            Optional<RoomContent> deletedRoomContent = roomContentRepository.findById(roomContent.getId());
            Optional<RoomBalanceVote> deletedRoomVote = roomBalanceVoteRepository.findById(roomVote.getId());
            long afterCountOfTotalVotes = totalBalanceVoteRepository.count();
            assertAll(
                    () -> assertThat(deletedRoom).isEmpty(),
                    () -> assertThat(deletedMember).isEmpty(),
                    () -> assertThat(deletedRoomContent).isEmpty(),
                    () -> assertThat(deletedRoomVote).isEmpty(),
                    () -> assertThat(afterCountOfTotalVotes).isEqualTo(countOfTotalVotes + 1)
            );
        }

        private Room getSavedRoom(LocalDateTime lastModifiedAt) {
            Room room = Room.createNewRoom();
            EntityTestUtils.setLastModifiedAt(room, lastModifiedAt);
            return roomRepository.save(room);
        }

        private RoomBalanceVote getSavedRoomBalanceVote(Member member, BalanceContent balanceContent) {
            BalanceOption balanceOption = balanceOptionRepository.findAllByBalanceContent(balanceContent).get(0);
            RoomBalanceVote roomBalanceVote = new RoomBalanceVote(member, balanceOption);
            return roomBalanceVoteRepository.save(roomBalanceVote);
        }

        private RoomContent getSavedRoomContent(Room room, BalanceContent content) {
            RoomContent roomContent = RoomContent.newRoomContent(room, content, 1);
            return roomContentRepository.save(roomContent);
        }
    }

    @Nested
    class 방에_참여_가능_여부 {

        @Test
        void 준비중인_방에_참여할_수_있다() {
            // given
            Room room = roomRepository.save(
                    new Room("uuid", 5, RoomStatus.READY, new RoomSetting(3, 10_000, Category.IF)
                    ));
            memberRepository.save(TACAN.master(room));

            // when
            RoomStatusResponse actual = roomFacade.getRoomStatus(room.getUuid());

            // then
            assertThat(actual.isJoinable()).isTrue();
        }

        @Test
        void 진행중인_방에_참여할_수_없다() {
            // given
            Room room = roomRepository.save(
                    new Room("uuid", 5, RoomStatus.PROGRESS, new RoomSetting(3, 10_000, Category.IF))
            );
            memberRepository.save(TACAN.master(room));

            // when
            RoomStatusResponse actual = roomFacade.getRoomStatus(room.getUuid());

            // then
            assertThat(actual.isJoinable()).isFalse();
        }

        @Test
        void 종료된_방에_참여할_수_없다() {
            // given
            Room room = roomRepository.save(
                    new Room("uuid", 5, RoomStatus.FINISH, new RoomSetting(3, 10_000, Category.IF))
            );
            memberRepository.save(TACAN.master(room));

            // when
            RoomStatusResponse actual = roomFacade.getRoomStatus(room.getUuid());

            // then
            assertThat(actual.isJoinable()).isFalse();
        }

        @Test
        void 존재하지_않는_방에_참여할_수_없다() {
            // when
            RoomStatusResponse actual = roomFacade.getRoomStatus("NotExistUuid");

            // then
            assertThat(actual.isJoinable()).isFalse();
        }
    }
}
