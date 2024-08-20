package ddangkong.facade.room.dto;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.facade.room.member.dto.MasterResponse;
import ddangkong.facade.room.member.dto.MemberResponse;
import java.util.List;

public record RoomInfoResponse(
        boolean isGameStart,
        RoomSettingResponse roomSetting,
        List<MemberResponse> members,
        MasterResponse master
) {

    public static RoomInfoResponse create(RoomMembers members, Room room) {
        List<MemberResponse> membersResponse = members.getMembers()
                .stream()
                .map(MemberResponse::new)
                .toList();
        RoomSettingResponse roomSettingResponse = new RoomSettingResponse(room);
        MasterResponse masterResponse = new MasterResponse(members.getMaster());

        return new RoomInfoResponse(room.isGameProgress(), roomSettingResponse, membersResponse, masterResponse);
    }
}
