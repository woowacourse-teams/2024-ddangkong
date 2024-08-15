package ddangkong.service.room.dto;

import ddangkong.domain.balance.content.Category;

public record RoomSettingRequest( // todo validation
                                  int totalRound,
                                  int timeLimit,
                                  Category category
) {
}
