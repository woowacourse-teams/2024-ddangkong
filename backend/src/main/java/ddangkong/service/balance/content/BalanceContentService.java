package ddangkong.service.balance.content;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.RoomContent;
import ddangkong.domain.balance.content.RoomContentRepository;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerErrorException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceContentService {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final RoomContentRepository roomContentRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public BalanceContentResponse findRecentBalanceContent(Long roomId) {
        RoomContent roomContent = findRecentRoomContent(roomId);
        List<BalanceOption> balanceOptions = findBalanceOptions(roomContent.getBalanceContent());

        return BalanceContentResponse.builder()
                .roomContent(roomContent)
                .firstOption(balanceOptions.get(0))
                .secondOption(balanceOptions.get(1))
                .build();
    }

    private RoomContent findRecentRoomContent(Long roomId) {
        return roomContentRepository.findTopByRoomIdOrderByCreatedAtDesc(roomId)
                .orElseThrow(() -> new BadRequestException("해당 방의 질문이 존재하지 않습니다."));
    }

    private List<BalanceOption> findBalanceOptions(BalanceContent balanceContent) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findByBalanceContent(balanceContent);
        validateBalanceOptions(balanceOptions);
        return balanceOptions;
    }

    private void validateBalanceOptions(List<BalanceOption> balanceOptions) {
        if (balanceOptions.size() != BALANCE_OPTION_SIZE) {
            throw new InternalServerErrorException("밸런스 게임의 선택지가 %d개입니다".formatted(balanceOptions.size()));
        }
    }
}
