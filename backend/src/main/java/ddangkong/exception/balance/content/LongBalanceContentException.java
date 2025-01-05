package ddangkong.exception.balance.content;

import static ddangkong.exception.ClientErrorCode.LONG_BALANCE_CONTENT_NAME;

import ddangkong.exception.BadRequestException;

public class LongBalanceContentException extends BadRequestException {

    public LongBalanceContentException(int maxLength) {
        super(LONG_BALANCE_CONTENT_NAME.getMessage().formatted(maxLength));
    }

    @Override
    public String getErrorCode() {
        return LONG_BALANCE_CONTENT_NAME.name();
    }
}
