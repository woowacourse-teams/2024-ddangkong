package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.option.BalanceOption;

public record BalanceOptionAdminResponse(
        long optionId,
        String name,
        int count,
        int percent
) {

    private static final int NOT_EXIST_VOTE_COUNT = 0;
    private static final int NOT_EXIST_VOTE_PERCENTAGE = 50;

    public static BalanceOptionAdminResponse notExistVoteResponse(BalanceOption option) {
        return new BalanceOptionAdminResponse(
                option.getId(),
                option.getName(),
                NOT_EXIST_VOTE_COUNT,
                NOT_EXIST_VOTE_PERCENTAGE
        );
    }
}
