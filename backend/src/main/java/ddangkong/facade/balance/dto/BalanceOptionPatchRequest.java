package ddangkong.facade.balance.dto;

import jakarta.validation.constraints.NotNull;

public record BalanceOptionPatchRequest(
        long optionId,
        @NotNull String name) {
}
