package ddangkong.controller.balance;

import ddangkong.facade.balance.AdminBalanceContentFacade;
import ddangkong.facade.balance.dto.BalanceContentCreateResponse;
import ddangkong.facade.balance.dto.BalanceContentCreateRequest;
import ddangkong.facade.balance.dto.BalanceContentPatchRequest;
import ddangkong.facade.balance.dto.BalanceContentPatchResponse;
import ddangkong.facade.balance.dto.BalanceOptionPatchRequest;
import ddangkong.facade.balance.dto.BalanceOptionPatchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminBalanceController {

    private final AdminBalanceContentFacade adminBalanceContentFacade;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/admin/balances/contents")
    public BalanceContentCreateResponse createContent(@RequestBody BalanceContentCreateRequest request) {
        return adminBalanceContentFacade.createContent(request);
    }

    @PatchMapping("/admin/balances/contents")
    public BalanceContentPatchResponse updateContent(@RequestBody BalanceContentPatchRequest request) {
        return adminBalanceContentFacade.updateContent(request);
    }

    @PatchMapping("/admin/balances/options")
    public BalanceOptionPatchResponse updateOption(@RequestBody BalanceOptionPatchRequest request) {
        return adminBalanceContentFacade.updateOption(request);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/admin/balances/contents/{contentId}")
    public void deleteContent(@PathVariable long contentId) {
        adminBalanceContentFacade.deleteContent(contentId);
    }
}
