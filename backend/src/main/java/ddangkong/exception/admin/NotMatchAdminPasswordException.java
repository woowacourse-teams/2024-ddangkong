package ddangkong.exception.admin;

import static ddangkong.exception.ClientErrorCode.NOT_MATCH_ADMIN_PASSWORD;

import ddangkong.exception.BadRequestException;

public class NotMatchAdminPasswordException extends BadRequestException {

    public NotMatchAdminPasswordException() {
        super(NOT_MATCH_ADMIN_PASSWORD.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_MATCH_ADMIN_PASSWORD.name();
    }
}
