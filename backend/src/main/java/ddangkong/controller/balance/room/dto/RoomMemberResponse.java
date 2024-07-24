package ddangkong.controller.balance.room.dto;

import ddangkong.domain.member.Member;

public record RoomMemberResponse(
        Long memberId,
        String nickname,
        Boolean isMaster
) {

    public RoomMemberResponse(Member member) {
        this(member.getId(), member.getNickname(), member.isMaster());
    }
}
