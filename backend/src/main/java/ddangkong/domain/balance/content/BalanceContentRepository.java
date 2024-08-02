package ddangkong.domain.balance.content;

import static java.util.stream.Collectors.toList;

import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.Collections;
import java.util.List;
import java.util.stream.LongStream;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceContentRepository extends JpaRepository<BalanceContent, Long> {

    long count();

    List<BalanceContent> findByIdIn(List<Long> ids);

    default BalanceContent getById(Long id) {
        return findById(id)
                .orElseThrow(() -> new BadRequestException("해당 질문 컨텐츠가 존재하지 않습니다."));
    }

    default List<BalanceContent> findByRandom(int count) {
        List<Long> ids = LongStream.rangeClosed(1, count).boxed().collect(toList());
        if (ids.size() < count) {
            throw new InternalServerException("질문이 라운드만큼 존재하지 않습니다.");
        }

        Collections.shuffle(ids);
        List<Long> candidateIds = ids.subList(0, count);
        return findByIdIn(candidateIds);
    }
}
