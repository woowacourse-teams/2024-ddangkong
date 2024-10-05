package ddangkong.facade.room.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RoomJoinRequest(
        @NotBlank
        @Size(min = 2, max = 12)
        String nickname
) {
}
