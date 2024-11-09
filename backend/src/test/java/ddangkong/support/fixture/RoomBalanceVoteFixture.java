package ddangkong.support.fixture;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoomBalanceVoteFixture {

    @Autowired
    private RoomBalanceVoteRepository roomBalanceVoteRepository;

    public RoomBalanceVote create(Member member, BalanceOption balanceOption) {
        return roomBalanceVoteRepository.save(new RoomBalanceVote(member, balanceOption));
    }
}
