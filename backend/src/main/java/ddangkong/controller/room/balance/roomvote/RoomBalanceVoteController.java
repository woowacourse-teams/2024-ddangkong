package ddangkong.controller.room.balance.roomvote;

import ddangkong.aop.logging.Polling;
import ddangkong.facade.room.balance.roomvote.RoomBalanceVoteFacade;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResultResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomMembersVoteMatchingResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
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
public class RoomBalanceVoteController {

    private final RoomBalanceVoteFacade roomBalanceVoteFacade;

    @GetMapping("/balances/rooms/{roomId}/contents/{contentId}/vote-result")
    public RoomBalanceVoteResultResponse getAllVoteResult(@PathVariable @Positive Long roomId,
                                                          @PathVariable @Positive Long contentId) {
        return roomBalanceVoteFacade.getAllVoteResult(roomId, contentId);
    }

    @PostMapping("/balances/rooms/{roomId}/contents/{contentId}/votes")
    @ResponseStatus(HttpStatus.CREATED)
    public RoomBalanceVoteResponse createVote(@PathVariable @Positive Long roomId,
                                              @PathVariable @Positive Long contentId,
                                              @RequestBody @Valid RoomBalanceVoteRequest request) {
        return roomBalanceVoteFacade.createVote(request, roomId, contentId);
    }

    @Polling
    @GetMapping("/balances/rooms/{roomId}/contents/{contentId}/vote-finished")
    public VoteFinishedResponse getVoteFinished(@PathVariable @Positive Long roomId,
                                                @PathVariable @Positive Long contentId) {
        return roomBalanceVoteFacade.getVoteFinished(roomId, contentId);
    }

    @GetMapping("/balances/rooms/{roomId}/members/{memberId}/matching")
    public RoomMembersVoteMatchingResponse getMemberVoteMatching(@PathVariable @Positive Long roomId,
                                                                 @PathVariable @Positive Long memberId) {
        return roomBalanceVoteFacade.getRoomMembersVoteMatching(roomId, memberId);
    }
}
