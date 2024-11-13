package ddangkong.support.fixture;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BalanceOptionFixture {

    @Autowired
    private BalanceOptionRepository balanceOptionRepository;

    public BalanceOption create(String name, BalanceContent balanceContent) {
        return balanceOptionRepository.save(new BalanceOption(name, balanceContent));
    }

    public List<BalanceOptions> initOptions(List<RoomContent> roomContents) {
        List<BalanceOptions> options = new ArrayList<>();
        for (RoomContent roomContent : roomContents) {
            BalanceContent balanceContent = roomContent.getBalanceContent();
            BalanceOption option1 = create("Option1", balanceContent);
            BalanceOption option2 = create("Option2", balanceContent);
            options.add(new BalanceOptions(List.of(option1, option2)));
        }

        return options;
    }
}
