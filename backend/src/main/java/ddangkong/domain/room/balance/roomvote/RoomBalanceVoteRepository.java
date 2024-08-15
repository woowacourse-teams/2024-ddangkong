package ddangkong.domain.room.balance.roomvote;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomBalanceVoteRepository extends JpaRepository<RoomBalanceVote, Long> {

    List<RoomBalanceVote> findByMemberRoomAndBalanceOption(Room room, BalanceOption balanceOption);

    Long countByMemberRoomAndBalanceOptionIn(Room room, List<BalanceOption> balanceOptions);
}
