package ddangkong.service.room.dto;

import jakarta.validation.constraints.NotBlank;

public record RoomJoinRequest( // todo validation 닉네임 정책
                               @NotBlank
                               String nickname
) {
}
