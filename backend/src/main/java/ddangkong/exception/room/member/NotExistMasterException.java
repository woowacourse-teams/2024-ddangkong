package ddangkong.exception.room.member;

import static ddangkong.exception.ErrorCode.NOT_EXIST_MASTER;

import ddangkong.exception.BadRequestException;

public class NotExistMasterException extends BadRequestException {

    public NotExistMasterException() {
        super(NOT_EXIST_MASTER.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_EXIST_MASTER.name();
    }
}
