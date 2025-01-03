package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.BalanceContent;

public record BalanceContentPatchResponse(Long contentId, String name) {

    public BalanceContentPatchResponse(BalanceContent content) {
        this(content.getId(), content.getName());
    }
}
