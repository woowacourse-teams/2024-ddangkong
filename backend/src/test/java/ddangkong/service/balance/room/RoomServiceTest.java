package ddangkong.service.balance.room;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.service.BaseServiceTest;
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
            RoomJoinResponse roomServiceRoom = roomService.createRoom(nickname);

            // then
            assertThat(roomServiceRoom).isEqualTo(expected);
        }
    }
}
