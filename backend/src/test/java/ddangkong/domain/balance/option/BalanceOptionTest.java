package ddangkong.domain.balance.option;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.support.EntityTestUtils;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class BalanceOptionTest {

    @Nested
    class 특정_질문의_선택지인지_확인할_수_있다 {

        @Test
        void 특정_질문의_선택지가_아니다() {
            // given
            BalanceContent balanceContent = new BalanceContent(Category.EXAMPLE, "민초 vs 반민초");
            EntityTestUtils.setId(balanceContent, 1L);
            BalanceOption balanceOption = new BalanceOption("민초", balanceContent);
            EntityTestUtils.setId(balanceOption, 1L);

            // when
            boolean actual = balanceOption.isNotContained(2L);

            // then
            assertThat(actual).isTrue();
        }

        @Test
        void 특정_질문의_선택지가_맞다() {
            // given
            Long balanceContentId = 1L;
            BalanceContent balanceContent = new BalanceContent(Category.EXAMPLE, "민초 vs 반민초");
            EntityTestUtils.setId(balanceContent, balanceContentId);
            BalanceOption balanceOption = new BalanceOption("민초", balanceContent);
            EntityTestUtils.setId(balanceOption, 1L);

            // when
            boolean actual = balanceOption.isNotContained(balanceContentId);

            // then
            assertThat(actual).isFalse();
        }
    }
}
