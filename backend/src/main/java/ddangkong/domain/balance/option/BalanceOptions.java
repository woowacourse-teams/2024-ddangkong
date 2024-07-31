package ddangkong.domain.balance.option;

import ddangkong.exception.InternalServerException;
import java.util.List;
import lombok.Getter;

@Getter
public class BalanceOptions {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final BalanceOption fistOption;
    private final BalanceOption secondOption;

    public BalanceOptions(List<BalanceOption> options) {
        if (options.size() != BALANCE_OPTION_SIZE) {
            throw new InternalServerException("밸런스 게임의 선택지가 %d개입니다".formatted(options.size()));
        }

        fistOption = options.get(0);
        secondOption = options.get(1);
    }
}
