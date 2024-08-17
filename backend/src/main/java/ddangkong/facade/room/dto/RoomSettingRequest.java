package ddangkong.facade.room.dto;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.RoomSetting;

public record RoomSettingRequest(
        int totalRound,
        int timeLimit,
        Category category
) {  // todo validation

    public RoomSetting toRoomSetting() {
        return new RoomSetting(totalRound, timeLimit, category);
    }
}
