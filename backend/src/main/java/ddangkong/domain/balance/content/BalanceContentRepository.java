package ddangkong.domain.balance.content;

import ddangkong.exception.BadRequestException;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceContentRepository extends JpaRepository<BalanceContent, Long> {

    List<BalanceContent> findByCategory(Category category);

    long count();

    default BalanceContent getById(Long id) {
        return findById(id)
                .orElseThrow(() -> new BadRequestException("해당 질문 컨텐츠가 존재하지 않습니다."));
    }
}
