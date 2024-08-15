package ddangkong.service.room.dto;

import jakarta.validation.constraints.NotBlank;

public record RoomJoinRequest(
        @NotBlank
        String nickname
) {
}