package ddangkong.facade.room.member.dto;

import ddangkong.domain.room.member.Member;

public record MasterResponse(
        Long memberId,
        String nickname
) {

    public MasterResponse(Member member) {
        this(member.getId(), member.getNickname());
    }
}
