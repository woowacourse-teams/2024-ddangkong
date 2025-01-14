package ddangkong.domain.balance.option;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.exception.balance.option.BlankBalanceOptionException;
import ddangkong.exception.balance.option.LongBalanceOptionException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class BalanceOptionTest {

    private static final BalanceContent DEFAULT_CONTENT = new BalanceContent(Category.IF, "name");

    @Nested
    class 생성_검증 {

        @ParameterizedTest
        @ValueSource(strings = {"", " ", "  ", "\t\n"})
        void 컨텐츠_이름이_공백일_경우_예외가_발생한다(String name) {
            // when & then
            assertThatThrownBy(() -> new BalanceOption(name, DEFAULT_CONTENT))
                    .isInstanceOf(BlankBalanceOptionException.class);
        }

        @Test
        void 컨텐츠_이름이_정해진_글자_수를_초과할_경우_예외가_발생한다() {
            // given
            String name = "r".repeat(17);

            // when & then
            assertThatThrownBy(() -> new BalanceOption(name, DEFAULT_CONTENT))
                    .isInstanceOf(LongBalanceOptionException.class);
        }

        @ParameterizedTest
        @ValueSource(strings = {"타칸이 더 인싸다.", "이든이 더 인싸다."})
        void 컨텐츠_이름이_조건에_맞을_경우_정상적으로_생성된다(String name) {
            // when & then
            assertThatCode(() -> new BalanceOption(name, DEFAULT_CONTENT))
                    .doesNotThrowAnyException();
        }
    }

    @Nested
    class 이름_변경 {

        private static final BalanceOption DEFAULT_OPTION = new BalanceOption("name", DEFAULT_CONTENT);

        @ParameterizedTest
        @ValueSource(strings = {"", " ", "  ", "\t\n"})
        void 변경할_컨텐츠_이름이_공백일_경우_예외가_발생한다(String name) {
            // when & then
            assertThatThrownBy(() -> DEFAULT_OPTION.updateName(name))
                    .isInstanceOf(BlankBalanceOptionException.class);
        }

        @Test
        void 변경할_컨텐츠_이름이_정해진_글자_수를_초과할_경우_예외가_발생한다() {
            // given
            String name = "r".repeat(17);

            // when & then
            assertThatThrownBy(() -> DEFAULT_OPTION.updateName(name))
                    .isInstanceOf(LongBalanceOptionException.class);
        }

        @ParameterizedTest
        @ValueSource(strings = {"O", "X 이건 정말 아니다"})
        void 변경할_컨텐츠_이름이_조건에_맞을_경우_정상적으로_변경된다(String name) {
            // when
            DEFAULT_OPTION.updateName(name);

            // then
            assertThat(DEFAULT_OPTION.getName()).isEqualTo(name);
        }
    }
}
