package ddangkong.service.room.dto;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.service.room.member.dto.MemberResponse;
import java.util.List;

public record RoomInfoResponse(
        boolean isGameStart,
        RoomSettingResponse roomSetting,
        List<MemberResponse> members
) {
    public static RoomInfoResponse of(List<Member> members, Room room) {
        List<MemberResponse> membersResponse = members.stream()
                .map(MemberResponse::new)
                .toList();
        RoomSettingResponse roomSettingResponse = new RoomSettingResponse(room.getTotalRound(), room.getTimeLimit(),
                room.getCategory());

        return new RoomInfoResponse(room.isGameProgress(), roomSettingResponse, membersResponse);
    }
}
