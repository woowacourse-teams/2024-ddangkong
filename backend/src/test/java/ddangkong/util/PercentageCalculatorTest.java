package ddangkong.util;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.util.PercentageCalculatorException;
import org.junit.jupiter.api.Test;

class PercentageCalculatorTest {

    @Test
    void 소수점_둘째_자리에서_반올림한_퍼센트를_반환한다() {
        // given
        long count = 3L;
        long totalCount = 4L;

        // when
        int percent = PercentageCalculator.calculatePercent(count, totalCount);

        // then
        assertThat(percent).isEqualTo(75);
    }

    @Test
    void totalCount가_0인_경우_기본값을_반환한다() {
        // given
        long count = 0L;
        long totalCount = 0L;

        // when
        int percent = PercentageCalculator.calculatePercent(count, totalCount);

        // then
        assertThat(percent).isEqualTo(0);
    }

    @Test
    void totalCount가_0보다_작으면_예외가_발생한다() {
        // given
        long count = 3L;
        long totalCount = -1L;

        // when & then
        assertThatThrownBy(() -> PercentageCalculator.calculatePercent(count, totalCount))
                .isExactlyInstanceOf(PercentageCalculatorException.class)
                .hasMessageContaining("totalCount는 0이상이어야 합니다. totalCount: -1");
    }

    @Test
    void count가_0보다_작으면_예외가_발생한다() {
        // given
        long count = -1L;
        long totalCount = 4L;

        // when & then
        assertThatThrownBy(() -> PercentageCalculator.calculatePercent(count, totalCount))
                .isExactlyInstanceOf(PercentageCalculatorException.class)
                .hasMessageContaining("count는 0이상이어야 합니다. count: -1");
    }

}
