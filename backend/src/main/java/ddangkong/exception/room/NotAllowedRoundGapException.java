package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.NOT_ALLOWED_ROUND_GAP;

import ddangkong.exception.BadRequestException;

public class NotAllowedRoundGapException extends BadRequestException {

    public NotAllowedRoundGapException(int allowedRoundGap, int currentRound, int round) {
        super(NOT_ALLOWED_ROUND_GAP.getMessage().formatted(allowedRoundGap, currentRound, round));
    }

    @Override
    public String getErrorCode() {
        return NOT_ALLOWED_ROUND_GAP.name();
    }
}
