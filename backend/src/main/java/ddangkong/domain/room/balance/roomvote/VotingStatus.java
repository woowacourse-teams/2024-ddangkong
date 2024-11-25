package ddangkong.domain.room.balance.roomvote;

import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import java.util.List;

@Getter
@Slf4j
public class VotingStatus {

    private final RoomMembers roomMembers;
    private final BalanceOptions balanceOptions;
    private final List<RoomBalanceVote> votes;
    private final int voteCount;
    private final boolean voteFinished;

    public VotingStatus(RoomMembers roomMembers,
                        BalanceOptions balanceOptions,
                        int voteCount,
                        boolean voteFinished) {
        checkVoteSize(roomMembers, voteCount);

        this.roomMembers = roomMembers;
        this.balanceOptions = balanceOptions;
        this.votes = List.of();
        this.voteCount = voteCount;
        this.voteFinished = voteFinished;
    }

    private static void checkVoteSize(RoomMembers roomMembers, int voteCount) {
        if (voteCount > roomMembers.size()) {
            log.error("[Concurrency Error] 투표한 인원 수가 방 인원 수보다 많습니다. 투표한 인원 수: {}, 방 인원 수: {}",
                    voteCount, roomMembers.size());
        }
    }

    public Member getMember(Long memberId) {
        return roomMembers.getMember(memberId);
    }

    public List<Member> getMembers() {
        return roomMembers.getMembers();
    }

    public int getMemberCount() {
        return roomMembers.size();
    }

    public boolean isVoteNotFinished() {
        return !voteFinished;
    }
}
