package ddangkong.domain.room.member;

import ddangkong.domain.room.Room;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByIdAndRoom(Long id, Room room);

    Optional<Member> findTopByRoomAndIsMaster(Room room, boolean isMaster);

    List<Member> findAllByRoom(Room room);

    long countByRoom(Room room);

    boolean existsByRoomAndIsMaster(Room room, boolean isMaster);
}
