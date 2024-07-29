package ddangkong.controller.balance.member.dto;

import java.util.List;

public record MembersResponse(
        List<MemberResponse> members
) {
}
