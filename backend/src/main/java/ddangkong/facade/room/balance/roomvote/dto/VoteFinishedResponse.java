package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.room.balance.roomvote.VotingStatus;
import java.util.List;

public record VoteFinishedResponse(
        boolean isFinished,
        int memberCount,
        int voteCount,
        List<VoteStatusPerMemberResponse> memberStates
) {

    public VoteFinishedResponse(boolean isFinished) {
        this(isFinished, 0, 0, List.of());
    }

    public static VoteFinishedResponse from(VotingStatus status) {
        List<VoteStatusPerMemberResponse> memberStates = status.getMembers()
                .stream()
                .map(member -> new VoteStatusPerMemberResponse(member, status.didVote(member)))
                .toList();

        return new VoteFinishedResponse(
                status.isVoteFinished(),
                status.getMemberCount(),
                status.getVoteCount(),
                memberStates);
    }
}
