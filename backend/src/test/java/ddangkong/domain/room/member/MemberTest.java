package ddangkong.domain.room.member;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.room.Room;
import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class MemberTest {

    private static final Room ROOM = Room.createNewRoom();

    @Nested
    class 마스터로_변경 {

        @Test
        void 일반_유저를_마스터로_변경할_수_있다() {
            // given
            Member common = Member.createCommon("prin", ROOM);

            // when
            common.promoteToMaster();

            // then
            assertThat(common.isMaster()).isTrue();
        }

        @Test
        void 마스터_유저인_경우_예외를_발생한다() {
            // given
            Member master = Member.createMaster("prin", ROOM);

            // when & then
            assertThatThrownBy(() -> master.promoteToMaster())
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 멤버는 이미 마스터입니다.");
        }
    }

    @Nested
    class 일반_유저인지_확인 {

        @Test
        void 일반_유저인지_확인_할_수_있다() {
            Member common = Member.createCommon("prin", ROOM);

            boolean actual = common.isCommon();

            assertThat(actual).isTrue();
        }

        @Test
        void 마스터_유저는_일반_유저가_아니다() {
            Member master = Member.createMaster("prin", ROOM);

            boolean actual = master.isCommon();

            assertThat(actual).isFalse();
        }
    }
}
