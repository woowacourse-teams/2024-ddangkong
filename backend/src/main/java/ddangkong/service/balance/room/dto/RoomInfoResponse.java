package ddangkong.service.balance.room.dto;

import ddangkong.domain.balance.room.Room;
import ddangkong.domain.member.Member;
import ddangkong.service.balance.member.dto.MemberResponse;
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
