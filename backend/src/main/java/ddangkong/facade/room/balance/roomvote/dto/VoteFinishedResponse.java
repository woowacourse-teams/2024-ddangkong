package ddangkong.facade.room.balance.roomvote.dto;

public record VoteFinishedResponse(
        boolean isFinished
) {

    public static VoteFinishedResponse roundFinished() {
        return new VoteFinishedResponse(true);
    }

    public static VoteFinishedResponse allVoteFinished(boolean isAllVoteFinished) {
        return new VoteFinishedResponse(isAllVoteFinished);
    }
}
