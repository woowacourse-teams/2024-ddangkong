package ddangkong.domain.balance.room;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomContentRepository extends JpaRepository<RoomContent, Long> {

    Optional<RoomContent> findByRoomAndRound(Room room, int round);

    Optional<RoomContent> findByRoomAndRoundAndIsUsed(Room room, int round, boolean isUsed);
}
