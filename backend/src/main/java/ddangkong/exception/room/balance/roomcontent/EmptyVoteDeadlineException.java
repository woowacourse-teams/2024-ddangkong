package ddangkong.exception.room.balance.roomcontent;

import static ddangkong.exception.ClientErrorCode.EMPTY_VOTE_DEADLINE;

import ddangkong.exception.BadRequestException;

public class EmptyVoteDeadlineException extends BadRequestException {

    public EmptyVoteDeadlineException() {
        super(EMPTY_VOTE_DEADLINE.getMessage());
    }

    @Override
    public String getErrorCode() {
        return EMPTY_VOTE_DEADLINE.name();
    }
}
