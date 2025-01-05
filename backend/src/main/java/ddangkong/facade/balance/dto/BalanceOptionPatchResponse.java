package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.option.BalanceOption;

public record BalanceOptionPatchResponse(Long optionId, String name) {

    public BalanceOptionPatchResponse(BalanceOption option) {
        this(option.getId(), option.getName());
    }
}
