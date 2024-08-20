package ddangkong.domain.room.balance.roomvote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomBalanceVoteRepository extends JpaRepository<RoomBalanceVote, Long> {

    List<RoomBalanceVote> findByMemberRoomAndBalanceOption(Room room, BalanceOption balanceOption);

    List<RoomBalanceVote> findByMemberRoomAndBalanceOptionBalanceContent(Room room, BalanceContent balanceContent);

    long countByMemberInAndBalanceOptionIn(List<Member> members, List<BalanceOption> balanceOptions);

    List<RoomBalanceVote> findByMemberRoom(Room room);

    boolean existsByMemberAndBalanceOption(Member member, BalanceOption option);
}
