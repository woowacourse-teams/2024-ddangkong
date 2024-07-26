package ddangkong.controller.balance.content.dto;

import ddangkong.controller.balance.option.dto.BalanceOptionGroupResponse;

public record BalanceContentGroupResponse(
        BalanceOptionGroupResponse firstOption,
        BalanceOptionGroupResponse secondOption
) {
}
