package ddangkong.domain.balance.vote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TotalBalanceVoteRepository extends JpaRepository<TotalBalanceVote, Long> {

    long countByBalanceOption(BalanceOption balanceOption);

    List<TotalBalanceVote> findAllByBalanceOptionIn(List<BalanceOption> balanceOptions);

    void deleteByBalanceOptionBalanceContent(BalanceContent balanceContent);
}
