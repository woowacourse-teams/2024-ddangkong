package ddangkong.exception.balance.option;

import static ddangkong.exception.ErrorCode.NOT_FOUND_BALANCE_OPTION;

import ddangkong.exception.BadRequestException;

public class NotFoundBalanceOptionException extends BadRequestException {

    public NotFoundBalanceOptionException() {
        super(NOT_FOUND_BALANCE_OPTION.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_FOUND_BALANCE_OPTION.name();
    }
}
