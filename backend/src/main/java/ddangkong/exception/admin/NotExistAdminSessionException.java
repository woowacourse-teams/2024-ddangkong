package ddangkong.exception.admin;

import static ddangkong.exception.ClientErrorCode.NOT_EXIST_ADMIN_SESSION;

import ddangkong.exception.UnauthorizedException;

public class NotExistAdminSessionException extends UnauthorizedException {

    public NotExistAdminSessionException() {
        super(NOT_EXIST_ADMIN_SESSION.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_EXIST_ADMIN_SESSION.name();
    }
}
