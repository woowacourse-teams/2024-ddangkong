package ddangkong.service.balance.vote.dto;

import ddangkong.domain.balance.vote.BalanceVote;

public record BalanceVoteResponse(
        Long optionId
) {
    public BalanceVoteResponse(BalanceVote balanceVote) {
        this(balanceVote.getOptionId());
    }
}
