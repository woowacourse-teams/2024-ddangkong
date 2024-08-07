package ddangkong.controller.balance.room;

import ddangkong.controller.balance.room.dto.RoomInfoResponse;
import ddangkong.controller.balance.room.dto.RoomJoinRequest;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomSettingRequest;
import ddangkong.service.balance.room.RoomService;
import ddangkong.service.balance.room.dto.RoundFinishedResponse;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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

    @GetMapping("/balances/rooms/{roomId}")
    public RoomInfoResponse getBalanceGameRoomInfo(@Positive @PathVariable Long roomId) {
        return roomService.findRoomInfo(roomId);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}")
    public void updateRoomSetting(@PathVariable @Positive Long roomId,
                                  @RequestBody RoomSettingRequest request) {
        roomService.updateRoomSetting(roomId, request);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms/{roomId}/members")
    public RoomJoinResponse joinRoom(@PathVariable @Positive Long roomId, @Valid @RequestBody RoomJoinRequest request) {
        return roomService.joinRoom(request.nickname(), roomId);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}/start")
    public void startGame(@PathVariable @Positive Long roomId) {
        roomService.startGame(roomId);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}/next-round")
    public void moveToNextRound(@PathVariable @Positive Long roomId) {
        roomService.moveToNextRound(roomId);
    }

    @GetMapping("/balances/rooms/{roomId}/round-finished")
    public RoundFinishedResponse getRoundFinished(@Positive @PathVariable Long roomId,
                                                  @Positive @RequestParam int round) {
        return roomService.getRoundFinished(roomId, round);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}/reset")
    public void resetRoom(@PathVariable @Positive Long roomId) {
        roomService.resetRoom(roomId);
    }
}
