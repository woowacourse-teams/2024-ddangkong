package ddangkong.controller.balance.room;

import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.service.balance.room.RoomService;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @RequestMapping("/balances/rooms")
    @PostMapping
    public RoomJoinResponse creatRoom(@RequestBody @NotNull String nickname) {
        return roomService.createRoom(nickname);
    }
}
