package ddangkong.service.balance.content;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.room.RoomContentRepository;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceContentService {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final RoomRepository roomRepository;

    private final RoomContentRepository roomContentRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public BalanceContentResponse findRecentBalanceContent(Long roomId) {
        RoomContent roomContent = findCurrentRoomContent(roomId);
        List<BalanceOption> balanceOptions = findBalanceOptions(roomContent.getBalanceContent());

        return BalanceContentResponse.builder()
                .roomContent(roomContent)
                .firstOption(balanceOptions.get(0))
                .secondOption(balanceOptions.get(1))
                .build();
    }

    private RoomContent findCurrentRoomContent(Long roomId) {
        Room room = roomRepository.getById(roomId);
        return roomContentRepository.findByRoomAndRound(room, room.getCurrentRound())
                .orElseThrow(() -> new BadRequestException("해당 방의 현재 진행중인 질문이 존재하지 않습니다."));
    }

    private List<BalanceOption> findBalanceOptions(BalanceContent balanceContent) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(balanceContent);
        validateBalanceOptions(balanceOptions);
        return balanceOptions;
    }

    private void validateBalanceOptions(List<BalanceOption> balanceOptions) {
        if (balanceOptions.size() != BALANCE_OPTION_SIZE) {
            throw new InternalServerException("밸런스 게임의 선택지가 %d개입니다".formatted(balanceOptions.size()));
        }
    }
}
