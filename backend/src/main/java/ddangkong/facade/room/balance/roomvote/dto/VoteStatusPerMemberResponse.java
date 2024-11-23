package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.member.dto.MemberResponse;

public record VoteStatusPerMemberResponse(
        MemberResponse member,
        boolean isVoteFinished
) {

    public VoteStatusPerMemberResponse(Member member, boolean isVoteFinished) {
        this(new MemberResponse(member), isVoteFinished);
    }
}
