package ddangkong.service.balance.content.dto;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.service.balance.option.dto.BalanceOptionResponse;
import lombok.Builder;

public record BalanceContentResponse(
        Long contentId,
        Category category,
        int totalRound,
        int currentRound,
        int timeLimit,
        String question,
        BalanceOptionResponse firstOption,
        BalanceOptionResponse secondOption
) {

    @Builder
    private BalanceContentResponse(RoomContent roomContent,
                                   BalanceOptions balanceOptions) {
        this(roomContent.getContentId(),
                roomContent.getContentCategory(),
                roomContent.getTotalRound(),
                roomContent.getRound(),
                roomContent.getRoom().getTimeLimit(),
                roomContent.getContentName(),
                BalanceOptionResponse.from(balanceOptions.getFistOption()),
                BalanceOptionResponse.from(balanceOptions.getSecondOption()));
    }
}
