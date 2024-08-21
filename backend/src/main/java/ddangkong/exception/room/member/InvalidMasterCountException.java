package ddangkong.exception.room.member;

import static ddangkong.exception.ServerErrorCode.INVALID_MASTER_COUNT;

import ddangkong.exception.InternalServerException;

public class InvalidMasterCountException extends InternalServerException {

    public InvalidMasterCountException(int allowedMasterCount, long masterCount, Long roomId) {
        super(INVALID_MASTER_COUNT.getMessage().formatted(allowedMasterCount, masterCount, roomId));
    }
}
