package ddangkong.facade.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.exception.room.NotProgressedRoomException;
import ddangkong.facade.room.balance.roomcontent.dto.RoomContentResponse;
import ddangkong.service.balance.option.BalanceOptionService;
import ddangkong.service.room.RoomService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomContentFacade {

    private final RoomService roomService;

    private final RoomContentService roomContentService;

    private final BalanceOptionService balanceOptionService;

    @Transactional(readOnly = true)
    public RoomContentResponse getRecentRoomContent(Long roomId) {
        Room room = getProgressRoom(roomId);
        RoomContent roomContent = roomContentService.getCurrentRoundRoomContent(room);
        BalanceContent balanceContent = roomContent.getBalanceContent();
        BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
        return new RoomContentResponse(room, balanceContent, balanceOptions);
    }

    private Room getProgressRoom(Long roomId) {
        Room room = roomService.getRoom(roomId);
        if (!room.isGameProgress()) {
            throw new NotProgressedRoomException();
        }
        return room;
    }
}
