package ddangkong.domain.member;

import ddangkong.exception.BadRequestException;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    default Member getById(Long id) {
        return findById(id)
                .orElseThrow(() -> new BadRequestException("해당 멤버가 존재하지 않습니다."));
    }
}
