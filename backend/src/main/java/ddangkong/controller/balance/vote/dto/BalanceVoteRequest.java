package ddangkong.controller.balance.vote.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record BalanceVoteRequest(
        @Positive
        @NotNull
        Long memberId,
        @Positive
        @NotNull
        Long optionId
) {
}
