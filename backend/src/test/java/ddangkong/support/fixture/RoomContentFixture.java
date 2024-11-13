package ddangkong.support.fixture;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomcontent.RoomContentRepository;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoomContentFixture {

    @Autowired
    private FixtureSettingManager fixtureSettingManager;

    @Autowired
    private BalanceContentFixture balanceContentFixture;

    @Autowired
    private BalanceOptionFixture balanceOptionFixture;

    @Autowired
    private RoomContentRepository roomContentRepository;

    public RoomContent create(Room room, BalanceContent balanceContent, int round, LocalDateTime voteDeadline) {
        RoomContent roomContent = RoomContent.newRoomContent(room, balanceContent, round);
        fixtureSettingManager.setField(roomContent, "voteDeadline", voteDeadline);

        return roomContentRepository.save(roomContent);
    }

    public void initRoomContent(Room room, BalanceContent balanceContent, int round) {
        create(room, balanceContent, round, null);
    }

    public RoomContent initRoomContent(Room room, BalanceContent balanceContent, int round,
                                       LocalDateTime voteDeadline) {
        return create(room, balanceContent, round, voteDeadline);
    }

    public void initRoomContents(Room room) {
        for (int i = 0; i < room.getTotalRound(); i++) {
            BalanceContent balanceContent = balanceContentFixture.create(room.getCategory(), "Content" + i);
            create(room, balanceContent, i + 1, null);
        }
    }

    public void initRoomContentsWithOption(Room room) {
        for (int i = 0; i < room.getTotalRound(); i++) {
            BalanceContent balanceContent = balanceContentFixture.create(room.getCategory(), "Content" + i);
            balanceOptionFixture.create("Option1", balanceContent);
            balanceOptionFixture.create("Option2", balanceContent);
            create(room, balanceContent, i + 1, null);
        }
    }
}