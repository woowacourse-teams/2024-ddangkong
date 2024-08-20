package ddangkong.exception.room.balance.roomvote;

import static ddangkong.exception.ErrorCode.VOTE_NOT_FINISHED;

import ddangkong.exception.BadRequestException;

public class VoteNotFinishedException extends BadRequestException {

    public VoteNotFinishedException() {
        super(VOTE_NOT_FINISHED.getMessage());
    }
}