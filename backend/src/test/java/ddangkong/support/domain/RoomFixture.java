package ddangkong.support.domain;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.balance.room.RoomStatus;
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
        Room room = new Room(totalRound, currentRound, timeLimit, status, category);
        return roomRepository.save(room);
    }
}
