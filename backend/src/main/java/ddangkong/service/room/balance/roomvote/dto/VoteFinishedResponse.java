package ddangkong.service.room.balance.roomvote.dto;

public record VoteFinishedResponse(
        boolean isFinished
) {

    public static VoteFinishedResponse roundFinished(boolean isAllVoteFinished) {
        return new VoteFinishedResponse(isAllVoteFinished);
    }
}
