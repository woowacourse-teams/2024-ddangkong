package ddangkong.controller.question;

import ddangkong.controller.question.dto.BalanceQuestionResponse;
import ddangkong.service.question.BalanceQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BalanceQuestionController {

    private final BalanceQuestionService balanceQuestionService;

    @GetMapping("/balances/rooms/{roomId}/question")
    public BalanceQuestionResponse getBalanceQuestion(@PathVariable Long roomId) {
        return balanceQuestionService.findRecentBalanceQuestion(roomId);
    }
}
