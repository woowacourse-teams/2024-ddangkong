package ddangkong.repository.option;

import ddangkong.domain.option.BalanceOption;
import ddangkong.domain.question.BalanceQuestion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BalanceOptionRepository extends JpaRepository<BalanceOption, Long> {

    List<BalanceOption> findByBalanceQuestion(BalanceQuestion balanceQuestion);
}
