package ddangkong.exception.room.member;

import static ddangkong.exception.ErrorCode.NOT_ALLOWED_MASTER_COUNT;

import ddangkong.exception.InternalServerException;

public class NotAllowedMasterCountException extends InternalServerException {

    public NotAllowedMasterCountException(int allowedMasterCount, long masterCount, Long roomId) {
        super(NOT_ALLOWED_MASTER_COUNT.getMessage().formatted(allowedMasterCount, masterCount, roomId));
    }
}
