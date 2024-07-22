package ddangkong.controller.balance.content;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.service.balance.content.BalanceContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BalanceContentController {

    private final BalanceContentService balanceContentService;

    @GetMapping("/balances/rooms/{roomId}/question")
    public BalanceContentResponse getBalanceContent(@PathVariable Long roomId) {
        return balanceContentService.findRecentBalanceContent(roomId);
    }
}
