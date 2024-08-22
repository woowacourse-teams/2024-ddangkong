package ddangkong.domain.balance.option;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.member.Member;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BalanceOptionRepository extends JpaRepository<BalanceOption, Long> {

    List<BalanceOption> findAllByBalanceContent(BalanceContent balanceContent);

    @Query("""
            SELECT bo
            FROM BalanceOption bo
                JOIN RoomBalanceVote rbv ON bo = rbv.balanceOption
            WHERE rbv.member = :member
             """)
    List<BalanceOption> findMemberRoomBalanceVoteOptions(Member member);
}
