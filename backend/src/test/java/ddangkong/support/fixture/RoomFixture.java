package ddangkong.support.fixture;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.balance.room.RoomStatus;
import java.lang.reflect.Field;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoomFixture {

    @Autowired
    private RoomRepository roomRepository;

    public Room createNewRoom() {
        Room room = Room.createNewRoom();
        return roomRepository.save(room);
    }

    public Room createRoom(int totalRound, int currentRound, int timeLimit, RoomStatus status, Category category) {
        Room room = getInstance(totalRound, currentRound, timeLimit, status, category);
        return roomRepository.save(room);
    }

    private Room getInstance(int totalRound, int currentRound, int timeLimit, RoomStatus status, Category category) {
        try {
            Class<Room> clazz = Room.class;
            Room room = clazz.getDeclaredConstructor().newInstance();

            Field totalRoundField = clazz.getDeclaredField("totalRound");
            totalRoundField.setAccessible(true);
            totalRoundField.set(room, totalRound);

            Field currentRoundField = clazz.getDeclaredField("currentRound");
            currentRoundField.setAccessible(true);
            currentRoundField.set(room, currentRound);

            Field timeLimitField = clazz.getDeclaredField("timeLimit");
            timeLimitField.setAccessible(true);
            timeLimitField.set(room, timeLimit);

            Field statusField = clazz.getDeclaredField("status");
            statusField.setAccessible(true);
            statusField.set(room, status);

            Field categoryField = clazz.getDeclaredField("category");
            categoryField.setAccessible(true);
            categoryField.set(room, category);

            return room;
        } catch (Exception e) {
            throw new RuntimeException("Reflection 과정에서 오류가 발생하였습니다.");
        }
    }
}
