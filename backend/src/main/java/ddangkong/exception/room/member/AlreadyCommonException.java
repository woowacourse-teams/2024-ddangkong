package ddangkong.exception.room.member;

import static ddangkong.exception.ClientErrorCode.ALREADY_COMMON;

import ddangkong.exception.BadRequestException;

public class AlreadyCommonException extends BadRequestException {

    public AlreadyCommonException(Long memberId) {
        super(ALREADY_COMMON.getMessage().formatted(memberId));
    }

    @Override
    public String getErrorCode() {
        return ALREADY_COMMON.name();
    }
}
