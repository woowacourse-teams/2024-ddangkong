package ddangkong.facade.balance.dto;

import jakarta.validation.constraints.NotNull;

public record BalanceContentPatchRequest(
        long contentId,
        @NotNull String name) {
}
