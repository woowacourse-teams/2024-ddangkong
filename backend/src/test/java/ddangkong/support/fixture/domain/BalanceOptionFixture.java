package ddangkong.support.fixture.domain;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class BalanceOptionFixture {

    private static final String DEFAULT_OPTION = "Option";
    private static final String FIRST_OPTION = "Option1";
    private static final String SECOND_OPTION = "Option2";

    private final BalanceOptionRepository balanceOptionRepository;

    public BalanceOptionFixture(BalanceOptionRepository balanceOptionRepository) {
        this.balanceOptionRepository = balanceOptionRepository;
    }

    public BalanceOption create(String name, BalanceContent balanceContent) {
        return balanceOptionRepository.save(new BalanceOption(name, balanceContent));
    }

    public BalanceOption create(BalanceContent balanceContent) {
        return create(DEFAULT_OPTION, balanceContent);
    }

    public BalanceOptions initOption(BalanceContent balanceContent) {
        BalanceOption option1 = create(FIRST_OPTION, balanceContent);
        BalanceOption option2 = create(SECOND_OPTION, balanceContent);
        return new BalanceOptions(List.of(option1, option2));
    }

    public List<BalanceOptions> initOptions(List<RoomContent> roomContents) {
        List<BalanceOptions> options = new ArrayList<>();
        for (RoomContent roomContent : roomContents) {
            BalanceContent balanceContent = roomContent.getBalanceContent();
            BalanceOption option1 = create(FIRST_OPTION, balanceContent);
            BalanceOption option2 = create(SECOND_OPTION, balanceContent);
            options.add(new BalanceOptions(List.of(option1, option2)));
        }

        return options;
    }
}
