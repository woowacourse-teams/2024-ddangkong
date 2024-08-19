package ddangkong.facade.room.balance.roomvote.operation;

import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.member.RoomMembers;
import lombok.Getter;

@Getter
public class VoteContext {

    private final RoomMembers roomMembers;

    private final BalanceOptions balanceOptions;

    private final boolean voteFinished;

    public VoteContext(RoomMembers roomMembers, BalanceOptions balanceOptions, boolean voteFinished) {
        this.roomMembers = roomMembers;
        this.balanceOptions = balanceOptions;
        this.voteFinished = voteFinished;
    }

    public boolean isVoteNotFinished() {
        return !voteFinished;
    }
}
