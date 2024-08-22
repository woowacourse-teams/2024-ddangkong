package ddangkong.exception.room.member;

import static ddangkong.exception.ClientErrorCode.ALREADY_MASTER;

import ddangkong.exception.BadRequestException;

public class AlreadyMasterException extends BadRequestException {

    public AlreadyMasterException(Long memberId) {
        super(ALREADY_MASTER.getMessage().formatted(memberId));
    }

    @Override
    public String getErrorCode() {
        return ALREADY_MASTER.name();
    }
}
