package ddangkong.service.question;

import ddangkong.controller.exception.BusinessLogicException;
import ddangkong.controller.exception.ViolateDataException;
import ddangkong.controller.question.dto.BalanceQuestionResponse;
import ddangkong.domain.option.BalanceOption;
import ddangkong.domain.option.BalanceOptionRepository;
import ddangkong.domain.question.BalanceQuestion;
import ddangkong.domain.question.RoomQuestionRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceQuestionService {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final RoomQuestionRepository roomQuestionRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public BalanceQuestionResponse findRecentBalanceQuestion(Long roomId) {
        BalanceQuestion balanceQuestion = findRecentQuestion(roomId);
        List<BalanceOption> balanceOptions = findBalanceOptions(balanceQuestion);

        return BalanceQuestionResponse.builder()
                .question(balanceQuestion)
                .firstOption(balanceOptions.get(0))
                .secondOption(balanceOptions.get(1))
                .build();
    }

    private BalanceQuestion findRecentQuestion(Long roomId) {
        return roomQuestionRepository.findTopByRoomIdOrderByCreatedAtDesc(roomId)
                .orElseThrow(() -> new BusinessLogicException("해당 방의 질문이 존재하지 않습니다."))
                .getBalanceQuestion();
    }

    private List<BalanceOption> findBalanceOptions(BalanceQuestion balanceQuestion) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findByBalanceQuestion(balanceQuestion);
        validateBalanceOptions(balanceOptions);
        return balanceOptions;
    }

    private void validateBalanceOptions(List<BalanceOption> balanceOptions) {
        if (balanceOptions.size() != BALANCE_OPTION_SIZE) {
            throw new ViolateDataException("밸런스 게임의 선택지가 %d개입니다".formatted(balanceOptions.size()));
        }
    }
}
