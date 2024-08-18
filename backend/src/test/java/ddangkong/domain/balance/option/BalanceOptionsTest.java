package ddangkong.domain.balance.option;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.support.EntityTestUtils;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class BalanceOptionsTest {

    private final BalanceContent content = new BalanceContent(Category.EXAMPLE, "A vs B");

    @Nested
    class 일급_컬렉션_생성 {

        @Test
        void 옵션_일급_컬렉션을_생성한다() {
            // given
            List<BalanceOption> options = List.of(
                    new BalanceOption("A", content),
                    new BalanceOption("B", content)
            );

            // when & then
            assertThatCode(() -> new BalanceOptions(options)).doesNotThrowAnyException();
        }

        @Test
        void 옵션_개수가_2개가_아닐_경우_예외가_발생한다() {
            // given
            List<BalanceOption> options = List.of(
                    new BalanceOption("A", content),
                    new BalanceOption("B", content),
                    new BalanceOption("C", content)
            );

            // when & then
            assertThatThrownBy(() -> new BalanceOptions(options))
                    .isExactlyInstanceOf(InternalServerException.class)
                    .hasMessageContaining("밸런스 게임의 선택지가 3개입니다");
        }
    }

    @Nested
    class 옵션_조회 {

        @Test
        void 첫_번째_옵션을_조회한다() {
            // given
            List<BalanceOption> options = List.of(
                    new BalanceOption("A", content),
                    new BalanceOption("B", content)
            );
            BalanceOptions balanceOptions = new BalanceOptions(options);

            // when
            BalanceOption firstOption = balanceOptions.getFirstOption();

            // then
            assertThat(firstOption).isEqualTo(options.get(0));
        }

        @Test
        void 두_번째_옵션을_조회한다() {
            // given
            List<BalanceOption> options = List.of(
                    new BalanceOption("A", content),
                    new BalanceOption("B", content)
            );
            BalanceOptions balanceOptions = new BalanceOptions(options);

            // when
            BalanceOption secondOption = balanceOptions.getSecondOption();

            // then
            assertThat(secondOption).isEqualTo(options.get(1));
        }

        @Test
        void 아이디로_옵션을_조회한다() {
            // given
            BalanceOption firstOption = new BalanceOption("A", content);
            EntityTestUtils.setId(firstOption, 1L);
            BalanceOption secondOption = new BalanceOption("B", content);
            EntityTestUtils.setId(secondOption, 2L);
            BalanceOptions balanceOptions = new BalanceOptions(List.of(firstOption, secondOption));

            // when
            BalanceOption option = balanceOptions.getOptionById(1L);

            // then
            assertThat(option.getId()).isEqualTo(firstOption.getId());
        }

        @Test
        void 존재하지_않는_옵션을_조회할_경우_예외가_발생한다() {
            // given
            BalanceOption firstOption = new BalanceOption("A", content);
            EntityTestUtils.setId(firstOption, 1L);
            BalanceOption secondOption = new BalanceOption("B", content);
            EntityTestUtils.setId(secondOption, 2L);
            BalanceOptions balanceOptions = new BalanceOptions(List.of(firstOption, secondOption));

            // when & then
            assertThatThrownBy(() -> balanceOptions.getOptionById(3L))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("해당 옵션이 존재하지 않습니다");
        }
    }
}
