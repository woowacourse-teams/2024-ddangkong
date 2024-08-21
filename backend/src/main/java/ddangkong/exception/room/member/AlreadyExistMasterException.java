package ddangkong.exception.room.member;

import static ddangkong.exception.ClientErrorCode.ALREADY_EXIST_MASTER;

import ddangkong.exception.BadRequestException;

public class AlreadyExistMasterException extends BadRequestException {

    public AlreadyExistMasterException() {
        super(ALREADY_EXIST_MASTER.getMessage());
    }

    @Override
    public String getErrorCode() {
        return ALREADY_EXIST_MASTER.name();
    }
}
