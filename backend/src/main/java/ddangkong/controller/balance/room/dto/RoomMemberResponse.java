package ddangkong.controller.balance.room.dto;

import ddangkong.domain.member.Member;

public record RoomMemberResponse(
        Long memberId,
        String nickname,
        Boolean isMaster
) {

    public static RoomMemberResponse fromMember(Member member) {
        return new RoomMemberResponse(member.getId(), member.getNickname(), member.isMaster());
    }
}
