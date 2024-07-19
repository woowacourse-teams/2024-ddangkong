package ddangkong.service.question;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.controller.exception.BusinessLogicException;
import ddangkong.controller.option.dto.BalanceOptionResponse;
import ddangkong.controller.question.dto.BalanceQuestionResponse;
import ddangkong.domain.question.Category;
import ddangkong.service.BaseServiceTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class BalanceQuestionServiceTest extends BaseServiceTest {

    private static final Long PROGRESS_ROOM_ID = 1L;
    private static final Long NOT_EXIST_ROOM_ID = 2L;
    private static final BalanceQuestionResponse BALANCE_QUESTION_RESPONSE = new BalanceQuestionResponse(
        1L, Category.EXAMPLE, "똥 맛 카레 vs 카레 맛 똥",
            new BalanceOptionResponse(1L, "똥 맛 카레"),
            new BalanceOptionResponse(2L, "카레 맛 똥"));

    @Autowired
    private BalanceQuestionService balanceQuestionService;

    @Nested
    class 방의_최신_질문_조회 {

        @Test
        void 방의_최신_질문을_조회할_수_있다() {
            BalanceQuestionResponse actual = balanceQuestionService.findRecentBalanceQuestion(PROGRESS_ROOM_ID);

            assertThat(actual).isEqualTo(BALANCE_QUESTION_RESPONSE);
        }

        @Test
        void 방이_없을_경우_예외를_던진다() {
            assertThatThrownBy(() -> balanceQuestionService.findRecentBalanceQuestion(NOT_EXIST_ROOM_ID))
                    .isInstanceOf(BusinessLogicException.class)
                    .hasMessage("해당 방의 질문이 존재하지 않습니다.");
        }
    }
}
