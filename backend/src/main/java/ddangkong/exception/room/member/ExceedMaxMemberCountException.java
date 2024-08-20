package ddangkong.exception.room.member;

import static ddangkong.exception.ErrorCode.EXCEED_MAX_MEMBER_COUNT;

import ddangkong.exception.BadRequestException;

public class ExceedMaxMemberCountException extends BadRequestException {

    public ExceedMaxMemberCountException(long memberCount) {
        super(EXCEED_MAX_MEMBER_COUNT.getMessage().formatted(memberCount));
    }

    @Override
    public String getErrorCode() {
        return EXCEED_MAX_MEMBER_COUNT.name();
    }
}
