package ddangkong.exception.room.balance.roomcontent;

import static ddangkong.exception.ErrorCode.ALREADY_ROUND_STARTED;

import ddangkong.exception.BadRequestException;

public class AlreadyRoundStartedException extends BadRequestException {

    public AlreadyRoundStartedException() {
        super(ALREADY_ROUND_STARTED.getMessage());
    }

    @Override
    public String getErrorCode() {
        return ALREADY_ROUND_STARTED.name();
    }
}
