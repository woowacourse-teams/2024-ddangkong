package ddangkong.controller.balance;

import ddangkong.facade.balance.AdminBalanceContentFacade;
import ddangkong.facade.balance.dto.BalanceContentPatchRequest;
import ddangkong.facade.balance.dto.BalanceContentPatchResponse;
import ddangkong.facade.balance.dto.BalanceOptionPatchRequest;
import ddangkong.facade.balance.dto.BalanceOptionPatchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminBalanceController {

    private final AdminBalanceContentFacade adminBalanceContentFacade;

    @PatchMapping("/admin/balances/contents")
    public BalanceContentPatchResponse updateContent(@RequestBody BalanceContentPatchRequest request) {
        return adminBalanceContentFacade.updateContent(request);
    }

    @PatchMapping("/admin/balances/options")
    public BalanceOptionPatchResponse updateOption(@RequestBody BalanceOptionPatchRequest request) {
        return adminBalanceContentFacade.updateOption(request);
    }
}
