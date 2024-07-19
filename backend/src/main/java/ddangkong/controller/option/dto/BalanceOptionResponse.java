package ddangkong.controller.option.dto;

import ddangkong.domain.option.BalanceOption;

public record BalanceOptionResponse(
        Long optionId,
        String content
) {
    public static BalanceOptionResponse from(BalanceOption balanceOption) {
        return new BalanceOptionResponse(balanceOption.getId(), balanceOption.getContent());
    }
}
