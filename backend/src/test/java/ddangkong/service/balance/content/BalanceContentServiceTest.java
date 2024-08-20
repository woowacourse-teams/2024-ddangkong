package ddangkong.service.balance.content;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import ddangkong.facade.BaseServiceTest;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class BalanceContentServiceTest extends BaseServiceTest {

    @Autowired
    private BalanceContentService balanceContentService;

    @Nested
    class 컨텐츠_조회 {

        @Test
        void 아이디로_컨텐츠를_조회한다() {
            // given
            BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));

            // when
            BalanceContent foundContent = balanceContentService.getBalanceContent(content.getId());

            // then
            assertThat(foundContent.getId()).isEqualTo(content.getId());
        }

        @Test
        void 존재하지_않는_컨텐츠를_조회하면_예외가_발생한다() {
            // given
            Long invalidContentId = 99L;

            // when & then
            assertThatThrownBy(() -> balanceContentService.getBalanceContent(invalidContentId))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("존재하지 않는 컨텐츠입니다.");
        }
    }

    @Nested
    class 컨텐츠_선택 {

        @Test
        void 카테고리에_해당하는_컨텐츠를_주어진_개수만큼_선택한다() {
            // given
            Category category = Category.IF;
            balanceContentRepository.saveAll(List.of(
                    new BalanceContent(category, "민초 vs 반민초"),
                    new BalanceContent(category, "카리나 vs 윈터"),
                    new BalanceContent(category, "산 vs 바다"),
                    new BalanceContent(category, "얼굴 vs 성격"),
                    new BalanceContent(category, "부먹 vs 찍먹")
            ));
            int pickCount = 3;

            // when
            List<BalanceContent> pickedContents = balanceContentService.pickBalanceContents(category, pickCount);

            // then
            assertThat(pickedContents).hasSize(pickCount);
        }

        @Test
            // todo init-test.sql 제거되면 pickCount 3으로 수정
        void 카테고리에_해당하는_컨텐츠가_부족하면_예외가_발생한다() {
            // given
            Category category = Category.IF;
            balanceContentRepository.saveAll(List.of(
                    new BalanceContent(category, "민초 vs 반민초"),
                    new BalanceContent(category, "카리나 vs 윈터")
            ));
            int pickCount = 10;

            // when & then
            assertThatThrownBy(() -> balanceContentService.pickBalanceContents(category, pickCount))
                    .isExactlyInstanceOf(InternalServerException.class)
                    .hasMessageContaining("질문 수가 부족합니다. category: %s ".formatted(category));
        }
    }
}
