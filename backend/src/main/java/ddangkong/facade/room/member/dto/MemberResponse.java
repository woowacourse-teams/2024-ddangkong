package ddangkong.facade.room.member.dto;

import ddangkong.domain.room.member.Member;

public record MemberResponse(
        Long memberId,
        String nickname,
        boolean isMaster
) {
    public MemberResponse(Member member) {
        this(member.getId(), member.getNickname(), member.isMaster());
    }
}
