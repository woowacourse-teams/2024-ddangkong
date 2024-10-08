package ddangkong.controller.room.balance.roomcontent;

import ddangkong.facade.room.balance.roomcontent.RoomContentFacade;
import ddangkong.facade.room.balance.roomcontent.dto.RoomContentResponse;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class RoomContentController {

    private final RoomContentFacade roomContentFacade;

    @GetMapping("/balances/rooms/{roomId}/content")
    public RoomContentResponse getRecentRoomContent(@PathVariable @Positive Long roomId) {
        return roomContentFacade.getRecentRoomContent(roomId);
    }
}
