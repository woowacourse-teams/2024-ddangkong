package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.Category;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record BalanceContentCreateRequest(
        @NotNull Category category,
        @NotBlank String question,
        @NotBlank String firstOption,
        @NotBlank String secondOption
) {
}
