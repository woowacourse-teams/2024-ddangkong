package ddangkong.support.fixture;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BalanceOptionFixture {

    @Autowired
    private BalanceOptionRepository balanceOptionRepository;

    public BalanceOption createOption(BalanceContent balanceContent) {
        BalanceOption balanceOption = new BalanceOption("옵션명", balanceContent);
        return balanceOptionRepository.save(balanceOption);
    }

    public BalanceOption createOption(String name, BalanceContent balanceContent) {
        BalanceOption balanceOption = new BalanceOption(name, balanceContent);
        return balanceOptionRepository.save(balanceOption);
    }
}