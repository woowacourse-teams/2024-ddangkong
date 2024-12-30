package ddangkong.support.fixture.domain;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.vote.TotalBalanceVote;
import ddangkong.domain.balance.vote.TotalBalanceVoteRepository;
import org.springframework.stereotype.Component;

@Component
public class TotalBalanceVoteFixture {

    private final TotalBalanceVoteRepository totalBalanceVoteRepository;

    public TotalBalanceVoteFixture(TotalBalanceVoteRepository totalBalanceVoteRepository) {
        this.totalBalanceVoteRepository = totalBalanceVoteRepository;
    }

    public TotalBalanceVote create(BalanceOption balanceOption) {
        return totalBalanceVoteRepository.save(new TotalBalanceVote(balanceOption));
    }
}
