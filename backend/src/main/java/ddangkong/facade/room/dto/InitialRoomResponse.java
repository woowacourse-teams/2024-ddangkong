package ddangkong.facade.room.dto;

import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.member.dto.MasterResponse;

public record InitialRoomResponse(
        boolean isInitial,
        MasterResponse master
) {

    public InitialRoomResponse(boolean isInitialRoom, Member master) {
        this(isInitialRoom, new MasterResponse(master));
    }
}
