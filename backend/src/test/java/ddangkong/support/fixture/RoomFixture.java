package ddangkong.support.fixture;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoomFixture {

    @Autowired
    private FixtureSettingManager fixtureSettingManager;

    @Autowired
    private RoomRepository roomRepository;

    public Room createNotStartedRoom(int currentRound, int totalRound, int timeLimit, Category category,
                                     RoomStatus roomStatus) {
        RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, category);
        return createNotStartedRoom(currentRound, roomSetting, roomStatus);
    }

    public Room createNotStartedRoom(int currentRound, RoomSetting roomSetting, RoomStatus roomStatus) {
        Room room = Room.createNewRoom();

        fixtureSettingManager.setField(room, "currentRound", currentRound);
        fixtureSettingManager.setField(room, "status", roomStatus);
        fixtureSettingManager.setField(room, "roomSetting", roomSetting);
        return roomRepository.save(room);
    }

    public Room createNotStartedRoom() {
        return roomRepository.save(Room.createNewRoom());
    }

    public Room createProgressRoom() {
        int currentRound = 1;
        return createProgressRoom(currentRound);
    }

    public Room createProgressRoom(int currentRound) {
        int totalRound = 5;
        int timeLimit = 10_000;
        Category category = Category.IF;
        RoomStatus roomStatus = RoomStatus.PROGRESS;

        Room room = Room.createNewRoom();
        RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, category);

        fixtureSettingManager.setField(room, "currentRound", currentRound);
        fixtureSettingManager.setField(room, "status", roomStatus);
        fixtureSettingManager.setField(room, "roomSetting", roomSetting);
        return roomRepository.save(room);
    }

    public Room createFinishedRoom() {
        int currentRound = 5;
        int totalRound = 5;
        int timeLimit = 10_000;
        Category category = Category.IF;
        RoomStatus roomStatus = RoomStatus.FINISH;

        Room room = Room.createNewRoom();
        RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, category);

        fixtureSettingManager.setField(room, "currentRound", currentRound);
        fixtureSettingManager.setField(room, "status", roomStatus);
        fixtureSettingManager.setField(room, "roomSetting", roomSetting);
        return roomRepository.save(room);
    }
}
