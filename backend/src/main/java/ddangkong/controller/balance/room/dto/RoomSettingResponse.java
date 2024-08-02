package ddangkong.controller.balance.room.dto;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.room.Room;

public record RoomSettingResponse(
        int totalRound,
        int timeLimit,
        Category category
) {

    public static RoomSettingResponse from(Room room) {
        return new RoomSettingResponse(room.getTotalRound(), room.getTimeLimit(), room.getCategory());
    }
}
