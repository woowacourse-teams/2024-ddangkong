package ddangkong.service.balance.content;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.room.RoomContentRepository;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.exception.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceContentService {

    private final RoomRepository roomRepository;

    private final RoomContentRepository roomContentRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public BalanceContentResponse findRecentBalanceContent(Long roomId) {
        RoomContent roomContent = findCurrentRoomContent(roomId);
        BalanceOptions balanceOptions = balanceOptionRepository.findBalanceOptionsByBalanceContent(
                roomContent.getBalanceContent());

        return BalanceContentResponse.builder()
                .roomContent(roomContent)
                .balanceOptions(balanceOptions)
                .build();
    }

    private RoomContent findCurrentRoomContent(Long roomId) {
        Room room = roomRepository.getById(roomId);
        return roomContentRepository.findByRoomAndRound(room, room.getCurrentRound())
                .orElseThrow(() -> new BadRequestException("해당 방의 현재 진행중인 질문이 존재하지 않습니다."));
    }
}
