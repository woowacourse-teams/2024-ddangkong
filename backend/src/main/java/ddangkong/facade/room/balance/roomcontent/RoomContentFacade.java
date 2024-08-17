package ddangkong.facade.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.exception.BadRequestException;
import ddangkong.facade.room.balance.roomcontent.dto.RoomContentResponse;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomContentFacade {

    private final RoomRepository roomRepository;

    private final RoomContentService roomContentService;

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public RoomContentResponse getRecentRoomContent(Long roomId) {
        Room room = roomRepository.getById(roomId);
        validateProgressing(room);

        RoomContent roomContent = roomContentService.getCurrentRoundRoomContent(room);
        BalanceContent balanceContent = roomContent.getBalanceContent();
        BalanceOptions balanceOptions = balanceOptionRepository.getBalanceOptionsByBalanceContent(balanceContent);

        return new RoomContentResponse(room, balanceContent, balanceOptions);
    }

    private static void validateProgressing(Room room) {
        if (!room.isGameProgress()) {
            throw new BadRequestException("해당 방은 게임을 진행하고 있지 않습니다.");
        }
    }
}
