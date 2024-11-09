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

    public Room createRoom() {
        return roomRepository.save(Room.createNewRoom());
    }

    public Room createRoom(int currentRound, RoomSetting roomSetting, RoomStatus roomStatus) {
        Room room = Room.createNewRoom();

        fixtureSettingManager.setField(room, "currentRound", currentRound);
        fixtureSettingManager.setField(room, "status", roomStatus);
        fixtureSettingManager.setField(room, "roomSetting", roomSetting);
        return roomRepository.save(room);
    }

    public Room createRoom(int currentRound, int totalRound, int timeLimit, Category category, RoomStatus roomStatus) {
        Room room = Room.createNewRoom();
        RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, category);

        fixtureSettingManager.setField(room, "currentRound", currentRound);
        fixtureSettingManager.setField(room, "status", roomStatus);
        fixtureSettingManager.setField(room, "roomSetting", roomSetting);
        return roomRepository.save(room);
    }
}
