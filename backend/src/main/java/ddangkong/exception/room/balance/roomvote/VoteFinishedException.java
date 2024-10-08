package ddangkong.exception.room.balance.roomvote;

import static ddangkong.exception.ClientErrorCode.VOTE_FINISHED;

import ddangkong.exception.BadRequestException;

public class VoteFinishedException extends BadRequestException {

    public VoteFinishedException() {
        super(VOTE_FINISHED.getMessage());
    }

    @Override
    public String getErrorCode() {
        return VOTE_FINISHED.name();
    }
}
