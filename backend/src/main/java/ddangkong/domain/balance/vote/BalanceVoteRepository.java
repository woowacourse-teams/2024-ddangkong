package ddangkong.domain.balance.vote;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.room.Room;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceVoteRepository extends JpaRepository<BalanceVote, Long> {
    //    List<BalanceVote> findAllByBalanceOption(BalanceOption balanceOption);
    Long countByBalanceOption(BalanceOption balanceOption);

    List<BalanceVote> findByMemberRoomAndBalanceOption(Room room, BalanceOption balanceOption);
}
