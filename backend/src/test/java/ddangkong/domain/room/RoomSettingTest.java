package ddangkong.domain.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.room.InvalidRangeTotalRoundException;
import ddangkong.exception.room.InvalidTimeLimitException;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class RoomSettingTest {

    private static final List<Integer> ALLOWED_TIME_LIMIT = List.of(5_000, 10_000, 15_000, 30_000);

    @Nested
    class 방_설정 {

        @ParameterizedTest
        @ValueSource(ints = {3, 10})
        void 라운드는_3이상_10이하_여야한다(int validTotalRound) {
            // when & then
            assertThatCode(() -> new RoomSetting(validTotalRound, 5000, Category.IF))
                    .doesNotThrowAnyException();
        }

        @ParameterizedTest
        @ValueSource(ints = {2, 11})
        void 라운드는_3미만_10초과인_경우_예외를_던진다(int notValidTotalRound) {
            // when & then
            assertThatThrownBy(() -> new RoomSetting(notValidTotalRound, 5000, Category.IF))
                    .isExactlyInstanceOf(InvalidRangeTotalRoundException.class)
                    .hasMessage("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                            .formatted(3, 10, notValidTotalRound));
        }

        @ParameterizedTest
        @ValueSource(ints = {5_000, 10_000, 15_000, 30_000})
        void 시간_제한은_허용된_시간_중_하나_여야한다(int validateTimeLimit) {
            // when & then
            assertThatCode(() -> new RoomSetting(5, validateTimeLimit, Category.IF))
                    .doesNotThrowAnyException();
        }

        @ParameterizedTest
        @ValueSource(ints = {4_999, 10_001, 15_001, 30_001})
        void 시간_제한은_특정_시간이_아니라면_예외를_던진다(int notValidTimeLimit) {
            // when & then
            assertThatThrownBy(() -> new RoomSetting(5, notValidTimeLimit, Category.IF))
                    .isExactlyInstanceOf(InvalidTimeLimitException.class)
                    .hasMessage("시간 제한은 %s 만 가능합니다. requested timeLimit: %d"
                            .formatted(ALLOWED_TIME_LIMIT.toString(), notValidTimeLimit));
        }
    }

    @Nested
    class 방_라운드_변경 {

        @ParameterizedTest
        @ValueSource(ints = {3, 10})
        void 라운드는_3이상_10이하_여야한다(int totalRound) {
            // given
            RoomSetting setting = new RoomSetting(5, 5_000, Category.IF);

            // when
            setting.updateTotalRound(totalRound);

            // then
            assertThat(setting.getTotalRound()).isEqualTo(totalRound);
        }

        @ParameterizedTest
        @ValueSource(ints = {2, 11})
        void 라운드는_3미만_10초과인_경우_예외를_던진다(int notValidTotalRound) {
            // given
            RoomSetting setting = new RoomSetting(5, 5_000, Category.IF);

            // when & then
            assertThatThrownBy(() -> setting.updateTotalRound(notValidTotalRound))
                    .isExactlyInstanceOf(InvalidRangeTotalRoundException.class)
                    .hasMessage("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                            .formatted(3, 10, notValidTotalRound));
        }
    }

    @Nested
    class 제한_시간_설정 {
        @ParameterizedTest
        @ValueSource(ints = {5_000, 10_000, 15_000, 30_000})
        void 시간_제한은_허용된_시간_중_하나_여야한다(int timeLimit) {
            // given
            RoomSetting setting = new RoomSetting(5, 5_000, Category.IF);

            // when
            setting.updateTimeLimit(timeLimit);

            // then
            assertThat(setting.getTimeLimit()).isEqualTo(timeLimit);
        }

        @ParameterizedTest
        @ValueSource(ints = {4_999, 10_001, 15_001, 30_001})
        void 시간_제한은_특정_시간이_아니라면_예외를_던진다(int notValidTimeLimit) {
            // given
            RoomSetting setting = new RoomSetting(5, 5_000, Category.IF);

            // when & then
            assertThatThrownBy(() -> setting.updateTimeLimit(notValidTimeLimit))
                    .isExactlyInstanceOf(InvalidTimeLimitException.class)
                    .hasMessage("시간 제한은 %s 만 가능합니다. requested timeLimit: %d"
                            .formatted(ALLOWED_TIME_LIMIT.toString(), notValidTimeLimit));
        }
    }
}
