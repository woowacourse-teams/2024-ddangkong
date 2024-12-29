package ddangkong.facade.balance;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.facade.balance.dto.BalanceContentPatchRequest;
import ddangkong.facade.balance.dto.BalanceContentPatchResponse;
import ddangkong.facade.balance.dto.BalanceOptionPatchRequest;
import ddangkong.facade.balance.dto.BalanceOptionPatchResponse;
import ddangkong.service.balance.content.BalanceContentService;
import ddangkong.service.balance.option.BalanceOptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class AdminBalanceContentFacade {

    private final BalanceContentService balanceContentService;
    private final BalanceOptionService balanceOptionService;

    @Transactional
    public BalanceContentPatchResponse updateContent(@RequestBody BalanceContentPatchRequest request) {
        BalanceContent content = balanceContentService.getBalanceContent(request.contentId());
        content.updateName(request.name());
        return new BalanceContentPatchResponse(content);
    }

    @Transactional
    public BalanceOptionPatchResponse updateOption(@RequestBody BalanceOptionPatchRequest request) {
        BalanceOption option = balanceOptionService.getBalanceOption(request.optionId());
        option.updateName(request.name());
        return new BalanceOptionPatchResponse(option);
    }
}
