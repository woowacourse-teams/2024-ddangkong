package ddangkong.facade.room.member.dto;

import ddangkong.domain.room.member.Member;

public record MemberResponse(
        Long memberId,
        String nickname,
        String imageUrl,
        boolean isMaster
) {

    public MemberResponse(Member member) {
        this(member.getId(), member.getNickname(), member.getImageUrl(), member.isMaster());
    }
}
