package ddangkong.domain.room.member;

import ddangkong.domain.room.Room;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByIdAndRoom(Long id, Room room);

    List<Member> findAllByRoom(Room room);

    long countByRoom(Room room);
}
