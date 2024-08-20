package ddangkong.exception.room.member;

import static ddangkong.exception.ErrorCode.INVALID_MASTER_CREATION;

import ddangkong.exception.BadRequestException;

public class InvalidMasterCreationException extends BadRequestException {

    public InvalidMasterCreationException(long memberCount) {
        super(INVALID_MASTER_CREATION.getMessage().formatted(memberCount));
    }
}
