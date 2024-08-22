package ddangkong.exception.balance.content;

import static ddangkong.exception.ServerErrorCode.NOT_ENOUGH_BALANCE_CONTENT;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.InternalServerException;

public class NotEnoughBalanceContentException extends InternalServerException {

    public NotEnoughBalanceContentException(Category category) {
        super(NOT_ENOUGH_BALANCE_CONTENT.getMessage().formatted(category));
    }
}
