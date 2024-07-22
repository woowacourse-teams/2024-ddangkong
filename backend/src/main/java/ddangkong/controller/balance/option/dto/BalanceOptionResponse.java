package ddangkong.controller.balance.option.dto;

import ddangkong.domain.balance.option.BalanceOption;

public record BalanceOptionResponse(
        Long optionId,
        String name
) {
    public static BalanceOptionResponse from(BalanceOption balanceOption) {
        return new BalanceOptionResponse(balanceOption.getId(), balanceOption.getName());
    }
}
