package ddangkong.service.room.dto;

import ddangkong.service.room.member.dto.MemberResponse;

public record RoomJoinResponse(
        Long roomId,
        MemberResponse member
) {
}
