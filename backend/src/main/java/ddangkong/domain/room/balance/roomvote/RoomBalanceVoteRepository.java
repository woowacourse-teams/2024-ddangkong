package ddangkong.domain.room.balance.roomvote;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomBalanceVoteRepository extends JpaRepository<RoomBalanceVote, Long> {

    List<RoomBalanceVote> findByMemberRoomAndBalanceOption(Room room, BalanceOption balanceOption);

    long countByMemberRoomAndBalanceOptionIn(Room room, List<BalanceOption> balanceOptions);

    List<RoomBalanceVote> findByMemberRoom(Room room);

    boolean existsByMemberAndBalanceOption(Member member, BalanceOption option);
}
