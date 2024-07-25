package ddangkong.service.balance.vote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.controller.balance.content.dto.BalanceContentGroupResponse;
import ddangkong.controller.balance.content.dto.BalanceContentTotalResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionGroupResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionTotalResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteResultResponse;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import java.util.List;
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

    @Nested
    class 투표_결과_조회 {

        @Test
        void 투표_결과를_조회한다() {
            // given
            BalanceVoteResultResponse expected = new BalanceVoteResultResponse(
                    new BalanceContentGroupResponse(
                            new BalanceOptionGroupResponse(1L,
                                    "민초",
                                    List.of("mohamedeu al katan", "deundeun", "rupi"),
                                    3, 75),
                            new BalanceOptionGroupResponse(2L,
                                    "반민초",
                                    List.of("rapper lee"), 1, 25)
                    ),
                    new BalanceContentTotalResponse(
                            new BalanceOptionTotalResponse(1L, "민초", 50),
                            new BalanceOptionTotalResponse(2L, "반민초", 50)
                    )
            );

            // when
            BalanceVoteResultResponse actual = balanceVoteService.findBalanceVoteResult(1L, 1L);

            // then
            assertThat(actual).isEqualTo(expected);
        }

        @Test
        void 진행중인_주제가_아닌것의_투표_결과를_요청하면_예외를_발생시킨다() {
            // when & then
            assertThatThrownBy(() -> balanceVoteService.findBalanceVoteResult(1L, 2L))
                    .isInstanceOf(BadRequestException.class);
        }
    }
}
