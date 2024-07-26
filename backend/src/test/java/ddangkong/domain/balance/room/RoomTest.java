package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomTest {

    @Nested
    class 다음_라운드로_이동 {

        private static final int START_ROUND = 1;
        private static final int TOTAL_ROUND = 5;

        @Test
        void 다음_라운드로_이동할_수_있다() {
            // given
            Room room = new Room();
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
            Room room = new Room();
            goToFinalRound(room);

            // when & then
            assertThatThrownBy(() -> room.moveToNextRound())
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("마지막 라운드입니다.");
        }

        private void goToFinalRound(Room room) {
            for (int round = START_ROUND; round < TOTAL_ROUND; round++) {
                room.moveToNextRound();
            }
        }
    }
}
