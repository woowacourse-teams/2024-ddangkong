package ddangkong.service.room.balance.roomcontent.dto;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.service.balance.option.dto.BalanceOptionResponse;

public record RoomContentResponse(
        Long contentId,
        Category category,
        int totalRound,
        int currentRound,
        int timeLimit,
        String question,
        BalanceOptionResponse firstOption,
        BalanceOptionResponse secondOption
) {

    public RoomContentResponse(Room room, BalanceContent balanceContent, BalanceOptions balanceOptions) {
        this(balanceContent.getId(),
                balanceContent.getCategory(),
                room.getTotalRound(),
                room.getCurrentRound(),
                room.getTimeLimit(),
                balanceContent.getName(),
                new BalanceOptionResponse(balanceOptions.getFistOption()),
                new BalanceOptionResponse(balanceOptions.getSecondOption()));
    }
}
