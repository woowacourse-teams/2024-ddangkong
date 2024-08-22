package ddangkong.exception.room.balance.roomvote;

import static ddangkong.exception.ClientErrorCode.CAN_NOT_CHECK_MATCHING_PERCENT;
import static ddangkong.exception.ClientErrorCode.VOTE_FINISHED;

import ddangkong.exception.BadRequestException;

public class CanNotCheckMatchingPercentException extends BadRequestException {

    public CanNotCheckMatchingPercentException() {
        super(CAN_NOT_CHECK_MATCHING_PERCENT.getMessage());
    }

    @Override
    public String getErrorCode() {
        return VOTE_FINISHED.name();
    }
}
