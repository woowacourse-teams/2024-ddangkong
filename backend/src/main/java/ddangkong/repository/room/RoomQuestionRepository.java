package ddangkong.repository.room;

import ddangkong.domain.room.RoomQuestion;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomQuestionRepository extends JpaRepository<RoomQuestion, Long> {

    Optional<RoomQuestion> findTopByRoomIdOrderByCreatedAtDesc(Long roomId);
}
