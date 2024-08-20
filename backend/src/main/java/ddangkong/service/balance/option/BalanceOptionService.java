package ddangkong.service.balance.option;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceOptionService {

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public BalanceOptions getBalanceOptions(BalanceContent balanceContent) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(balanceContent);
        return new BalanceOptions(balanceOptions);
    }
}
