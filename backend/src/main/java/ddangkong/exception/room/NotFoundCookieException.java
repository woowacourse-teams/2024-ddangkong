package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.NOT_FOUND_COOKIE;

import ddangkong.exception.BadRequestException;

public class NotFoundCookieException extends BadRequestException {

    public NotFoundCookieException() {
        super(NOT_FOUND_COOKIE.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_FOUND_COOKIE.name();
    }
}
