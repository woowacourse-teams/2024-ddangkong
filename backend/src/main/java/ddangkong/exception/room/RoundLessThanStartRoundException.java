package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.ROUND_LESS_THAN_START_ROUND;

import ddangkong.exception.BadRequestException;

public class RoundLessThanStartRoundException extends BadRequestException {

    public RoundLessThanStartRoundException(int startRound, int round) {
        super(ROUND_LESS_THAN_START_ROUND.getMessage().formatted(startRound, round));
    }
}