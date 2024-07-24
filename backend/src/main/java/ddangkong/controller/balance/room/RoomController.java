package ddangkong.controller.balance.room;

import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import ddangkong.service.balance.room.RoomService;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/balances/rooms/{roomId}/members")
    public ResponseEntity<RoomMembersResponse> getAllBalanceGameRoomMember(@Positive @PathVariable Long roomId) {
        RoomMembersResponse response = roomService.findAllRoomMember(roomId);

        return ResponseEntity.ok(response);
    }
}
