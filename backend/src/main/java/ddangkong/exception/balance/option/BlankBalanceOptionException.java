package ddangkong.exception.balance.option;

import static ddangkong.exception.ClientErrorCode.BLANK_BALANCE_OPTION_NAME;

import ddangkong.exception.BadRequestException;

public class BlankBalanceOptionException extends BadRequestException {

    public BlankBalanceOptionException() {
        super(BLANK_BALANCE_OPTION_NAME.getMessage());
    }

    @Override
    public String getErrorCode() {
        return BLANK_BALANCE_OPTION_NAME.name();
    }
}
