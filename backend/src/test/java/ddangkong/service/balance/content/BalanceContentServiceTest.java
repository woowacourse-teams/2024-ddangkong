package ddangkong.service.balance.content;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionResponse;
import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class BalanceContentServiceTest extends BaseServiceTest {

    @Autowired
    private BalanceContentService balanceContentService;

    @Nested
    class 현재_방의_밸런스_게임_내용_조회 {

        private static final Long PROGRESS_ROOM_ID = 1L;
        private static final Long NOT_EXIST_ROOM_ID = 99999999L;
        private static final Long NOT_PROGRESSED_ROOM_ID = 2L;
        private static final Long READY_ROOM_ID = 4L;
        private static final Long FINISHED_ROOM_ID = 5L;
        private static final BalanceContentResponse BALANCE_CONTENT_RESPONSE = new BalanceContentResponse(
                1L,
                Category.EXAMPLE,
                5,
                2,
                30_000, // TODO 추후 sec으로 변경
                "민초 vs 반민초",
                new BalanceOptionResponse(1L, "민초"),
                new BalanceOptionResponse(2L, "반민초"));

        @Test
        void 방의_진행_중인_밸런스_게임_내용을_조회할_수_있다() {
            // when
            BalanceContentResponse actual = balanceContentService.findRecentBalanceContent(PROGRESS_ROOM_ID);

            // then
            assertThat(actual).isEqualTo(BALANCE_CONTENT_RESPONSE);
        }

        @Test
        void 방이_없을_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> balanceContentService.findRecentBalanceContent(NOT_EXIST_ROOM_ID))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방이 존재하지 않습니다.");
        }

        @Test
        void 방의_현재_라운드의_질문이_없을_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> balanceContentService.findRecentBalanceContent(NOT_PROGRESSED_ROOM_ID))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방의 현재 진행중인 질문이 존재하지 않습니다.");
        }

        @Test
        void 방의_상태가_진행중이_아닌_경우_예외를_던진다() {
            // when & then
            assertAll(
                    () -> assertThatThrownBy(() -> balanceContentService.findRecentBalanceContent(READY_ROOM_ID))
                            .isInstanceOf(BadRequestException.class)
                            .hasMessage("해당 방은 게임을 진행하고 있지 않습니다."),
                    () -> assertThatThrownBy(() -> balanceContentService.findRecentBalanceContent(FINISHED_ROOM_ID))
                            .isInstanceOf(BadRequestException.class)
                            .hasMessage("해당 방은 게임을 진행하고 있지 않습니다.")
            );
        }
    }
}
