package ddangkong.controller.balance;

import ddangkong.facade.balance.content.BalanceCategoriesResponse;
import ddangkong.facade.balance.content.BalanceFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BalanceController {

    private final BalanceFacade balanceFacade;

    @GetMapping("/balances/categories")
    public BalanceCategoriesResponse getCategories() {
        return balanceFacade.getBalanceCategories();
    }
}
