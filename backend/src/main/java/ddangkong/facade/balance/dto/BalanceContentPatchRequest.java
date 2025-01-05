package ddangkong.facade.balance.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record BalanceContentPatchRequest(
        @NotNull Long contentId,
        @NotBlank String name) {

}
