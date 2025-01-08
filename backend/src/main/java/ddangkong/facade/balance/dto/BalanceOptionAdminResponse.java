package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.util.PercentageCalculator;

public record BalanceOptionAdminResponse(
        Long optionId,
        String name,
        int count,
        int percent
) {

    private static final int NOT_EXIST_VOTE_COUNT = 0;
    private static final int NOT_EXIST_VOTE_PERCENTAGE = 0;

    public BalanceOptionAdminResponse(BalanceOption option) {
        this(option.getId(), option.getName(), NOT_EXIST_VOTE_COUNT, NOT_EXIST_VOTE_PERCENTAGE);
    }

    public BalanceOptionAdminResponse(BalanceOption option, int contentVoteCount, int optionVoteCount) {
        this(
                option.getId(),
                option.getName(),
                optionVoteCount,
                PercentageCalculator.calculate(optionVoteCount, contentVoteCount)
        );
    }
}
