package ddangkong.controller.question.dto;

import ddangkong.controller.option.dto.BalanceOptionResponse;
import ddangkong.domain.option.BalanceOption;
import ddangkong.domain.question.BalanceQuestion;
import ddangkong.domain.question.Category;
import lombok.Builder;

public record BalanceQuestionResponse(
        Long questionId,
        Category category,
        String title,
        BalanceOptionResponse firstOption,
        BalanceOptionResponse secondOption
) {
    @Builder
    private BalanceQuestionResponse(BalanceQuestion question, BalanceOption firstOption, BalanceOption secondOption) {
        this(question.getId(),
                question.getCategory(),
                question.getContent(),
                BalanceOptionResponse.from(firstOption),
                BalanceOptionResponse.from(secondOption));
    }
}
