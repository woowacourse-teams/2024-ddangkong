package ddangkong.controller.balance.room;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.room.dto.RoomJoinRequest;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import ddangkong.service.balance.room.RoomService;
import ddangkong.service.balance.room.dto.RoundFinishedResponse;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms")
    public RoomJoinResponse createRoom(@Valid @RequestBody RoomJoinRequest request) {
        return roomService.createRoom(request.nickname());
    }

    @GetMapping("/balances/rooms/{roomId}/members")
    public RoomMembersResponse getAllBalanceGameRoomMember(@Positive @PathVariable Long roomId) {
        return roomService.findAllRoomMember(roomId);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms/{roomId}/members")
    public RoomJoinResponse joinRoom(@PathVariable @Positive Long roomId, @Valid @RequestBody RoomJoinRequest request) {
        return roomService.joinRoom(request.nickname(), roomId);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms/{roomId}/contents")
    public BalanceContentResponse moveToNextRound(@PathVariable @Positive Long roomId) {
        return roomService.moveToNextRound(roomId);
    }

    @GetMapping("/balances/rooms/{roomId}/round-finished")
    public RoundFinishedResponse getMyRoundFinished(@Positive @PathVariable Long roomId,
                                                    @Positive @RequestParam int myRound) {
        return roomService.getMyRoundFinished(roomId, myRound);
    }
}
