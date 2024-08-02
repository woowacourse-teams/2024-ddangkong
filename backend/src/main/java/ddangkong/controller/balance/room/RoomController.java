package ddangkong.controller.balance.room;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.room.dto.RoomInfoResponse;
import ddangkong.controller.balance.room.dto.RoomJoinRequest;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomSettingRequest;
import ddangkong.service.balance.room.RoomService;
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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/balances/rooms/{roomId}")
    public RoomInfoResponse getBalanceGameRoomInfo(@Positive @PathVariable Long roomId) {
        return roomService.findRoomInfo(roomId);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms")
    public RoomJoinResponse createRoom(@Valid @RequestBody RoomJoinRequest request) {
        return roomService.createRoom(request.nickname());
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

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}")
    public void updateRoomSetting(@PathVariable @Positive Long roomId,
                                  @RequestBody RoomSettingRequest request) {
        roomService.updateRoomSetting(roomId, request);
    }
}
