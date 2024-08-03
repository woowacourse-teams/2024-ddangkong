package ddangkong.support.domain;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.room.RoomContentRepository;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoomContentFixture {

    @Autowired
    private RoomContentRepository roomContentRepository;

    public RoomContent createContent(Room room, BalanceContent balanceContent, int round, LocalDateTime roundEndedAt,
                                     boolean isUsed) {
        RoomContent roomContent = new RoomContent(room, balanceContent, round, roundEndedAt, isUsed);
        return roomContentRepository.save(roomContent);
    }
}
