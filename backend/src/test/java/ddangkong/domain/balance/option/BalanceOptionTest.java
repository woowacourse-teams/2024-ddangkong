package ddangkong.domain.balance.option;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class BalanceOptionTest {

    @Nested
    class 특정_질문의_선택지인지_확인할_수_있다 {

        private static final BalanceContent BALANCE_CONTENT =
                new BalanceContent(1L, Category.EXAMPLE, "민초 vs 반민초");
        private static final BalanceOption BALANCE_OPTION =
                new BalanceOption(1L, "민초", BALANCE_CONTENT);
        private static final Long CONTAIN_CONTENT_ID = 1L;
        private static final Long NOT_CONTAIN_CONTENT_ID = 2L;

        @Test
        void 특정_질문의_선택지가_아니다() {
            // when
            boolean actual = BALANCE_OPTION.isNotContained(NOT_CONTAIN_CONTENT_ID);

            // then
            assertThat(actual).isTrue();
        }

        @Test
        void 특정_질문의_선택지가_맞다() {
            // when
            boolean actual = BALANCE_OPTION.isNotContained(CONTAIN_CONTENT_ID);

            // then
            assertThat(actual).isFalse();

        }
    }
}
