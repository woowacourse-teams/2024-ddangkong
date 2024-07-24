package ddangkong.service.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomServiceTest extends BaseServiceTest {

    @Autowired
    private RoomService roomService;

    @Nested
    class 방_생성 {

        @Test
        void 방_생성_시_멤버를_생성하고_방을_생성한다() {
            // given
            String nickname = "나는방장";
            MemberResponse expectedMemberResponse = new MemberResponse(5L, nickname, true);
            RoomJoinResponse expected = new RoomJoinResponse(3L, expectedMemberResponse);

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
            MemberResponse expectedMemberResponse = new MemberResponse(5L, nickname, false);
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
    class 게임_방_전체_멤버_조회 {

        @Test
        void 게임_방_전쳬_멤버_조회() {
            // given
            Long roomId = 1L;

            // when
            RoomMembersResponse actual = roomService.findAllRoomMember(roomId);

            // then
            Assertions.assertThat(actual.members()).hasSize(4);
        }
    }
}
