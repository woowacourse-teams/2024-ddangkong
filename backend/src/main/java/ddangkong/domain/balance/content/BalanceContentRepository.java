package ddangkong.domain.balance.content;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceContentRepository extends JpaRepository<BalanceContent, Long> {

    List<BalanceContent> findByCategory(Category category);
}
