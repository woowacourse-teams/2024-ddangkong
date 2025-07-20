package ddangkong.facade.room.dto;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import jakarta.validation.constraints.NotBlank;

public record RoomJoinRequest(
        @NotBlank
        String nickname,

        @NotBlank
        String imageUrl
) {

    public Member toMasterMember(Room room) {
        return Member.createMaster(nickname, imageUrl, room);
    }

    public Member toCommonMember(Room room) {
        return Member.createCommon(nickname, imageUrl, room);
    }
}
