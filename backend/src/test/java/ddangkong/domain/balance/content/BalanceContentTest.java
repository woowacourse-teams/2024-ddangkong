package ddangkong.domain.balance.content;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.balance.content.BlankBalanceContentException;
import ddangkong.exception.balance.content.LongBalanceContentException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class BalanceContentTest {

    private static final Category DEFAULT_CATEGORY = Category.IF;

    @Nested
    class 생성_검증 {

        @ParameterizedTest
        @ValueSource(strings = {"", " ", "  ", "\t\n"})
        void 컨텐츠_이름이_공백일_경우_예외가_발생한다(String name) {
            // when & then
            assertThatThrownBy(() -> new BalanceContent(DEFAULT_CATEGORY, name))
                    .isInstanceOf(BlankBalanceContentException.class);
        }

        @Test
        void 컨텐츠_이름이_정해진_글자_수를_초과할_경우_예외가_발생한다() {
            // given
            String name = "r".repeat(31);

            // when & then
            assertThatThrownBy(() -> new BalanceContent(DEFAULT_CATEGORY, name))
                    .isInstanceOf(LongBalanceContentException.class);
        }

        @ParameterizedTest
        @ValueSource(strings = {"땅콩 백엔드 중 더 잘생긴 사람은?", "둘 중 더 싫은 상황은?"})
        void 컨텐츠_이름이_조건에_맞을_경우_정상적으로_생성된다(String name) {
            // when & then
            assertThatCode(() -> new BalanceContent(DEFAULT_CATEGORY, name))
                    .doesNotThrowAnyException();
        }
    }

    @Nested
    class 이름_변경 {

        private static final BalanceContent DEFAULT_CONTENT = new BalanceContent(DEFAULT_CATEGORY, "name");

        @ParameterizedTest
        @ValueSource(strings = {"", " ", "  ", "\t\n"})
        void 변경할_컨텐츠_이름이_공백일_경우_예외가_발생한다(String name) {
            // when & then
            assertThatThrownBy(() -> DEFAULT_CONTENT.updateName(name))
                    .isInstanceOf(BlankBalanceContentException.class);
        }

        @Test
        void 변경할_컨텐츠_이름이_정해진_글자_수를_초과할_경우_예외가_발생한다() {
            // given
            String name = "r".repeat(31);

            // when & then
            assertThatThrownBy(() -> DEFAULT_CONTENT.updateName(name))
                    .isInstanceOf(LongBalanceContentException.class);
        }

        @ParameterizedTest
        @ValueSource(strings = {"땅콩 백엔드 중 더 잘생긴 사람은?", "둘 중 더 싫은 상황은?"})
        void 변경할_컨텐츠_이름이_조건에_맞을_경우_정상적으로_변경된다(String name) {
            // when
            DEFAULT_CONTENT.updateName(name);

            // then
            assertThat(DEFAULT_CONTENT.getName()).isEqualTo(name);
        }
    }
}
