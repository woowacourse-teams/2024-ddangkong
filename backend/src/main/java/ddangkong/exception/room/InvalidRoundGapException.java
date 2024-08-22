package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.INVALID_ROUND_GAP;

import ddangkong.exception.BadRequestException;

public class InvalidRoundGapException extends BadRequestException {

    public InvalidRoundGapException(int allowedRoundGap, int currentRound, int round) {
        super(INVALID_ROUND_GAP.getMessage().formatted(allowedRoundGap, currentRound, round));
    }

    @Override
    public String getErrorCode() {
        return INVALID_ROUND_GAP.name();
    }
}
