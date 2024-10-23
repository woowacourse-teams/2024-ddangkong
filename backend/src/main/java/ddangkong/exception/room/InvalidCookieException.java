package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.INVALID_COOKIE;

import ddangkong.exception.BadRequestException;

public class InvalidCookieException extends BadRequestException {

    public InvalidCookieException() {
        super(INVALID_COOKIE.getMessage());
    }

    @Override
    public String getErrorCode() {
        return INVALID_COOKIE.name();
    }
}
