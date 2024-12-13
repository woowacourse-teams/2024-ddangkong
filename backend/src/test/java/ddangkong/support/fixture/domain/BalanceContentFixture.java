package ddangkong.support.fixture.domain;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.content.Category;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class BalanceContentFixture {

    private static final String DEFAULT_NAME = "Content";

    private final BalanceContentRepository balanceContentRepository;

    public BalanceContentFixture(BalanceContentRepository balanceContentRepository) {
        this.balanceContentRepository = balanceContentRepository;
    }

    public BalanceContent create(Category category, String name) {
        return balanceContentRepository.save(new BalanceContent(category, name));
    }

    public BalanceContent create(Category category) {
        return create(category, DEFAULT_NAME);
    }

    public BalanceContent create() {
        return create(Category.IF, DEFAULT_NAME);
    }

    public List<BalanceContent> createContents(Category category, int count) {
        List<BalanceContent> balanceContents = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            balanceContents.add(create(category, DEFAULT_NAME + i));
        }

        return balanceContents;
    }
}
