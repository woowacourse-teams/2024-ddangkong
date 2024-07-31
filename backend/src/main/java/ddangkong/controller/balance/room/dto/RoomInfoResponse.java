package ddangkong.controller.balance.room.dto;

import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.member.Member;
import java.util.List;

public record RoomInfoResponse(
        boolean isGameStart,
        RoomSetting roomSetting,
        List<MemberResponse> members
) {
    public static RoomInfoResponse of(List<Member> members, Room room) {
        List<MemberResponse> response = members.stream()
                .map(MemberResponse::new)
                .toList();
        RoomSetting roomSetting = new RoomSetting(room.getTimeLimit());

        return new RoomInfoResponse(room.isGameProgress(), roomSetting, response);
    }
}
