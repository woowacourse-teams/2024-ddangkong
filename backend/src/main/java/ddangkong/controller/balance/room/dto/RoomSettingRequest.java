package ddangkong.controller.balance.room.dto;

import ddangkong.domain.balance.content.Category;

public record RoomSettingRequest(
        int totalRound,
        int timeLimit,
        Category category
) {
}
