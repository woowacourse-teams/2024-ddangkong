package ddangkong.service.balance.room;

import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import ddangkong.service.BaseServiceTest;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class RoomServiceTest extends BaseServiceTest {

    @Autowired
    private RoomService roomService;

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
