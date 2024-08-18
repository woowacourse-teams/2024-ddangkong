package ddangkong.domain.room;

import ddangkong.domain.balance.content.Category;
import lombok.Getter;

@Getter
// todo embeddable
public class RoomSetting {

    private int totalRound;

    private int timeLimit;

    private Category category;

    public RoomSetting(int totalRound, int timeLimit, Category category) {
        this.totalRound = totalRound;
        this.timeLimit = timeLimit;
        this.category = category;
    }
}
