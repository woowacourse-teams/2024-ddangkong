package ddangkong.service.content;

import ddangkong.controller.content.dto.BalanceContentResponse;
import ddangkong.domain.option.BalanceOption;
import ddangkong.domain.option.BalanceOptionRepository;
import ddangkong.domain.content.BalanceContent;
import ddangkong.domain.content.RoomContentRepository;
import ddangkong.service.excpetion.BusinessLogicException;
import ddangkong.service.excpetion.ViolateDataException;
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
        BalanceContent balanceContent = findRecentContent(roomId);
        List<BalanceOption> balanceOptions = findBalanceOptions(balanceContent);

        return BalanceContentResponse.builder()
                .balanceContent(balanceContent)
                .firstOption(balanceOptions.get(0))
                .secondOption(balanceOptions.get(1))
                .build();
    }

    private BalanceContent findRecentContent(Long roomId) {
        return roomContentRepository.findTopByRoomIdOrderByCreatedAtDesc(roomId)
                .orElseThrow(() -> new BusinessLogicException("해당 방의 질문이 존재하지 않습니다."))
                .getBalanceContent();
    }

    private List<BalanceOption> findBalanceOptions(BalanceContent balanceContent) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findByBalanceContent(balanceContent);
        validateBalanceOptions(balanceOptions);
        return balanceOptions;
    }

    private void validateBalanceOptions(List<BalanceOption> balanceOptions) {
        if (balanceOptions.size() != BALANCE_OPTION_SIZE) {
            throw new ViolateDataException("밸런스 게임의 선택지가 %d개입니다".formatted(balanceOptions.size()));
        }
    }
}
