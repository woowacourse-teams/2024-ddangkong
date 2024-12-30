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

    public static List<TotalBalanceContent> createContents(List<BalanceContent> contents, List<BalanceOption> options) {
        return contents.stream()
                .map(content -> new TotalBalanceContent(content, findOptions(content, options)))
                .toList();
    }

    private static BalanceOptions findOptions(BalanceContent content, List<BalanceOption> options) {
        List<BalanceOption> foundOptions = options.stream()
                .filter(option -> option.isContain(content))
                .toList();
        return new BalanceOptions(foundOptions);
    }

    public BalanceContent getContent() {
        return balanceContent;
    }

    public long getContentId() {
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
