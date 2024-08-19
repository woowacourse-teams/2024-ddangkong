package ddangkong.facade.balance.content;

import ddangkong.domain.balance.content.Category;
import java.util.List;

public record BalanceCategoriesResponse(
        List<String> categories
) {
    public static BalanceCategoriesResponse from(List<Category> categories) {
        List<String> categoryNames = categories.stream()
                .map(Category::getName)
                .toList();
        return new BalanceCategoriesResponse(categoryNames);
    }
}
