package ddangkong.support.fixture;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.content.Category;
import java.util.ArrayList;
import java.util.List;
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

    public List<BalanceContent> createContents(Category category, int count) {
        List<BalanceContent> balanceContents = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            balanceContents.add(balanceContentRepository.save(new BalanceContent(category, DEFAULT_NAME + i)));
        }

        return balanceContents;
    }
}