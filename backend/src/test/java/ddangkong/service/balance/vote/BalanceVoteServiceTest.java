package ddangkong.service.balance.vote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class BalanceVoteServiceTest extends BaseServiceTest {

    @Autowired
    private BalanceVoteService balanceVoteService;

    @Nested
    class 투표_생성 {

        @Test
        void 투표를_생성_할_수_있다() {
            // given
            Long optionId = 1L;
            Long contentId = 1L;
            Long memberId = 1L;
            Long roomId = 1L;
            BalanceVoteResponse expected = new BalanceVoteResponse(optionId);

            // when
            BalanceVoteResponse actual = balanceVoteService.createBalanceVote(
                    new BalanceVoteRequest(memberId, optionId), roomId, contentId);

            // then
            assertThat(actual).isEqualTo(expected);
        }

        @Test
        void 질문에_해당하는_선택지가_아닌_경우_예외를_던진다() {
            // given
            Long optionId = 1L;
            Long contentId = 2L;
            Long memberId = 1L;
            Long roomId = 1L;

            // when & then
            assertThatThrownBy(() -> balanceVoteService.createBalanceVote(
                    new BalanceVoteRequest(memberId, optionId), roomId, contentId))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 질문의 선택지가 아닙니다. contentId : 2, optionId : 1");
        }

        @Test
        void 방에_있지_않은_멤버인_경우_예외를_던진다() {
            // given
            Long optionId = 1L;
            Long contentId = 1L;
            Long memberId = 1L;
            Long roomId = 2L;

            // when & then
            assertThatThrownBy(() -> balanceVoteService.createBalanceVote(
                    new BalanceVoteRequest(memberId, optionId), roomId, contentId))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방의 멤버가 아닙니다. roomId : 2, memberId : 1");
        }
    }
}
