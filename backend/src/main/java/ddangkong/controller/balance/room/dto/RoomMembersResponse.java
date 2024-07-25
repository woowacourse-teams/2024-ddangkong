package ddangkong.controller.balance.room.dto;

import java.util.List;

public record RoomMembersResponse(
        List<RoomMemberResponse> members
) {
}
