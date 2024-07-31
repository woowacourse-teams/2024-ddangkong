package ddangkong.controller.balance.content.dto;

import ddangkong.controller.balance.option.dto.BalanceOptionTotalResponse;
import ddangkong.domain.balance.option.BalanceOptions;

public record BalanceContentTotalResponse(
        BalanceOptionTotalResponse firstOption,
        BalanceOptionTotalResponse secondOption
) {
    public static BalanceContentTotalResponse of(BalanceOptions balanceOptions,
                                                 Long firstOptionCount,
                                                 Long secondOptionCount) {
        Long totalOptionCount = firstOptionCount + secondOptionCount;
        return new BalanceContentTotalResponse(
                BalanceOptionTotalResponse.of(balanceOptions.getFistOption(), totalOptionCount, firstOptionCount),
                BalanceOptionTotalResponse.of(balanceOptions.getSecondOption(), totalOptionCount, secondOptionCount)
        );
    }
}
