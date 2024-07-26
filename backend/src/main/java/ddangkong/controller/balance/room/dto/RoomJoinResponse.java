package ddangkong.controller.balance.room.dto;

import ddangkong.controller.balance.member.dto.MemberResponse;

public record RoomJoinResponse(
        Long roomId,
        MemberResponse member
) {
}
