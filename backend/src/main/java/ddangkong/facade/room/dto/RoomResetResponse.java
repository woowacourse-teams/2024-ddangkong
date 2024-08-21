package ddangkong.facade.room.dto;

import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.member.dto.MasterResponse;

public record RoomResetResponse(
        boolean isReset,
        MasterResponse master
) {

    public RoomResetResponse(boolean isReset, Member master) {
        this(isReset, new MasterResponse(master));
    }
}
