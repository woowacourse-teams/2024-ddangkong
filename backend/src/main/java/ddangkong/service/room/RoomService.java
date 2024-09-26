package ddangkong.service.room;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.RoomSetting;
import ddangkong.exception.room.NotFoundRoomException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    @Transactional
    public Room createRoom() {
        return roomRepository.save(Room.createNewRoom());
    }

    @Transactional(readOnly = true)
    public Room getRoom(Long roomId) {
        return roomRepository.findById(roomId)
                .orElseThrow(NotFoundRoomException::new);
    }

    @Transactional(readOnly = true)
    public Room getRoomWithLock(String uuid) {
        return roomRepository.findByUuidWithLock(uuid)
                .orElseThrow(NotFoundRoomException::new);
    }

    @Transactional(readOnly = true)
    public Optional<Room> getRoom(String uuid) {
        return roomRepository.findByUuid(uuid);
    }

    @Transactional(readOnly = true)
    public List<Room> findRoomsBefore(LocalDateTime modifiedAt) {
        return roomRepository.findAllByLastModifiedAtBefore(modifiedAt);
    }

    @Transactional
    public Room startGame(Long roomId) {
        Room room = getRoom(roomId);
        room.startGame();
        return room;
    }

    @Transactional
    public Room progressNextRound(Long roomId) {
        Room room = getRoom(roomId);
        room.moveToNextRound();
        return room;
    }

    @Transactional
    public void updateRoomSetting(Long roomId, RoomSetting roomSetting) {
        Room room = getRoom(roomId);
        room.updateRoomSetting(roomSetting);
    }

    @Transactional
    public void delete(Room room) {
        roomRepository.delete(room);
    }
}
