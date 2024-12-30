package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;

public record BalanceContentCreateResponse(
        long contentId,
        String question,
        Category category,
        BalanceOptionAdminResponse firstOption,
        BalanceOptionAdminResponse secondOption
) {

    public static BalanceContentCreateResponse noVoteResponse(BalanceContent content,
                                                              BalanceOption firstOption,
                                                              BalanceOption secondOption) {
        return new BalanceContentCreateResponse(
                content.getId(),
                content.getName(),
                content.getCategory(),
                BalanceOptionAdminResponse.notExistVoteResponse(firstOption),
                BalanceOptionAdminResponse.notExistVoteResponse(secondOption)
        );
    }
}
