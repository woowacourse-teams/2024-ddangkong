package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.INVALID_RANGE_TOTAL_ROUND;

import ddangkong.exception.BadRequestException;

public class InvalidRangeTotalRoundException extends BadRequestException {

    public InvalidRangeTotalRoundException(int minTotalRound, int maxTotalRound, int requestedTotalRound) {
        super(INVALID_RANGE_TOTAL_ROUND.getMessage().formatted(minTotalRound, maxTotalRound, requestedTotalRound));
    }

    @Override
    public String getErrorCode() {
        return INVALID_RANGE_TOTAL_ROUND.name();
    }
}
