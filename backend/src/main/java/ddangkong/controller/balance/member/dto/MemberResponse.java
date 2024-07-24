package ddangkong.controller.balance.member.dto;

import ddangkong.domain.member.Member;

public record MemberResponse(
        Long id,
        String nickname,
        boolean isMaster
) {
    public static MemberResponse createByMemberWithMaster(Member member) {
        return new MemberResponse(member.getId(), member.getNickname(), true);
    }
}
