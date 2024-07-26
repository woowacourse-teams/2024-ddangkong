package ddangkong.domain.member;

import ddangkong.domain.balance.room.Room;
import ddangkong.exception.BadRequestException;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    List<Member> findAllByRoom(Room room);

    default Member getById(Long id) {
        return findById(id)
                .orElseThrow(() -> new BadRequestException("해당 멤버가 존재하지 않습니다."));
    }
}
