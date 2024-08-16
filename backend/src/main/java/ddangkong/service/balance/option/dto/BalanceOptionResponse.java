package ddangkong.service.balance.option.dto;

import ddangkong.domain.balance.option.BalanceOption;

public record BalanceOptionResponse(
        Long optionId,
        String name
) {

    public BalanceOptionResponse(BalanceOption balanceOption) {
        this(balanceOption.getId(), balanceOption.getName());
    }
}
