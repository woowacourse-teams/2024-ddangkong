package ddangkong.domain.member;

import ddangkong.domain.balance.room.Room;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    List<Member> findByRoom(Room room);
}
