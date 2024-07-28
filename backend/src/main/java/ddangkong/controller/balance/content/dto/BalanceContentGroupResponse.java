package ddangkong.controller.balance.content.dto;

import ddangkong.controller.balance.option.dto.BalanceOptionGroupResponse;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.balance.vote.BalanceVote;
import java.util.List;

public record BalanceContentGroupResponse(
        BalanceOptionGroupResponse firstOption,
        BalanceOptionGroupResponse secondOption
) {
    public static BalanceContentGroupResponse of(BalanceOptions balanceOptions,
                                                 List<BalanceVote> firstOptionVotes,
                                                 List<BalanceVote> secondOptionVotes) {
        int voterSize = firstOptionVotes.size() + secondOptionVotes.size();
        return new BalanceContentGroupResponse(
                BalanceOptionGroupResponse.of(balanceOptions.getFistOption(), firstOptionVotes, voterSize),
                BalanceOptionGroupResponse.of(balanceOptions.getSecondOption(), secondOptionVotes, voterSize)
        );
    }
}
