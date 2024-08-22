package ddangkong.domain.balance.vote;

import ddangkong.domain.balance.option.BalanceOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TotalBalanceVoteRepository extends JpaRepository<TotalBalanceVote, Long> {

    long countByBalanceOption(BalanceOption balanceOption);
}
