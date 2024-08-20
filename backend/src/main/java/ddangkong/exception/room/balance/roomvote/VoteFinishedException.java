package ddangkong.exception.room.balance.roomvote;

import static ddangkong.exception.ErrorCode.VOTE_FINISHED;

import ddangkong.exception.BadRequestException;

public class VoteFinishedException extends BadRequestException {

    public VoteFinishedException() {
        super(VOTE_FINISHED.getMessage());
    }
}
