package ddangkong.service.balance.vote.dto;

import ddangkong.domain.balance.option.BalanceOption;

public record OptionTotalBalanceVoteResponse(
        Long optionId,
        String name,
        int percent
) {

    public OptionTotalBalanceVoteResponse(BalanceOption balanceOption, Long contentVoteCount, Long optionVoteCount) {
        this(balanceOption.getId(), balanceOption.getName(), getVotePercent(contentVoteCount, optionVoteCount));
    }

    private static int getVotePercent(Long contentVoteCount, Long optionVoteCount) {
        return (int) Math.round(optionVoteCount * 1.0 / contentVoteCount * 100);
    }
}
