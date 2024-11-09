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

    public BalanceOption create(String name, BalanceContent balanceContent) {
        return balanceOptionRepository.save(new BalanceOption(name, balanceContent));
    }
}
