package ddangkong.controller.balance.member.dto;

import ddangkong.domain.member.Member;
import java.util.List;

public record MembersResponse(
        List<MemberResponse> members
) {
    public static MembersResponse from(List<Member> members) {
        List<MemberResponse> response = members.stream()
                .map(MemberResponse::new)
                .toList();
        return new MembersResponse(response);
    }
}
