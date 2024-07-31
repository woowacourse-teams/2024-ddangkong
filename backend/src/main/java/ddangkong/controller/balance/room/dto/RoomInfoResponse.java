package ddangkong.controller.balance.room.dto;

import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.domain.balance.room.RoomStatus;
import ddangkong.domain.member.Member;
import java.util.List;

public record RoomInfoResponse(
        boolean isGameStart,
        List<MemberResponse> members
) {
    public static RoomInfoResponse of(List<Member> members, RoomStatus roomStatus) {
        List<MemberResponse> response = members.stream()
                .map(MemberResponse::new)
                .toList();

        return new RoomInfoResponse(roomStatus.isGameProgress(), response);
    }
}
