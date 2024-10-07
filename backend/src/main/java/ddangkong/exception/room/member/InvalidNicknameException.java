package ddangkong.exception.room.member;

import static ddangkong.exception.ClientErrorCode.INVALID_NICKNAME;

import ddangkong.exception.BadRequestException;

public class InvalidNicknameException extends BadRequestException {

    public InvalidNicknameException(int minLength, int maxLength) {
        super(INVALID_NICKNAME.getMessage().formatted(minLength, maxLength));
    }

    @Override
    public String getErrorCode() {
        return INVALID_NICKNAME.name();
    }
}
