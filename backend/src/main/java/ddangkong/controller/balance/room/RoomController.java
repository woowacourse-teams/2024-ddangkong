package ddangkong.controller.balance.room;

import ddangkong.controller.balance.room.dto.RoomJoinRequest;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import ddangkong.service.balance.room.RoomService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class RoomController {

    private final RoomService roomService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms")
    public RoomJoinResponse creatRoom(@Valid @RequestBody RoomJoinRequest request) {
        return roomService.createRoom(request.nickname());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms/{roomId}/members")
    public RoomJoinResponse joinRoom(@PathVariable @Positive Long roomId, @Valid @RequestBody RoomJoinRequest request) {
        return roomService.joinRoom(request.nickname(), roomId);
    }

    @GetMapping("/balances/rooms/{roomId}/members")
    public ResponseEntity<RoomMembersResponse> getAllBalanceGameRoomMember(@Positive @PathVariable Long roomId) {
        RoomMembersResponse response = roomService.findAllRoomMember(roomId);

        return ResponseEntity.ok(response);
    }
}
