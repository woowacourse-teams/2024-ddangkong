package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.NOT_ALLOWED_TIME_LIMIT;

import ddangkong.exception.BadRequestException;
import java.util.List;

public class NotAllowedTimeLimitException extends BadRequestException {

    public NotAllowedTimeLimitException(List<Integer> allowedTimeLimits, int requestedTimeLimit) {
        super(NOT_ALLOWED_TIME_LIMIT.getMessage()
                .formatted(allowedTimeLimits.get(0), allowedTimeLimits.get(1), allowedTimeLimits.get(2),
                        requestedTimeLimit));
    }

    @Override
    public String getErrorCode() {
        return NOT_ALLOWED_TIME_LIMIT.name();
    }
}
