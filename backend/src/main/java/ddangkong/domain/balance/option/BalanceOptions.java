package ddangkong.domain.balance.option;

import ddangkong.exception.balance.option.InvalidBalanceOptionCountException;
import ddangkong.exception.balance.option.NotFoundBalanceOptionException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BalanceOptions {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final List<BalanceOption> options;

    public BalanceOptions(List<BalanceOption> options) {
        if (options.size() != BALANCE_OPTION_SIZE) {
            throw new InvalidBalanceOptionCountException(options.size());
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
                .orElseThrow(NotFoundBalanceOptionException::new);
    }

    public List<BalanceOption> getOptions() {
        return Collections.unmodifiableList(options);
    }
}
