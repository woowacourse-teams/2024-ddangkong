package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;

public record BalanceContentAdminResponse(
        long contentId,
        String question,
        BalanceOptionAdminResponse firstOption,
        BalanceOptionAdminResponse secondOption
) {

    public static BalanceContentAdminResponse noVoteResponse(BalanceContent content,
                                                             BalanceOption firstOption,
                                                             BalanceOption secondOption) {
        return new BalanceContentAdminResponse(
                content.getId(),
                content.getName(),
                BalanceOptionAdminResponse.notExistVoteResponse(firstOption),
                BalanceOptionAdminResponse.notExistVoteResponse(secondOption)
        );
    }
}
