package ddangkong.service.room.dto;

import jakarta.validation.constraints.NotBlank;

public record RoomJoinRequest(
        @NotBlank
        String nickname
) { // todo validation 닉네임 정책
}
