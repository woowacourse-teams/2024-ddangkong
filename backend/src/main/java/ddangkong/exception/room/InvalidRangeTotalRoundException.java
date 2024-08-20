package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.INVALID_RANGE_TOTAL_ROUND;

import ddangkong.exception.BadRequestException;

public class InvalidRangeTotalRoundException extends BadRequestException {

    public InvalidRangeTotalRoundException(int minTotalRound, int maxTotalRound, int requestedTotalRound) {
        super(INVALID_RANGE_TOTAL_ROUND.getMessage().formatted(minTotalRound, maxTotalRound, requestedTotalRound));
    }
}
