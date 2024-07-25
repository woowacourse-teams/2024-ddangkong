package ddangkong.domain.member;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.balance.room.Room;
import ddangkong.domain.support.EntityTestUtils;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class MemberTest {

    @Nested
    class 특정_방에_있는지_확인 {

        @Test
        void 특정_방에_없다() {
            // given
            Room room = new Room();
            EntityTestUtils.setId(room, 1L);
            Member member = Member.createMaster("rapper lee", room);
            EntityTestUtils.setId(member, 1L);

            // when
            boolean actual = member.isNotIn(2L);

            // then
            assertThat(actual).isTrue();
        }

        @Test
        void 특정_방에_있다() {
            // given
            Long roomId = 1L;
            Room room = new Room();
            EntityTestUtils.setId(room, roomId);
            Member member = Member.createMaster("rapper lee", room);
            EntityTestUtils.setId(member, 1L);

            // when
            boolean actual = member.isNotIn(roomId);

            // then
            assertThat(actual).isFalse();
        }
    }
}
