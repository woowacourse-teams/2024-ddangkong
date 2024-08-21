package ddangkong.domain.room.balance.roomvote;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RoomBalanceVoteRepository extends JpaRepository<RoomBalanceVote, Long> {

    List<RoomBalanceVote> findByMemberInAndBalanceOption(List<Member> members, BalanceOption balanceOption);

    long countByMemberInAndBalanceOptionIn(List<Member> members, List<BalanceOption> balanceOptions);

    List<RoomBalanceVote> findByMemberRoom(Room room);

    boolean existsByMemberAndBalanceOption(Member member, BalanceOption option);

    @Query("""
            SELECT rbv
            FROM RoomBalanceVote rbv
                JOIN FETCH Member m ON rbv.member = m
                INNER JOIN Room r ON m.room = r
                INNER JOIN BalanceOption bo ON rbv.balanceOption = bo
            WHERE m.room = :room AND rbv.balanceOption IN (:balanceOptions)
            AND m != :member
            """)
    List<RoomBalanceVote> findRoomBalanceVotesByBalanceOptionsAndRoomWithoutMember(List<BalanceOption> balanceOptions,
                                                                                   Room room, Member member);
}
