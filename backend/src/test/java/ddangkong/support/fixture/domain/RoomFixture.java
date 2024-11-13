package ddangkong.support.fixture.domain;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.support.fixture.FixtureSettingManager;
import org.springframework.stereotype.Component;

@Component
public class RoomFixture {

    private static final String CURRENT_ROUND_FIELD = "currentRound";
    private static final String STATUS_FIELD = "status";
    private static final String ROOM_SETTING_FIELD = "roomSetting";

    private final FixtureSettingManager fixtureSettingManager;
    private final RoomRepository roomRepository;

    public RoomFixture(FixtureSettingManager fixtureSettingManager, RoomRepository roomRepository) {
        this.fixtureSettingManager = fixtureSettingManager;
        this.roomRepository = roomRepository;
    }

    public Room createNotStartedRoom(int currentRound, int totalRound, int timeLimit, Category category,
                                     RoomStatus roomStatus) {
        RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, category);
        return createNotStartedRoom(currentRound, roomSetting, roomStatus);
    }

    public Room createNotStartedRoom(int currentRound, RoomSetting roomSetting, RoomStatus roomStatus) {
        Room room = Room.createNewRoom();
        setRoom(currentRound, roomSetting, roomStatus, room);
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
        setRoom(currentRound, roomSetting, roomStatus, room);

        return roomRepository.save(room);
    }

    public Room createProgressRoom(int currentRound, RoomSetting roomSetting) {
        RoomStatus roomStatus = RoomStatus.PROGRESS;

        Room room = Room.createNewRoom();
        setRoom(currentRound, roomSetting, roomStatus, room);

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
        setRoom(currentRound, roomSetting, roomStatus, room);

        return roomRepository.save(room);
    }

    private void setRoom(int currentRound, RoomSetting roomSetting, RoomStatus roomStatus, Room room) {
        fixtureSettingManager.setField(room, CURRENT_ROUND_FIELD, currentRound);
        fixtureSettingManager.setField(room, STATUS_FIELD, roomStatus);
        fixtureSettingManager.setField(room, ROOM_SETTING_FIELD, roomSetting);
    }
}
