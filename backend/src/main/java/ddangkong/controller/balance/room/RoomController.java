package ddangkong.controller.balance.room;

import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.service.balance.room.RoomService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
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
    public RoomJoinResponse creatRoom(@Valid @RequestBody String nickname) {
        return roomService.createRoom(nickname);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms/{roomId}/members")
    public RoomJoinResponse joinRoom(@PathVariable @Positive Long roomId, @Valid @RequestBody String nickname) {
        return roomService.joinRoom(nickname, roomId);
    }
}
