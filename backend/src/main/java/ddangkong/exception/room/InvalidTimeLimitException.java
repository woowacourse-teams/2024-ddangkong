package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.INVALID_TIME_LIMIT;

import ddangkong.exception.BadRequestException;
import java.util.List;

public class InvalidTimeLimitException extends BadRequestException {

    public InvalidTimeLimitException(List<Integer> allowedTimeLimits, int requestedTimeLimit) {
        super(INVALID_TIME_LIMIT.getMessage()
                .formatted(allowedTimeLimits.get(0), allowedTimeLimits.get(1), allowedTimeLimits.get(2),
                        requestedTimeLimit));
    }

    @Override
    public String getErrorCode() {
        return INVALID_TIME_LIMIT.name();
    }
}
