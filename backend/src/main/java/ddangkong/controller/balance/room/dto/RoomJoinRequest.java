package ddangkong.controller.balance.room.dto;

import jakarta.validation.constraints.NotBlank;

public record RoomJoinRequest(
        @NotBlank String nickname
) {
}
