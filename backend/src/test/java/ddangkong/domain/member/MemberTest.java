package ddangkong.domain.member;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.balance.content.Room;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class MemberTest {

    @Nested
    class 특정_방에_있는지_확인할_수_있다 {

        private static final Room ROOM = new Room(1L);
        private static final Member MEMBER = new Member(1L, "rapper lee", ROOM);
        private static final Long CONTAIN_ROOM_ID = 1L;
        private static final Long NOT_CONTAIN_ROOM_ID = 2L;

        @Test
        void 특정_방에_없다() {
            // given
            boolean actual = MEMBER.isNotIn(NOT_CONTAIN_ROOM_ID);

            // actual
            assertThat(actual).isTrue();
        }

        @Test
        void 특정_방에_있다() {
            // given
            boolean actual = MEMBER.isNotIn(CONTAIN_ROOM_ID);

            // actual
            assertThat(actual).isFalse();
        }
    }
}
