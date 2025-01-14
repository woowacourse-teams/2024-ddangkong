package ddangkong.exception.balance.content;

import static ddangkong.exception.ClientErrorCode.BLANK_BALANCE_CONTENT_NAME;

import ddangkong.exception.BadRequestException;

public class BlankBalanceContentException extends BadRequestException {

    public BlankBalanceContentException() {
        super(BLANK_BALANCE_CONTENT_NAME.getMessage());
    }

    @Override
    public String getErrorCode() {
        return BLANK_BALANCE_CONTENT_NAME.name();
    }
}
