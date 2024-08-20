package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.INVALID_RANGE_TIME_LIMIT;

import ddangkong.exception.BadRequestException;

public class InvalidRangeTimeLimitException extends BadRequestException {

    public InvalidRangeTimeLimitException(int minTimeLimit, int maxTimeLimit, int requestedTimeLimit) {
        super(INVALID_RANGE_TIME_LIMIT.getMessage().formatted(minTimeLimit, maxTimeLimit, requestedTimeLimit));
    }

    @Override
    public String getErrorCode() {
        return INVALID_RANGE_TIME_LIMIT.name();
    }
}
