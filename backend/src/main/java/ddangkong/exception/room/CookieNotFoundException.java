package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.COOKIE_NOT_FOUND;

import ddangkong.exception.BadRequestException;

public class CookieNotFoundException extends BadRequestException {

    public CookieNotFoundException() {
        super(COOKIE_NOT_FOUND.getMessage());
    }

    @Override
    public String getErrorCode() {
        return COOKIE_NOT_FOUND.name();
    }
}
