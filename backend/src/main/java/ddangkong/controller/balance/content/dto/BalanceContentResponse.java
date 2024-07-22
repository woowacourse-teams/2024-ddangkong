package ddangkong.controller.balance.content.dto;

import ddangkong.controller.balance.option.dto.BalanceOptionResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import lombok.Builder;

public record BalanceContentResponse(
        Long questionId,
        Category category,
        String title,
        BalanceOptionResponse firstOption,
        BalanceOptionResponse secondOption
) {

    @Builder
    private BalanceContentResponse(BalanceContent balanceContent,
                                   BalanceOption firstOption,
                                   BalanceOption secondOption) {
        this(balanceContent.getId(),
                balanceContent.getCategory(),
                balanceContent.getName(),
                BalanceOptionResponse.from(firstOption),
                BalanceOptionResponse.from(secondOption));
    }
}
