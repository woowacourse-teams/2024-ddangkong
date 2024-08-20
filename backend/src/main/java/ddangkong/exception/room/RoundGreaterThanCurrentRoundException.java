package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.ROUND_GREATER_THAN_CURRENT_ROUND;

import ddangkong.exception.BadRequestException;

public class RoundGreaterThanCurrentRoundException extends BadRequestException {

    public RoundGreaterThanCurrentRoundException(int startRound, int round) {
        super(ROUND_GREATER_THAN_CURRENT_ROUND.getMessage().formatted(startRound, round));
    }

    @Override
    public String getErrorCode() {
        return ROUND_GREATER_THAN_CURRENT_ROUND.name();
    }
}
