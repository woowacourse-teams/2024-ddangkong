package ddangkong.util;

import ddangkong.exception.InternalServerException;

public class PercentageCalculator {

    private static final double SECOND_DECIMAL_PLACE_ROUNDING_FACTOR = 100.0;

    public static int calculatePercent(long count, long totalCount) {
        if (count < 0) {
            throw new InternalServerException("count는 0이상이어야 합니다. count: %d".formatted(count));
        }
        if (totalCount < 1) {
            throw new InternalServerException("totalCount는 1이상이어야 합니다. totalCount: %d".formatted(totalCount));
        }
        return (int) Math.round(count * SECOND_DECIMAL_PLACE_ROUNDING_FACTOR / totalCount);
    }
}
