package ddangkong.service.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.controller.balance.room.dto.RoomInfoResponse;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.room.RoomContentRepository;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.balance.room.RoomStatus;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomServiceTest extends BaseServiceTest {

    @Autowired
    private RoomService roomService;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomContentRepository roomContentRepository;

    @Nested
    class 게임_방_정보_조회 {

        @Test
        void 게임_방_정보를_조회한다() {
            // when
            RoomJoinResponse room = roomService.createRoom("방장");
            roomService.joinRoom("멤버1", room.roomId());
            roomService.joinRoom("멤버2", room.roomId());

            // then
            RoomInfoResponse actual = roomService.findRoomInfo(room.roomId());

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
            MemberResponse expectedMemberResponse = new MemberResponse(7L, nickname, true);
            RoomJoinResponse expected = new RoomJoinResponse(4L, expectedMemberResponse);

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
            Long joinRoomId = 2L;
            MemberResponse expectedMemberResponse = new MemberResponse(7L, nickname, false);
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
                    .isInstanceOf(BadRequestException.class);
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
            Room room = new Room(5, 5, 30_000, RoomStatus.PROGRESS);
            roomRepository.save(room);
            return room.getId();
        }

        @Test
        void 방이_없을_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomService.moveToNextRound(NOT_EXIST_ROOM_ID))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방이 존재하지 않습니다.");
        }
    }
}
