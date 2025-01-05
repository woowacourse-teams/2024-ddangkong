package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;

public record BalanceContentCreateResponse(
        Long contentId,
        String question,
        Category category,
        BalanceOptionAdminResponse firstOption,
        BalanceOptionAdminResponse secondOption
) {

    public BalanceContentCreateResponse(BalanceContent content,
                                        BalanceOption firstOption,
                                        BalanceOption secondOption) {
        this(content.getId(),
                content.getName(),
                content.getCategory(),
                new BalanceOptionAdminResponse(firstOption),
                new BalanceOptionAdminResponse(secondOption));
    }
}
