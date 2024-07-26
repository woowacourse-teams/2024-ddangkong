package ddangkong.controller.balance.vote.dto;

import ddangkong.domain.balance.vote.BalanceVote;

public record BalanceVoteResponse(
        Long optionId
) {
    public BalanceVoteResponse(BalanceVote balanceVote) {
        this(balanceVote.getOptionId());
    }
}
