package ddangkong.domain.balance.content;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import java.util.List;

public class TotalBalanceContent {

    private final BalanceContent balanceContent;
    private final BalanceOptions balanceOptions;

    public TotalBalanceContent(BalanceContent balanceContent, BalanceOptions balanceOptions) {
        this.balanceContent = balanceContent;
        this.balanceOptions = balanceOptions;
    }

    public static List<TotalBalanceContent> createContents(List<BalanceContent> balanceContents,
                                                           List<BalanceOption> balanceOptions) {
        return balanceContents.stream()
                .map(content -> new TotalBalanceContent(content, findOptions(content, balanceOptions)))
                .toList();
    }

    private static BalanceOptions findOptions(BalanceContent balanceContent, List<BalanceOption> balanceOptions) {
        List<BalanceOption> foundOptions = balanceOptions.stream()
                .filter(option -> option.isContain(balanceContent))
                .toList();
        return new BalanceOptions(foundOptions);
    }

    public Long getContentId() {
        return balanceContent.getId();
    }

    public String getContentName() {
        return balanceContent.getName();
    }

    public BalanceOption getFirstOption() {
        return balanceOptions.getFirstOption();
    }

    public BalanceOption getSecondOption() {
        return balanceOptions.getSecondOption();
    }
}
