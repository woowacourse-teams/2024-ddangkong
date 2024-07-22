package ddangkong.service.balance.content;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionResponse;
import ddangkong.domain.balance.content.Category;
import ddangkong.service.BaseServiceTest;
import ddangkong.service.excpetion.BusinessLogicException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class BalanceContentServiceTest extends BaseServiceTest {

    private static final Long PROGRESS_ROOM_ID = 1L;
    private static final Long NOT_EXIST_ROOM_ID = 2L;
    private static final BalanceContentResponse BALANCE_CONTENT_RESPONSE = new BalanceContentResponse(
            1L, Category.EXAMPLE, "민초 vs 반민초",
            new BalanceOptionResponse(1L, "민초"),
            new BalanceOptionResponse(2L, "반민초"));

    @Autowired
    private BalanceContentService balanceContentService;

    @Nested
    class 방의_최신_내용_조회 {

        @Test
        void 방의_최신_내용을_조회할_수_있다() {
            BalanceContentResponse actual = balanceContentService.findRecentBalanceContent(PROGRESS_ROOM_ID);

            assertThat(actual).isEqualTo(BALANCE_CONTENT_RESPONSE);
        }

        @Test
        void 방이_없을_경우_예외를_던진다() {
            assertThatThrownBy(() -> balanceContentService.findRecentBalanceContent(NOT_EXIST_ROOM_ID))
                    .isInstanceOf(BusinessLogicException.class)
                    .hasMessage("해당 방의 질문이 존재하지 않습니다.");
        }
    }
}
