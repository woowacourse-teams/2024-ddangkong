package ddangkong.facade.room.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RoomJoinRequest(
        @NotBlank
        @Size(max = 255)
        String nickname
) {
}
