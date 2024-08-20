package ddangkong.facade.room.dto;

import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.member.dto.MasterResponse;

public record RoundFinishedResponse(
        boolean isRoundFinished,
        boolean isGameFinished,
        MasterResponse master
) {

    public RoundFinishedResponse(boolean isRoundFinished, boolean isGameFinished, Member master) {
        this(isRoundFinished, isGameFinished, new MasterResponse(master));
    }
}
