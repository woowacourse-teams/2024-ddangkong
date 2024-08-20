package ddangkong.exception.room.member;

import ddangkong.exception.BadRequestException;
import ddangkong.exception.ErrorCode;

public class NotExistMasterException extends BadRequestException {

    public NotExistMasterException() {
        super(ErrorCode.NOT_EXIST_MASTER.getMessage());
    }
}
