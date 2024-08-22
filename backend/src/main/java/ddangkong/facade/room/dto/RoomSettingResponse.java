package ddangkong.facade.room.dto;

import ddangkong.domain.room.Room;
import ddangkong.facade.balance.content.BalanceCategoryResponse;

public record RoomSettingResponse(
        int totalRound,
        int timeLimit,
        BalanceCategoryResponse category
) {

    public RoomSettingResponse(Room room) {
        this(room.getTotalRound(), room.getTimeLimit(), BalanceCategoryResponse.create(room.getCategory()));
    }
}
