package ddangkong.facade.balance;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.facade.BaseServiceTest;
import ddangkong.facade.balance.dto.BalanceContentCreateRequest;
import ddangkong.facade.balance.dto.BalanceContentCreateResponse;
import ddangkong.facade.balance.dto.BalanceContentPatchRequest;
import ddangkong.facade.balance.dto.BalanceOptionPatchRequest;
import java.util.Optional;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class AdminBalanceContentFacadeTest extends BaseServiceTest {

    @Autowired
    private AdminBalanceContentFacade adminBalanceContentFacade;

    @Nested
    class 밸런스_게임_질문지_추가 {

        @Test
        void 밸런스_게임_질문지를_추가할_수_있다() {
            // given
            BalanceContentCreateRequest request = new BalanceContentCreateRequest(
                    Category.IF, "다음 중 더 좋은 초능력은?", "순간이동", "불로장생");

            // when
            BalanceContentCreateResponse response = adminBalanceContentFacade.createContent(request);

            // then
            assertAll(
                    () -> assertThat(response.question()).isEqualTo(request.question()),
                    () -> assertThat(response.category()).isEqualTo(request.category()),
                    () -> assertThat(response.firstOption().name()).isEqualTo(request.firstOption()),
                    () -> assertThat(response.secondOption().name()).isEqualTo(request.secondOption()),
                    () -> assertThat(balanceContentRepository.count()).isEqualTo(1L),
                    () -> assertThat(balanceOptionRepository.count()).isEqualTo(2L)
            );
        }
    }

    @Nested
    class 밸런스_게임_질문지_변경 {

        @Test
        void 밸런스_게임_질문지_이름을_변경할_수_있다() {
            // given
            BalanceContent content = balanceContentFixture.create();
            BalanceContentPatchRequest request = new BalanceContentPatchRequest(content.getId(), "변경된 질문지");

            // when
            adminBalanceContentFacade.updateContent(request);

            // then
            Optional<BalanceContent> foundContent = balanceContentRepository.findById(content.getId());
            assertAll(
                    () -> assertThat(foundContent).isNotEmpty(),
                    () -> assertThat(foundContent.get().getName()).isEqualTo(request.name())
            );
        }
    }

    @Nested
    class 밸런스_게임_선택지_변경 {

        @Test
        void 밸런스_게임_선택지_이름을_변경할_수_있다() {
            // given
            BalanceContent content = balanceContentFixture.create();
            BalanceOption option = balanceOptionFixture.create(content);
            BalanceOptionPatchRequest request = new BalanceOptionPatchRequest(option.getId(), "변경된 선택지");

            // when
            adminBalanceContentFacade.updateOption(request);

            // then
            Optional<BalanceOption> foundOption = balanceOptionRepository.findById(option.getId());
            assertAll(
                    () -> assertThat(foundOption).isNotEmpty(),
                    () -> assertThat(foundOption.get().getName()).isEqualTo(request.name())
            );
        }
    }
}
