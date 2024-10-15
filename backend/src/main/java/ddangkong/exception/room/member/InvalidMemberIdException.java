package ddangkong.exception.room.member;

import static ddangkong.exception.ClientErrorCode.INVALID_MEMBER_ID;

import ddangkong.exception.BadRequestException;

public class InvalidMemberIdException extends BadRequestException {

    public InvalidMemberIdException() {
        super(INVALID_MEMBER_ID.getMessage());
    }

    @Override
    public String getErrorCode() {
        return INVALID_MEMBER_ID.name();
    }
}
