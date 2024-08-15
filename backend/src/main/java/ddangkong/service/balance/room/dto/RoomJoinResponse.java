package ddangkong.service.balance.room.dto;

import ddangkong.service.balance.member.dto.MemberResponse;

public record RoomJoinResponse(
        Long roomId,
        MemberResponse member
) {
}
