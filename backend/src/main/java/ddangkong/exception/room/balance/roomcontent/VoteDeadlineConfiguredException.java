package ddangkong.exception.room.balance.roomcontent;

import static ddangkong.exception.ErrorCode.VOTE_DEADLINE_CONFIGURED;

import ddangkong.exception.InternalServerException;

public class VoteDeadlineConfiguredException extends InternalServerException {

    public VoteDeadlineConfiguredException() {
        super(VOTE_DEADLINE_CONFIGURED.getMessage());
    }
}
