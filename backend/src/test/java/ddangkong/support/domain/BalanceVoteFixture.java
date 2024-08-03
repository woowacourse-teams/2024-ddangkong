package ddangkong.support.domain;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.vote.BalanceVote;
import ddangkong.domain.balance.vote.BalanceVoteRepository;
import ddangkong.domain.member.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BalanceVoteFixture {

    @Autowired
    private BalanceVoteRepository balanceVoteRepository;

    public BalanceVote createVote(BalanceOption balanceOption, Member member) {
        BalanceVote balanceVote = new BalanceVote(balanceOption, member);
        return balanceVoteRepository.save(balanceVote);
    }
}
