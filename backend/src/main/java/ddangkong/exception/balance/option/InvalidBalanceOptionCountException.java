package ddangkong.exception.balance.option;

import static ddangkong.exception.ServerErrorCode.INVALID_BALANCE_OPTION_COUNT;

import ddangkong.exception.InternalServerException;

public class InvalidBalanceOptionCountException extends InternalServerException {

    public InvalidBalanceOptionCountException(int count) {
        super(INVALID_BALANCE_OPTION_COUNT.getMessage().formatted(count));
    }
}
