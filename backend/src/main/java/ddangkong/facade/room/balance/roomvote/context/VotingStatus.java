package ddangkong.facade.room.balance.roomvote.context;

import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import lombok.Getter;

@Getter
public class VotingStatus {

    private final RoomMembers roomMembers;

    private final BalanceOptions balanceOptions;

    private final boolean voteFinished;

    public VotingStatus(RoomMembers roomMembers, BalanceOptions balanceOptions, boolean voteFinished) {
        this.roomMembers = roomMembers;
        this.balanceOptions = balanceOptions;
        this.voteFinished = voteFinished;
    }

    public Member getMember(Long memberId) {
        return roomMembers.getMember(memberId);
    }

    public boolean isVoteNotFinished() {
        return !voteFinished;
    }
}
