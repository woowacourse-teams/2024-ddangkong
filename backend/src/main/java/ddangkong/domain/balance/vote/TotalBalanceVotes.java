package ddangkong.domain.balance.vote;

import ddangkong.domain.balance.option.BalanceOption;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TotalBalanceVotes {

    private static final int NOT_EXIST_VOTE = 0;

    private final Map<Long, Integer> balanceOptionIdToVoteCount;

    public TotalBalanceVotes(List<TotalBalanceVote> votes) {
        this.balanceOptionIdToVoteCount = votes.stream()
                .collect(Collectors.groupingBy(
                        vote -> vote.getBalanceOption().getId(),
                        Collectors.collectingAndThen(Collectors.counting(), Long::intValue)
                ));
    }

    public int countVotes(BalanceOption balanceOption) {
        return balanceOptionIdToVoteCount.getOrDefault(balanceOption.getId(), NOT_EXIST_VOTE);
    }
}
