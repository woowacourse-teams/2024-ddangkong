package ddangkong.exception.room.member;

import static ddangkong.exception.ClientErrorCode.NOT_EXIST_COMMON;

import ddangkong.exception.BadRequestException;

public class NotExistCommonMemberException extends BadRequestException {

    public NotExistCommonMemberException() {
        super(NOT_EXIST_COMMON.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_EXIST_COMMON.name();
    }
}
