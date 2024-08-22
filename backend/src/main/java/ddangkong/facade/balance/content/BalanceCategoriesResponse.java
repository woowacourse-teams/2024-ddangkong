package ddangkong.facade.balance.content;

import ddangkong.domain.balance.content.Category;
import java.util.List;

public record BalanceCategoriesResponse(
        List<BalanceCategoryResponse> categories
) {
    public static BalanceCategoriesResponse create(List<Category> categories) {
        List<BalanceCategoryResponse> categoryResponses = categories.stream()
                .map(BalanceCategoryResponse::create)
                .toList();
        return new BalanceCategoriesResponse(categoryResponses);
    }
}
