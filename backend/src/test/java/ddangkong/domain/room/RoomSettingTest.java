package ddangkong.domain.room;

import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.room.InvalidRangeTotalRoundException;
import ddangkong.exception.room.InvalidTimeLimitException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class RoomSettingTest {
    @Nested
    class 방_설정_변경 {
        @ParameterizedTest
        @ValueSource(ints = {2, 11})
        void 라운드는_3이상_10이하_여야한다(int notValidTotalRound) {
            // when & then
            assertThatThrownBy(() -> new RoomSetting(notValidTotalRound, 5000, Category.IF))
                    .isExactlyInstanceOf(InvalidRangeTotalRoundException.class)
                    .hasMessage("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                            .formatted(3, 10, notValidTotalRound));
        }

        @ParameterizedTest
        @ValueSource(ints = {5001, 10001, 15001})
        void 시간_제한은_5000_10000_15000중_하나_여야한다(int notValidTimeLimit) {
            // when & then
            assertThatThrownBy(() -> new RoomSetting(5, notValidTimeLimit, Category.IF))
                    .isExactlyInstanceOf(InvalidTimeLimitException.class)
                    .hasMessage("시간 제한은 %dms / %dms / %dms 만 가능합니다. requested timeLimit: %d"
                            .formatted(5000, 10000, 15000, notValidTimeLimit));
        }
    }
}
