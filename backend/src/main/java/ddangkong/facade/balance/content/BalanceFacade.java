package ddangkong.facade.balance.content;

import ddangkong.domain.balance.content.Category;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class BalanceFacade {

    public BalanceCategoriesResponse getBalanceCategories() {
        List<Category> categories = Category.getCategories();
        return BalanceCategoriesResponse.create(categories);
    }
}
