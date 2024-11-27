package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.room.balance.roomvote.VotingStatus;

public record VoteFinishedResponse(
        boolean isFinished,
        int memberCount,
        int voteCount
) {

    public VoteFinishedResponse(VotingStatus status) {
        this(status.isVoteFinished(), status.getMemberCount(), status.getVoteCount());
    }
}
