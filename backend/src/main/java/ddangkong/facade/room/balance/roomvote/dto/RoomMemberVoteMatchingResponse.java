package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.room.member.Member;

public record RoomMemberVoteMatchingResponse(
        int rank,
        long memberId,
        String nickname,
        long matchingPercent
) {

    public RoomMemberVoteMatchingResponse(int rank, Member member, long matchingPercent) {
        this(rank, member.getId(), member.getNickname(), matchingPercent);
    }
}
