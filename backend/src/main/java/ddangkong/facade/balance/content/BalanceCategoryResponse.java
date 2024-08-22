package ddangkong.facade.balance.content;

import ddangkong.domain.balance.content.Category;

public record BalanceCategoryResponse(
        String value,
        String label
) {
    public static BalanceCategoryResponse create(Category category) {
        return new BalanceCategoryResponse(category.name(), category.getValue());
    }
}
