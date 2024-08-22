package ddangkong.facade.room.balance.roomvote.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record RoomBalanceVoteRequest(
        @Positive(message = "멤버 식별자는 양수이어야 합니다.")
        @NotNull(message = "멤버 식별자는 비어있지 않아야 합니다.")
        Long memberId,
        @Positive(message = "선택지 식별자는 양수이어야 합니다.")
        @NotNull(message = "멤버 식별자는 비어있지 않아야 합니다.")
        Long optionId
) {
}
