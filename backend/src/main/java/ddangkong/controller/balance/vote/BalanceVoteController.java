package ddangkong.controller.balance.vote;

import ddangkong.controller.balance.vote.dto.BalanceVoteResultResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.service.balance.vote.BalanceVoteService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class BalanceVoteController {

    private final BalanceVoteService balanceVoteService;

    @GetMapping("/balances/rooms/{roomId}/contents/{contentId}/vote-result")
    public BalanceVoteResultResponse getBalanceRoundResult(@PathVariable @Positive Long roomId,
                                                           @PathVariable @Positive Long contentId) {
        return balanceVoteService.findBalanceVoteResult(roomId, contentId);
    }

    @PostMapping("/balances/rooms/{roomId}/contents/{contentId}/votes")
    @ResponseStatus(HttpStatus.CREATED)
    public BalanceVoteResponse createBalanceVote(@PathVariable @Positive Long roomId,
                                                 @PathVariable @Positive Long contentId,
                                                 @RequestBody @Valid BalanceVoteRequest request) {
        return balanceVoteService.createBalanceVote(request, roomId, contentId);
    }
}
