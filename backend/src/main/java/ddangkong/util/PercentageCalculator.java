package ddangkong.util;

import ddangkong.exception.InternalServerException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PercentageCalculator {

    private static final double SECOND_DECIMAL_PLACE_ROUNDING_FACTOR = 100.0;
    private static final int NON_TOTAL_COUNT_PERCENTAGE = 0;

    public static int calculatePercent(long count, long totalCount) {
        if (count < 0) {
            throw new InternalServerException("count는 0이상이어야 합니다. count: %d".formatted(count));
        }
        if (totalCount < 0) {
            throw new InternalServerException("totalCount는 0이상이어야 합니다. totalCount: %d".formatted(totalCount));
        }

        if (totalCount == 0) {
            return NON_TOTAL_COUNT_PERCENTAGE;
        }
        return (int) Math.round(count * SECOND_DECIMAL_PLACE_ROUNDING_FACTOR / totalCount);
    }
}
