package ddangkong.domain.option;

import ddangkong.domain.content.BalanceContent;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceOptionRepository extends JpaRepository<BalanceOption, Long> {

    List<BalanceOption> findByBalanceContent(BalanceContent balanceContent);
}
