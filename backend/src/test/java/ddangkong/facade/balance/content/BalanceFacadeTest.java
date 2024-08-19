package ddangkong.facade.balance.content;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.balance.content.Category;
import ddangkong.facade.BaseServiceTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class BalanceFacadeTest extends BaseServiceTest {

    @Autowired
    private BalanceFacade balanceFacade;

    @Nested
    class 벨런스_카테고리_조회 {

        @Test
        void 카테고리_목록을_가져온다() {
            // given
            BalanceCategoriesResponse expected = BalanceCategoriesResponse.from(Category.getCategories());

            // when & then
            assertThat(balanceFacade.getBalanceCategories()).isEqualTo(expected);
        }
    }
}