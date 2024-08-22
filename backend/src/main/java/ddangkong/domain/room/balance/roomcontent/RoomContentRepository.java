package ddangkong.domain.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomContentRepository extends JpaRepository<RoomContent, Long> {

    @EntityGraph(attributePaths = "balanceContent")
    Optional<RoomContent> findByRoomAndRound(Room room, int round);

    List<RoomContent> findAllByRoom(Room room);

    Optional<RoomContent> findByRoomAndBalanceContent(Room room, BalanceContent balanceContent);
}
