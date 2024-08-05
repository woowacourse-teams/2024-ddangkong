package ddangkong.domain.balance.room;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.exception.BadRequestException;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomContentRepository extends JpaRepository<RoomContent, Long> {

    Optional<RoomContent> findByRoomAndRound(Room room, int round);

    Optional<RoomContent> findByRoomAndBalanceContent(Room room, BalanceContent balanceContent);

    default RoomContent getByRoomAndBalanceContent(Room room, BalanceContent balanceContent) {
        return findByRoomAndBalanceContent(room, balanceContent)
                .orElseThrow(() -> new BadRequestException("방에 존재하지 않은 컨텐츠입니다."));
    }
}
