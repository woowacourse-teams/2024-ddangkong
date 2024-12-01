package ddangkong.facade.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
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
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomFacadeTest extends BaseServiceTest {

    @Autowired
    private RoomFacade roomFacade;

    @Nested
    class 방_생성 {

        @Test
        void 방_생성_시_방장_멤버를_생성하고_방을_생성한다() {
            // given
            String nickname = "방장";
            MemberResponse expectedMemberResponse = new MemberResponse(1L, nickname, true);

            // when
            RoomJoinResponse actual = roomFacade.createRoom(nickname);

            // then
            assertThat(actual.roomId()).isEqualTo(1L);
            assertThat(actual.member()).isEqualTo(expectedMemberResponse);
        }
    }

    @Nested
    class 방_참여 {

        @Test
        void 이미_생성된_방에_참여한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);

            String nickname = "참가자";
            MemberResponse expectedMemberResponse = new MemberResponse(2L, nickname, false);

            // when
            RoomJoinResponse actual = roomFacade.joinRoom(nickname, room.getUuid());

            // then
            assertAll(
                    () -> assertThat(actual.roomId()).isEqualTo(1L),
                    () -> assertThat(actual.roomUuid()).isEqualTo(room.getUuid()),
                    () -> assertThat(actual.member()).isEqualTo(expectedMemberResponse)
            );
        }

        @Test
        void 존재하지_않는_방에_참여시_예외를_던진다() {
            // given
            String nickname = "참가자";
            String nonExistUuid = "nonExistUuid";

            // when & then
            assertThatThrownBy(() -> roomFacade.joinRoom(nickname, nonExistUuid))
                    .isExactlyInstanceOf(NotFoundRoomException.class);
        }

        @Test
        void 동시에_최대_인원수만큼_방에_참여해도_예외를_발생한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);
            memberFixture.createCommons(room, 10);

            // when
            Thread t1 = new Thread(() -> roomFacade.joinRoom("member12-1", room.getUuid()));
            Thread t2 = new Thread(() -> roomFacade.joinRoom("member12-2", room.getUuid()));
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
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);

            String nickname = "참가자";
            MemberResponse expectedMemberResponse = new MemberResponse(2L, nickname, false);
            roomFacade.joinRoom(nickname, room.getUuid());

            // when
            RoomMemberResponse actual = roomFacade.getRoomMemberInfo(2L);

            // then
            assertAll(
                    () -> assertThat(actual.roomId()).isEqualTo(1L),
                    () -> assertThat(actual.roomUuid()).isEqualTo(room.getUuid()),
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

        Room room;
        BalanceContent balanceContent;
        BalanceOption option1;
        BalanceOption option2;

        @BeforeEach
        void init() {
            room = roomFixture.createNotStartedRoom();
            balanceContent = balanceContentFixture.create(room.getCategory());
            option1 = balanceOptionFixture.create(balanceContent);
            option2 = balanceOptionFixture.create(balanceContent);
        }

        @Test
        void 해당_멤버의_투표를_옮긴_후에_요청한_멤버를_삭제한다() {
            // given
            memberFixture.createMaster(room);
            Member commonMember = memberFixture.createCommon(room);

            roomContentFixture.initRoomContent(room, balanceContent, 1, LocalDateTime.now());
            RoomBalanceVote roomBalanceVote = roomBalanceVoteFixture.create(commonMember, option1);

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

        @Test
        void 방에서_마지막_멤버가_나가면_방을_삭제한다() {
            // given
            Member lastMember = memberFixture.createMaster(room);
            RoomContent roomContent = roomContentFixture.initRoomContent(room, balanceContent, 1, LocalDateTime.now());

            // when
            roomFacade.leaveRoom(room.getId(), lastMember.getId());

            // then
            Optional<RoomContent> deletedRoomContent = roomContentRepository.findById(roomContent.getId());
            Optional<Room> deletedRoom = roomRepository.findById(room.getId());
            assertAll(
                    () -> assertThat(deletedRoomContent).isEmpty(),
                    () -> assertThat(deletedRoom).isEmpty()
            );
        }

        @Test
        void 방의_마스터가_나가면_다른_일반_멤버를_마스터로_승급한다() {
            // given
            Member master = memberFixture.createMaster(room);
            Member commonMember = memberFixture.createCommon(room);

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
            Room room = roomFixture.createNotStartedRoom();
            Member master = memberFixture.createMaster(room);
            memberFixture.createCommon(1, room);
            memberFixture.createCommon(2, room);

            // when
            RoomInfoResponse actual = roomFacade.getRoomInfo(room.getId());

            // then
            assertAll(
                    () -> assertThat(actual.isGameStart()).isFalse(),
                    () -> assertThat(actual.roomSetting().timeLimit()).isEqualTo(room.getTimeLimit()),
                    () -> assertThat(actual.roomSetting().totalRound()).isEqualTo(room.getTotalRound()),
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
            Room room = roomFixture.createNotStartedRoom();

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

        @Test
        void 게임_시작_시_방이_진행_상태가_된다() {
            // when
            Room notStartedRoom = roomFixture.createNotStartedRoom();
            roomContentFixture.initRoomContents(notStartedRoom);
            roomFacade.startGame(notStartedRoom.getId());

            // then
            Room room = roomRepository.findById(notStartedRoom.getId()).orElseThrow();
            assertThat(room.isGameProgress()).isTrue();
        }

        @Test
        void 게임_시작_시_해당_방의_컨텐츠가_생성된다() {
            // given
            Room notStartedRoom = roomFixture.createNotStartedRoom();
            balanceContentFixture.createContents(notStartedRoom.getCategory(), notStartedRoom.getTotalRound());
            long beforeRoomContentCount = roomContentRepository.count();

            // when
            roomFacade.startGame(notStartedRoom.getId());

            // then
            Room room = roomRepository.findById(notStartedRoom.getId()).orElseThrow();
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
            Room room = roomFixture.createProgressRoom();
            roomContentFixture.initRoomContents(room);

            int nextRound = room.getCurrentRound() + 1;

            // when
            roomFacade.moveToNextRound(room.getId());

            // then
            Room foundRoom = roomRepository.findById(room.getId()).orElseThrow();
            RoomContent roomContent = roomContentRepository.findByRoomAndRound(foundRoom, nextRound)
                    .orElseThrow();
            assertAll(
                    () -> assertThat(foundRoom.getCurrentRound()).isEqualTo(nextRound),
                    () -> assertThat(foundRoom.isGameProgress()).isTrue(),
                    () -> assertThat(roomContent.getVoteDeadline()).isNotNull()
            );
        }

        @Test
        void 마지막_라운드라면_게임을_종료한다() {
            // given
            int currentRound = 5;
            RoomSetting roomSetting = new RoomSetting(5, 10_000, Category.IF);
            Room room = roomFixture.createProgressRoom(currentRound, roomSetting);

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

        @Test
        void 라운드가_종료되지_않았으면_게임도_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 2;
            Room room = roomFixture.createProgressRoom(currentRound);
            memberFixture.createMaster(room);
            int round = 2;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse()
            );
        }

        @Test
        void 라운드가_종료되면_게임은_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 2;
            Room room = roomFixture.createProgressRoom(currentRound);
            memberFixture.createMaster(room);
            int round = 1;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isTrue(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse()
            );
        }

        @Test
        void 게임이_종료되면_라운드는_종료되지_않은_상태여야_한다() {
            // given
            Room room = roomFixture.createFinishedRoom();
            memberFixture.createMaster(room);
            int round = 5;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isTrue()
            );
        }

        @Test
        void 현재_마지막_라운드여도_게임이_종료되지_않은_상태이면_라운드도_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 5;
            Room room = roomFixture.createProgressRoom(currentRound);
            memberFixture.createMaster(room);
            int round = 5;

            // when
            RoundFinishedResponse roundFinishedResponse = roomFacade.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse()
            );
        }
    }

    @Nested
    class 방_초기화 {

        @Test
        void 방을_초기_상태로_초기화한다() {
            // given
            Room room = roomFixture.createFinishedRoom();

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
            Room room = roomFixture.createProgressRoom(invalidCurrentRound);

            // when & then
            assertThatThrownBy(() -> roomFacade.resetRoom(room.getId()))
                    .isExactlyInstanceOf(NotFinishedRoomException.class);
        }

        @Test
        void 방_상태가_FINISH가_아닐_경우_예외가_발생한다() {
            // given
            Room room = roomFixture.createProgressRoom();

            // when & then
            assertThatThrownBy(() -> roomFacade.resetRoom(room.getId()))
                    .isExactlyInstanceOf(NotFinishedRoomException.class);
        }

        @Test
        void 방을_초기화하면_방_투표를_삭제하고_전체_투표에_저장한다() {
            // given
            Room room = roomFixture.createFinishedRoom();
            List<RoomContent> roomContents = roomContentFixture.initRoomContents(room);
            List<BalanceOptions> balanceOptions = balanceOptionFixture.initOptions(roomContents);
            BalanceOptions balanceOptions1 = balanceOptions.get(0);

            Member member1 = memberFixture.createMaster(room);
            Member member2 = memberFixture.createCommon(1, room);
            Member member3 = memberFixture.createCommon(2, room);

            roomBalanceVoteFixture.create(member1, balanceOptions1.getFirstOption());
            roomBalanceVoteFixture.create(member2, balanceOptions1.getFirstOption());
            roomBalanceVoteFixture.create(member3, balanceOptions1.getSecondOption());

            // when
            roomFacade.resetRoom(room.getId());

            // then
            List<RoomBalanceVote> roomBalanceVotes = roomBalanceVoteRepository.findByMemberRoom(room);
            Long optionATotalVoteCount = totalBalanceVoteRepository.countByBalanceOption(
                    balanceOptions1.getFirstOption());
            Long optionBTotalVoteCount = totalBalanceVoteRepository.countByBalanceOption(
                    balanceOptions1.getSecondOption());
            assertAll(
                    () -> assertThat(roomBalanceVotes).isEmpty(),
                    () -> assertThat(optionATotalVoteCount).isEqualTo(2),
                    () -> assertThat(optionBTotalVoteCount).isEqualTo(1)
            );
        }

        @Test
        void 초기화된_방인지_확인한다() {
            // given
            Room room = roomFixture.createFinishedRoom();
            memberFixture.createMaster(room);

            // when
            InitialRoomResponse actual = roomFacade.isInitialRoom(room.getId());

            // then
            assertThat(actual.isInitial()).isFalse();
        }
    }

    @Nested
    class 변경_시간이_특정_시각_이전_방_삭제 {

        @Test
        void 변경이_특정_시각_이전에_일어난_모든_방을_지운다() {
            // given
            roomFixture.createNotStartedRoom();
            roomFixture.createNotStartedRoom();
            LocalDateTime afterModifiedAt = LocalDateTime.now();

            // when
            roomFacade.migrateExpiredRooms(afterModifiedAt);

            // then
            long countOfRoom = roomRepository.count();
            assertThat(countOfRoom).isZero();
        }

        @Test
        void 변경이_특정_시각_이후에_일어난_방은_지우지_않는다() {
            // given
            LocalDateTime beforeModifiedAt = LocalDateTime.now();
            roomFixture.createNotStartedRoom();
            roomFixture.createNotStartedRoom();
            long expectedCount = 2;

            // when
            roomFacade.migrateExpiredRooms(beforeModifiedAt);

            // then
            long countOfRoom = roomRepository.count();
            assertThat(countOfRoom).isEqualTo(expectedCount);
        }

        @Test
        void 해당_방과_연관된_모든_정보를_삭제할_수_있다() {
            // given
            BalanceContent balanceContent = balanceContentFixture.create();
            BalanceOption firstBalanceOption = balanceOptionFixture.create(balanceContent);
            BalanceOption secondBalanceOption = balanceOptionFixture.create(balanceContent);

            Room room = roomFixture.createNotStartedRoom();
            Member master = memberFixture.createMaster(room);
            Member common = memberFixture.createCommon(room);
            List<RoomContent> roomContent = roomContentFixture.initRoomContents(room);
            RoomBalanceVote roomBalanceVote1 = roomBalanceVoteFixture.create(master, firstBalanceOption);
            RoomBalanceVote roomBalanceVote2 = roomBalanceVoteFixture.create(common, secondBalanceOption);
            LocalDateTime standardModified = LocalDateTime.now();

            // when
            roomFacade.migrateExpiredRooms(standardModified);

            // then
            Optional<Room> deletedRoom = roomRepository.findById(room.getId());
            Optional<Member> deletedMember = memberRepository.findById(common.getId());
            Optional<RoomContent> deletedRoomContent = roomContentRepository.findById(roomContent.get(0).getId());
            Optional<RoomBalanceVote> deletedRoomVote = roomBalanceVoteRepository.findById(roomBalanceVote1.getId());
            long afterCountOfTotalVotes = totalBalanceVoteRepository.count();
            assertAll(
                    () -> assertThat(deletedRoom).isEmpty(),
                    () -> assertThat(deletedMember).isEmpty(),
                    () -> assertThat(deletedRoomContent).isEmpty(),
                    () -> assertThat(deletedRoomVote).isEmpty(),
                    () -> assertThat(afterCountOfTotalVotes).isEqualTo(2)
            );
        }
    }

    @Nested
    class 방에_참여_가능_여부 {

        @Test
        void 준비중인_방에_참여할_수_있다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);

            // when
            RoomStatusResponse actual = roomFacade.getRoomStatus(room.getUuid());

            // then
            assertThat(actual.isJoinable()).isTrue();
        }

        @Test
        void 진행중인_방에_참여할_수_없다() {
            // given
            Room progressRoom = roomFixture.createProgressRoom();

            // when
            RoomStatusResponse actual = roomFacade.getRoomStatus(progressRoom.getUuid());

            // then
            assertThat(actual.isJoinable()).isFalse();
        }

        @Test
        void 종료된_방에_참여할_수_없다() {
            // given
            Room finishedRoom = roomFixture.createFinishedRoom();

            // when
            RoomStatusResponse actual = roomFacade.getRoomStatus(finishedRoom.getUuid());

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
