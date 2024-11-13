package ddangkong.support.fixture.domain;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import org.springframework.stereotype.Component;

@Component
public class RoomBalanceVoteFixture {

    private final RoomBalanceVoteRepository roomBalanceVoteRepository;

    public RoomBalanceVoteFixture(RoomBalanceVoteRepository roomBalanceVoteRepository) {
        this.roomBalanceVoteRepository = roomBalanceVoteRepository;
    }

    public RoomBalanceVote create(Member member, BalanceOption balanceOption) {
        return roomBalanceVoteRepository.save(new RoomBalanceVote(member, balanceOption));
    }
}
