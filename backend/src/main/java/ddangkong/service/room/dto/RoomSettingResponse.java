package ddangkong.service.room.dto;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;

public record RoomSettingResponse(
        int totalRound,
        int timeLimit,
        Category category
) {

    public RoomSettingResponse(Room room) {
        this(room.getTotalRound(), room.getTimeLimit(), room.getCategory());
    }
}
