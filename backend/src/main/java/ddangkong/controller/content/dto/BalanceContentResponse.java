package ddangkong.controller.content.dto;

import ddangkong.controller.option.dto.BalanceOptionResponse;
import ddangkong.domain.content.BalanceContent;
import ddangkong.domain.content.Category;
import ddangkong.domain.option.BalanceOption;
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
