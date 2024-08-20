package ddangkong.exception.balance.content;

import static ddangkong.exception.ErrorCode.NOT_FOUND_BALANCE_CONTENT;

import ddangkong.exception.BadRequestException;

public class NotFoundBalanceContentException extends BadRequestException {

    public NotFoundBalanceContentException() {
        super(NOT_FOUND_BALANCE_CONTENT.getMessage());
    }
}
