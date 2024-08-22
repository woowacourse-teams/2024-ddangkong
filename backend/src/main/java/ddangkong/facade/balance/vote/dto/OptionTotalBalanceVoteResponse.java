package ddangkong.facade.balance.vote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.util.PercentageCalculator;

public record OptionTotalBalanceVoteResponse(
        Long optionId,
        String name,
        int percent
) {

    public OptionTotalBalanceVoteResponse(BalanceOption balanceOption, long contentVoteCount, long optionVoteCount) {
        this(balanceOption.getId(),
                balanceOption.getName(),
                PercentageCalculator.calculate(optionVoteCount, contentVoteCount));
    }
}
