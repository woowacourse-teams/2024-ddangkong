package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class RoomTest {

    @Nested
    class 다음_라운드로_이동 {


        @Test
        void 다음_라운드로_이동할_수_있다() {
            // given
            int totalRound = 5;
            int currentRound = 1;
            int timeLimit = 30_000;
            Room room = new Room(totalRound, currentRound, timeLimit, RoomStatus.PROGRESS);
            int expectedRound = currentRound + 1;

            // when
            room.moveToNextRound();

            // then
            assertThat(room.getCurrentRound()).isEqualTo(expectedRound);
        }

        @Test
        void 마지막_라운드_일_경우_게임을_종료한다() {
            // given
            int totalRound = 5;
            int currentRound = 5;
            int timeLimit = 30_000;
            RoomStatus status = RoomStatus.PROGRESS;
            Room room = new Room(totalRound, currentRound, timeLimit, status);

            // when
            room.moveToNextRound();

            // then
            assertAll(
                    () -> assertThat(room.getCurrentRound()).isEqualTo(totalRound),
                    () -> assertThat(room.getStatus()).isEqualTo(RoomStatus.FINISH)
            );
        }

        @ParameterizedTest
        @CsvSource({"READY", "FINISH"})
        void 게임이_진행_중이_아닐_경우_예외를_던진다(RoomStatus status) {
            // given
            int totalRound = 5;
            int currentRound = 5;
            int timeLimit = 30_000;
            Room room = new Room(totalRound, currentRound, timeLimit, status);

            // when & then
            assertThatThrownBy(room::moveToNextRound)
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("게임이 진행 중이 아닙니다.");
        }
    }
}
