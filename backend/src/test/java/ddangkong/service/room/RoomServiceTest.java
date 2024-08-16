package ddangkong.service.room;

import static ddangkong.support.fixture.MemberFixture.EDEN;
import static ddangkong.support.fixture.MemberFixture.KEOCHAN;
import static ddangkong.support.fixture.MemberFixture.PRIN;
import static ddangkong.support.fixture.MemberFixture.TACAN;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import ddangkong.service.room.dto.RoomInfoResponse;
import ddangkong.service.room.dto.RoomJoinResponse;
import ddangkong.service.room.dto.RoomSettingRequest;
import ddangkong.service.room.dto.RoomSettingResponse;
import ddangkong.service.room.dto.RoundFinishedResponse;
import ddangkong.service.room.member.dto.MemberResponse;
import java.util.List;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.junit.jupiter.params.provider.EnumSource.Mode;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;

class RoomServiceTest extends BaseServiceTest {

    @Autowired
    private RoomService roomService;

    @Nested
    class 게임_방_정보_조회 {

        @Test
        void 게임_방_정보를_조회한다() {
            // given
            RoomJoinResponse room = roomService.createRoom("방장");
            roomService.joinRoom("멤버1", room.roomId());
            roomService.joinRoom("멤버2", room.roomId());

            // when
            RoomInfoResponse actual = roomService.findRoomInfo(room.roomId());

            // then
            assertAll(
                    () -> Assertions.assertThat(actual.members()).hasSize(3),
                    () -> Assertions.assertThat(actual.isGameStart()).isFalse(),
                    () -> Assertions.assertThat(actual.roomSetting().timeLimit()).isEqualTo(30000),
                    () -> Assertions.assertThat(actual.roomSetting().totalRound()).isEqualTo(5)
            );
        }
    }

    @Nested
    class 방_생성 {

        @Test
        void 방_생성_시_방장_멤버를_생성하고_방을_생성한다() {
            // given
            String nickname = "나는방장";
            MemberResponse expectedMemberResponse = new MemberResponse(13L, nickname, true);
            RoomJoinResponse expected = new RoomJoinResponse(8L, expectedMemberResponse);

            // when
            RoomJoinResponse actual = roomService.createRoom(nickname);

            // then
            assertThat(actual).isEqualTo(expected);
        }
    }

    @Nested
    class 방_참여 {

        @Test
        void 이미_생성된_방에_참여한다() {
            // given
            String nickname = "나는참가자";
            Long joinRoomId = 4L;
            MemberResponse expectedMemberResponse = new MemberResponse(13L, nickname, false);
            RoomJoinResponse expected = new RoomJoinResponse(joinRoomId, expectedMemberResponse);

            // when
            RoomJoinResponse actual = roomService.joinRoom(nickname, joinRoomId);

            // then
            assertThat(actual).isEqualTo(expected);
        }

        @Test
        void 존재하지_않는_방에_참여시_예외를_던진다() {
            // given
            String nickname = "나는참가자";
            Long nonExistId = 99999999999L;

            // when & then
            assertThatThrownBy(() -> roomService.joinRoom(nickname, nonExistId))
                    .isExactlyInstanceOf(BadRequestException.class);
        }

        @Test
        void 최대_인원수가_다_찬_방에_참여하면_예외를_발생한다() {
            // given
            String masterNickname = "master";
            RoomJoinResponse room = roomService.createRoom(masterNickname);
            for (int i = 0; i < 11; i++) {
                roomService.joinRoom("member%d".formatted(i), room.roomId());
            }

            // when & then
            assertThatThrownBy(() -> roomService.joinRoom("member", room.roomId()))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("방의 인원 수가 가득 찼습니다.");
        }

        @Test
        void 동시에_최대_인원수만큼_방에_참여해도_예외를_발생한다() {
            String masterNickname = "master";
            RoomJoinResponse createdRoom = roomService.createRoom(masterNickname);
            for (int i = 0; i < 10; i++) {
                roomService.joinRoom("member%d".formatted(i), createdRoom.roomId());
            }

            Thread t1 = new Thread(() -> roomService.joinRoom("t1member", createdRoom.roomId()));
            Thread t2 = new Thread(() -> roomService.joinRoom("t2member", createdRoom.roomId()));
            t1.start();
            t2.start();

            try {
                t1.join();
                t2.join();
            } catch (InterruptedException e) {
            }

            Room room = roomRepository.getById(createdRoom.roomId());
            long memberCountInRoom = memberRepository.countByRoom(room);

            assertThat(memberCountInRoom).isEqualTo(12);
        }
    }

    @Nested
    class 게임_시작 {

        private static final Long READY_ROOM_ID = 4L;

        @Test
        void 게임_시작_시_방이_진행_상태가_된다() {
            // when
            roomService.startGame(READY_ROOM_ID);

            // then
            Room room = roomRepository.getById(READY_ROOM_ID);
            assertThat(room.isGameProgress()).isTrue();
        }

        @Test
        void 게임_시작_시_해당_방의_컨텐츠가_생성된다() {
            // given
            long beforeRoomContentCount = roomContentRepository.count();

            // when
            roomService.startGame(READY_ROOM_ID);

            // then
            Room room = roomRepository.getById(READY_ROOM_ID);
            long afterRoomContentCount = roomContentRepository.count();
            long addedRoomContentCount = afterRoomContentCount - beforeRoomContentCount;
            assertThat(addedRoomContentCount).isEqualTo(room.getTotalRound());
        }
    }

    @Nested
    class 다음_라운드로_이동 {

        private static final Long PROGRESS_ROOM_ID = 1L;
        private static final int CURRENT_ROUND = 2;
        private static final Long NOT_EXIST_ROOM_ID = 999999999L;

        @Test
        void 중간_라운드라면_다음_라운드로_넘어갈_수_있다() {
            // given
            int nextRound = CURRENT_ROUND + 1;

            // when
            roomService.moveToNextRound(PROGRESS_ROOM_ID);

            // then
            Room room = roomRepository.getById(PROGRESS_ROOM_ID);
            RoomContent roomContent = roomContentRepository.findByRoomAndRound(room, room.getCurrentRound())
                    .orElseThrow();
            assertAll(
                    () -> assertThat(room.getCurrentRound()).isEqualTo(nextRound),
                    () -> assertThat(room.isGameProgress()).isTrue(),
                    () -> assertThat(roomContent.getRoundEndedAt()).isNotNull()
            );
        }

        @Test
        void 마지막_라운드라면_게임을_종료한다() {
            // given
            Long roomId = finalRoundRoomId();

            // when
            roomService.moveToNextRound(roomId);

            // then
            Room room = roomRepository.getById(roomId);
            assertAll(
                    () -> assertThat(room.getCurrentRound()).isEqualTo(room.getTotalRound()),
                    () -> assertThat(room.getStatus()).isEqualTo(RoomStatus.FINISH)
            );
        }

        Long finalRoundRoomId() {
            Room room = new Room(5, 5, 30_000, RoomStatus.PROGRESS, Category.EXAMPLE);
            roomRepository.save(room);
            return room.getId();
        }

        @Test
        void 방이_없을_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomService.moveToNextRound(NOT_EXIST_ROOM_ID))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방이 존재하지 않습니다.");
        }
    }

    @Nested
    class 방_설정_변경 {

        @Test
        void 방_설정_정보를_변경한다() {
            // given
            Long roomId = 4L;
            int totalRound = 8;
            int timeLimit = 13_000;
            Category category = Category.EXAMPLE;

            RoomSettingRequest request = new RoomSettingRequest(totalRound, timeLimit, category);

            // when
            roomService.updateRoomSetting(roomId, request);

            // then
            RoomInfoResponse roomInfo = roomService.findRoomInfo(roomId);
            RoomSettingResponse roomSetting = roomInfo.roomSetting();

            assertAll(
                    () -> assertThat(roomSetting.totalRound()).isEqualTo(totalRound),
                    () -> assertThat(roomSetting.timeLimit()).isEqualTo(timeLimit),
                    () -> assertThat(roomSetting.category()).isEqualTo(category)
            );
        }

        @ParameterizedTest
        @ValueSource(ints = {2, 11})
        void 라운드는_3이상_10이하_여야한다(int notValidTotalRound) {
            // given
            Long roomId = 2L;
            int timeLimit = 10000;
            Category category = Category.EXAMPLE;

            RoomSettingRequest request = new RoomSettingRequest(notValidTotalRound, timeLimit, category);

            // when & then
            assertThatThrownBy(() -> roomService.updateRoomSetting(roomId, request))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                            .formatted(3, 10, notValidTotalRound));
        }

        @ParameterizedTest
        @ValueSource(ints = {9000, 31000})
        void 시간_제한은_10000이상_30000이하_여야한다(int notValidTimeLimit) {
            // given
            Long roomId = 2L;
            int totalRound = 5;
            Category category = Category.EXAMPLE;

            RoomSettingRequest request = new RoomSettingRequest(totalRound, notValidTimeLimit, category);

            // when & then
            assertThatThrownBy(() -> roomService.updateRoomSetting(roomId, request))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("시간 제한은 %dms 이상, %dms 이하만 가능합니다. requested timeLimit: %d"
                            .formatted(10000, 30000, notValidTimeLimit));
        }
    }

    @Nested
    class 라운드_종료_여부 {

        private static final int TOTAL_ROUND = 5;
        private static final int TIME_LIMIT = 30_000;
        private static final RoomStatus STATUS = RoomStatus.PROGRESS;
        private static final Category CATEGORY = Category.EXAMPLE;

        @Test
        void 라운드가_종료되지_않았으면_게임도_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 2;
            Room room = roomRepository.save(
                    new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, STATUS, CATEGORY));
            int round = 2;

            // when
            RoundFinishedResponse roundFinishedResponse = roomService.getRoundFinished(room.getId(), round);

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
            Room room = roomRepository.save(new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, STATUS, CATEGORY));
            int round = 1;

            // when
            RoundFinishedResponse roundFinishedResponse = roomService.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isTrue(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse()
            );
        }

        @Test
        void 게임이_종료되면_라운드는_종료되지_않은_상태여야_한다() {
            // given
            int currentRound = 5;
            RoomStatus status = RoomStatus.FINISH;
            Room room = roomRepository.save(new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, status, CATEGORY));
            int round = 5;

            // when
            RoundFinishedResponse roundFinishedResponse = roomService.getRoundFinished(room.getId(), round);

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
            Room room = roomRepository.save(new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, STATUS, CATEGORY));
            int round = 5;

            // when
            RoundFinishedResponse roundFinishedResponse = roomService.getRoundFinished(room.getId(), round);

            // then
            assertAll(
                    () -> assertThat(roundFinishedResponse.isRoundFinished()).isFalse(),
                    () -> assertThat(roundFinishedResponse.isGameFinished()).isFalse()
            );
        }
    }

    @Nested
    class 방_초기화 {

        private static final int TOTAL_ROUND = 5;
        private static final int TIME_LIMIT = 30;
        private static final RoomStatus STATUS = RoomStatus.FINISH;
        private static final Category CATEGORY = Category.EXAMPLE;

        private BalanceContent content;

        @BeforeEach
        void setUp() {
            content = balanceContentRepository.save(new BalanceContent(CATEGORY, "A vs B"));
        }

        @Test
        void 방을_초기_상태로_초기화한다() {
            // given
            Room room = roomRepository.save(new Room(TOTAL_ROUND, 5, TIME_LIMIT, STATUS, CATEGORY));
            saveRoomContents(room);

            // when
            roomService.resetRoom(room.getId());

            // then
            Room resetRoom = roomRepository.getById(room.getId());
            List<RoomContent> notUsedRoomContents = roomContentRepository.findAllByRoomAndIsUsed(room, false);
            assertAll(
                    () -> assertThat(resetRoom.getStatus()).isEqualTo(RoomStatus.READY),
                    () -> assertThat(resetRoom.getCurrentRound()).isEqualTo(1),
                    () -> assertThat(notUsedRoomContents).isEmpty()
            );
        }

        @Test
        void 현재_라운드와_전체_라운드가_같지_않을_경우_예외가_발생한다() {
            // given
            int invalidCurrentRound = 4;
            Room room = roomRepository.save(new Room(TOTAL_ROUND, invalidCurrentRound, TIME_LIMIT, STATUS, CATEGORY));
            saveRoomContents(room);

            // when & then
            assertThatThrownBy(() -> roomService.resetRoom(room.getId()))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("방이 종료되지 않았습니다");
        }

        @ParameterizedTest
        @EnumSource(mode = Mode.EXCLUDE, names = {"FINISH"})
        void 방_상태가_FINISH가_아닐_경우_예외가_발생한다(RoomStatus status) {
            // given
            Room room = roomRepository.save(new Room(TOTAL_ROUND, 5, TIME_LIMIT, status, CATEGORY));
            saveRoomContents(room);

            // when & then
            assertThatThrownBy(() -> roomService.resetRoom(room.getId()))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("방이 종료되지 않았습니다");
        }

        private void saveRoomContents(Room room) {
            for (int i = 1; i < room.getTotalRound(); i++) {
                roomContentRepository.save(new RoomContent(room, content, i, null, false));
            }
        }

        @Test
        void 방을_초기화하면_방_투표를_삭제하고_전체_투표에_저장한다() {
            // given
            BalanceOption optionA = balanceOptionRepository.save(new BalanceOption("A", content));
            BalanceOption optionB = balanceOptionRepository.save(new BalanceOption("B", content));
            Room room = roomRepository.save(new Room(TOTAL_ROUND, 5, TIME_LIMIT, STATUS, CATEGORY));
            Member prin = memberRepository.save(PRIN.master(room));
            Member eden = memberRepository.save(EDEN.common(room));
            Member keochan = memberRepository.save(KEOCHAN.common(room));
            Member tacan = memberRepository.save(TACAN.common(room));
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(eden, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(keochan, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(tacan, optionB));

            // when
            roomService.resetRoom(room.getId());

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
    }
}
