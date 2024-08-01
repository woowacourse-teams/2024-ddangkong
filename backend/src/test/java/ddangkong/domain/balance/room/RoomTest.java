package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomTest {

    @Nested
    class 다음_라운드로_이동 {


        @Test
        void 다음_라운드로_이동할_수_있다() {
            // given
            Room room = Room.createNewRoom();
            int currentRound = room.getCurrentRound();
            int expectedRound = currentRound + 1;

            // when
            room.moveToNextRound();

            // then
            assertThat(room.getCurrentRound()).isEqualTo(expectedRound);
        }

        @Test
        void 마지막_라운드_일_경우_예외를_던진다() {
            // given
            int totalRound = 5;
            int currentRound = 5;
            int timeLimit = 30000;
            Room room = new Room(totalRound, currentRound, timeLimit, RoomStatus.PROGRESS);

            // when & then
            assertThatThrownBy(room::moveToNextRound)
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("마지막 라운드입니다.");
        }
    }

    @Nested
    class 라운드_종료 {

        private static final int FIXED_TOTAL_ROUND = 5;
        private static final int FIXED_TIME_LIMIT = 30_000;
        private static final RoomStatus FIXED_STATUS = RoomStatus.PROGRESS;

        @Test
        void 나의_라운드가_종료되었으면_true를_반환한다() {
            // given
            int currentRound = 2;
            Room room = new Room(FIXED_TOTAL_ROUND, currentRound, FIXED_TIME_LIMIT, FIXED_STATUS);
            int myRound = 1;

            // when
            boolean actual = room.isMyRoundFinished(myRound);

            // then
            assertThat(actual).isTrue();
        }

        @Test
        void 나의_라운드가_종료되지_않았으면_false를_반환한다() {
            // given
            int currentRound = 2;
            Room room = new Room(FIXED_TOTAL_ROUND, currentRound, FIXED_TIME_LIMIT, FIXED_STATUS);
            int myRound = 2;

            // when
            boolean actual = room.isMyRoundFinished(myRound);

            // then
            assertThat(actual).isFalse();
        }

        @Test
        void 나의_라운드가_방의_시작_라운드보다_작으면_예외가_발생한다() {
            // given
            Room room = new Room(FIXED_TOTAL_ROUND, 1, FIXED_TIME_LIMIT, FIXED_STATUS);
            int invalidMyRound = 0;

            // when & then
            assertThatThrownBy(() -> room.isMyRoundFinished(invalidMyRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("나의 라운드는 1보다 크거나 같아야 합니다. myRound : 0");
        }

        @Test
        void 나의_라운드가_방의_현재_라운드보다_크면_예외가_발생한다() {
            // given
            int currentRound = 1;
            Room room = new Room(FIXED_TOTAL_ROUND, currentRound, FIXED_TIME_LIMIT, FIXED_STATUS);
            int invalidMyRound = 2;

            // when & then
            assertThatThrownBy(() -> room.isMyRoundFinished(invalidMyRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("방의 currentRound보다 작거나 같아야 합니다. currentRound : 1, myRound : 2");
        }

        @Test
        void 전체_라운드가_종료되었으면_true를_반환한다() { // TODO
            // given

            // when

            // then

        }

        @Test
        void 전체_라운드가_종료되지_않았으면_false를_반환한다() { // TODO
            // given

            // when

            // then

        }
    }
}
