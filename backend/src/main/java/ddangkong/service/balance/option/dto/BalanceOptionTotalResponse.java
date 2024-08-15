package ddangkong.service.balance.option.dto;

import ddangkong.domain.balance.option.BalanceOption;

public record BalanceOptionTotalResponse(
        Long optionId,
        String name,
        int percent
) {
    public static BalanceOptionTotalResponse of(BalanceOption balanceOption,
                                                Long totalSize,
                                                Long optionSize) {
        return new BalanceOptionTotalResponse(balanceOption.getId(),
                balanceOption.getName(),
                (int) Math.round(optionSize * 1.0 / totalSize * 100));
    }
}
