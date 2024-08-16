package ddangkong.facade.balance.vote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;

public record ContentTotalBalanceVoteResponse(
        OptionTotalBalanceVoteResponse firstOption,
        OptionTotalBalanceVoteResponse secondOption
) {

    public static ContentTotalBalanceVoteResponse create(BalanceOptions balanceOptions,
                                                         long firstOptionVoteCount,
                                                         long secondOptionVoteCount) {
        BalanceOption fistOption = balanceOptions.getFistOption();
        BalanceOption secondOption = balanceOptions.getSecondOption();
        long contentVoteCount = firstOptionVoteCount + secondOptionVoteCount;

        return new ContentTotalBalanceVoteResponse(
                new OptionTotalBalanceVoteResponse(fistOption, contentVoteCount, firstOptionVoteCount),
                new OptionTotalBalanceVoteResponse(secondOption, contentVoteCount, secondOptionVoteCount)
        );
    }
}
