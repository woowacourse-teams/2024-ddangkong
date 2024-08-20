package ddangkong.exception.room.balance.roomcontent;

import static ddangkong.exception.ErrorCode.EMPTY_ROUND_ENDED_AT;

import ddangkong.exception.BadRequestException;

public class EmptyRoundEndedAtException extends BadRequestException {

    public EmptyRoundEndedAtException() {
        super(EMPTY_ROUND_ENDED_AT.getMessage());
    }

    @Override
    public String getErrorCode() {
        return EMPTY_ROUND_ENDED_AT.name();
    }
}
