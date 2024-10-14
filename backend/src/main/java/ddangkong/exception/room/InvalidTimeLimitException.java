package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.INVALID_TIME_LIMIT;

import ddangkong.exception.BadRequestException;
import java.util.List;

public class InvalidTimeLimitException extends BadRequestException {

    public InvalidTimeLimitException(List<Integer> allowedTimeLimits, int requestedTimeLimit) {
        super(INVALID_TIME_LIMIT.getMessage()
                .formatted(allowedTimeLimits.toString(), requestedTimeLimit));
    }

    @Override
    public String getErrorCode() {
        return INVALID_TIME_LIMIT.name();
    }
}
