package ddangkong.controller.balance.content.dto;

import ddangkong.controller.balance.option.dto.BalanceOptionTotalResponse;

public record BalanceContentTotalResponse(
        BalanceOptionTotalResponse firstOption,
        BalanceOptionTotalResponse secondOption
) {
}
