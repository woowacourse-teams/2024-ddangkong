package ddangkong.domain.option;

import ddangkong.domain.question.BalanceQuestion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceOptionRepository extends JpaRepository<BalanceOption, Long> {

    List<BalanceOption> findByBalanceQuestion(BalanceQuestion balanceQuestion);
}
