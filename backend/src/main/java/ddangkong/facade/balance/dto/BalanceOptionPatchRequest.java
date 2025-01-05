package ddangkong.facade.balance.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record BalanceOptionPatchRequest(
        @NotNull Long optionId,
        @NotBlank String name) {

}
