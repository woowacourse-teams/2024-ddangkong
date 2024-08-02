package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

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
            Room room = new Room(totalRound, currentRound, timeLimit, RoomStatus.PROGRESS, Category.EXAMPLE);

            // when & then
            assertThatThrownBy(room::moveToNextRound)
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("마지막 라운드입니다.");
        }
    }

    @Nested
    class 방_설정_변경 {

        @ParameterizedTest
        @ValueSource(ints = {2, 11})
        void 라운드는_3이상_10이하_여야한다(int notValidTotalRound) {
            // given
            Room room = Room.createNewRoom();

            // when & then
            assertThatThrownBy(() -> room.updateTotalRound(notValidTotalRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                            .formatted(3, 10, notValidTotalRound));
        }

        @ParameterizedTest
        @ValueSource(ints = {9000, 31000})
        void 시간_제한은_10000이상_30000이하_여야한다(int notValidTimeLimit) {
            // given
            Room room = Room.createNewRoom();

            // when & then
            assertThatThrownBy(() -> room.updateTimeLimit(notValidTimeLimit))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("시간 제한은 %dms 이상, %dms 이하만 가능합니다. requested timeLimit: %d"
                            .formatted(10000, 30000, notValidTimeLimit));
        }
    }
}
