package ddangkong.service.member.dto;

import ddangkong.domain.member.Member;

public record MemberResponse(
        Long memberId,
        String nickname,
        boolean isMaster
) {
    public MemberResponse(Member member) {
        this(member.getId(), member.getNickname(), member.isMaster());
    }
}
