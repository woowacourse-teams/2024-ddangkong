package ddangkong.domain.question;

import ddangkong.domain.room.RoomQuestion;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomQuestionRepository extends JpaRepository<RoomQuestion, Long> {

    Optional<RoomQuestion> findTopByRoomIdOrderByCreatedAtDesc(Long roomId);
}
