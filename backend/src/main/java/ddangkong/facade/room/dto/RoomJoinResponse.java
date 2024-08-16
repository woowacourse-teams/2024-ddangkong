package ddangkong.facade.room.dto;

import ddangkong.facade.room.member.dto.MemberResponse;

public record RoomJoinResponse(
        Long roomId,
        MemberResponse member
) {
}
