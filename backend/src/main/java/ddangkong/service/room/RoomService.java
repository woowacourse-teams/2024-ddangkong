package ddangkong.service.room;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.RoomSetting;
import ddangkong.exception.BadRequestException;
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
        return roomRepository.findByIdWithLock(roomId)
                .orElseThrow(() -> new BadRequestException("존재하지 않는 방입니다."));
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
        room.updateTimeLimit(roomSetting.getTimeLimit());
        room.updateTotalRound(roomSetting.getTotalRound());
        room.updateCategory(roomSetting.getCategory());
    }

    @Transactional
    public Room reset(Long roomId) {
        Room room = getRoom(roomId);
        room.reset();
        return room;
    }
}
