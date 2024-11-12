package ddangkong.support.fixture;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.content.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BalanceContentFixture {

    private static final String DEFAULT_NAME = "Content";

    @Autowired
    private BalanceContentRepository balanceContentRepository;

    public BalanceContent create(Category category, String name) {
        return balanceContentRepository.save(new BalanceContent(category, name));
    }

    public void createContents(Category category, int count) {
        for (int i = 0; i < count; i++) {
            balanceContentRepository.save(new BalanceContent(category, DEFAULT_NAME + i));
        }
    }
}
