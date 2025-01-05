package ddangkong.exception.balance.option;

import static ddangkong.exception.ClientErrorCode.LONG_BALANCE_OPTION_NAME;

import ddangkong.exception.BadRequestException;

public class LongBalanceOptionException extends BadRequestException {

    public LongBalanceOptionException(int maxLength) {
        super(LONG_BALANCE_OPTION_NAME.getMessage());
    }

    @Override
    public String getErrorCode() {
        return LONG_BALANCE_OPTION_NAME.name();
    }
}
