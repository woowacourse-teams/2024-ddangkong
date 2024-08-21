package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.member.dto.MasterResponse;

public record VoteFinishedResponse(
        boolean isFinished,
        MasterResponse master
) {

    public VoteFinishedResponse(boolean isFinished, Member master) {
        this(isFinished, new MasterResponse(master));
    }
}
