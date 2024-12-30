package ddangkong.exception.balance.content;

import static ddangkong.exception.ClientErrorCode.ALREADY_USING_AT_ROOM_BALANCE_CONTENT;

import ddangkong.exception.BadRequestException;

public class AlreadyUsingBalanceContentException extends BadRequestException {

    public AlreadyUsingBalanceContentException() {
        super(ALREADY_USING_AT_ROOM_BALANCE_CONTENT.getMessage());
    }

    @Override
    public String getErrorCode() {
        return ALREADY_USING_AT_ROOM_BALANCE_CONTENT.name();
    }
}
