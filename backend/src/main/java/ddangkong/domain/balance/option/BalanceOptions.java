package ddangkong.domain.balance.option;

import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BalanceOptions {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final List<BalanceOption> options;

    public BalanceOptions(List<BalanceOption> options) {
        if (options.size() != BALANCE_OPTION_SIZE) {
            throw new InternalServerException("밸런스 게임의 선택지가 %d개입니다".formatted(options.size()));
        }
        this.options = new ArrayList<>(options);
    }

    public BalanceOption getFirstOption() {
        return options.get(0);
    }

    public BalanceOption getSecondOption() {
        return options.get(1);
    }

    public BalanceOption getOptionById(Long id) {
        return options.stream()
                .filter(option -> option.isSameId(id))
                .findFirst()
                .orElseThrow(() -> new BadRequestException("해당 옵션이 존재하지 않습니다."));
    }

    public List<BalanceOption> getOptions() {
        return Collections.unmodifiableList(options);
    }
}
