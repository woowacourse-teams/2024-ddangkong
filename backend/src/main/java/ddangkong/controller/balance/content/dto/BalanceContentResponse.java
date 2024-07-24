package ddangkong.controller.balance.content.dto;

import ddangkong.controller.balance.option.dto.BalanceOptionResponse;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.room.RoomContent;
import lombok.Builder;

public record BalanceContentResponse(
        Long contentId,
        Category category,
        int totalRound,
        int currentRound,
        String question,
        BalanceOptionResponse firstOption,
        BalanceOptionResponse secondOption
) {

    @Builder
    private BalanceContentResponse(RoomContent roomContent,
                                   BalanceOption firstOption,
                                   BalanceOption secondOption) {
        this(roomContent.getContentId(),
                roomContent.getContentCategory(),
                roomContent.getTotalRound(),
                roomContent.getRound(),
                roomContent.getContentName(),
                BalanceOptionResponse.from(firstOption),
                BalanceOptionResponse.from(secondOption));
    }
}
