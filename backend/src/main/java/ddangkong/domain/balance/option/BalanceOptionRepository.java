package ddangkong.domain.balance.option;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.exception.BadRequestException;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceOptionRepository extends JpaRepository<BalanceOption, Long> {

    List<BalanceOption> findAllByBalanceContent(BalanceContent balanceContent);

    default BalanceOption getById(Long id) {
        return findById(id)
                .orElseThrow(() -> new BadRequestException("해당 옵션이 존재하지 않습니다."));
    }

    default BalanceOptions getBalanceOptionsByBalanceContent(BalanceContent balanceContent) {
        return new BalanceOptions(findAllByBalanceContent(balanceContent));
    }
}
