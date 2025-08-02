package ddangkong.facade.balance.vote.dto;

import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.member.dto.MemberResponse;
import java.util.List;

public record GiveUpVoteMemberResponse(
        List<MemberResponse> members,
        int memberCount) {

    public static GiveUpVoteMemberResponse create(List<Member> giveUpMembers) {
        List<MemberResponse> members = giveUpMembers.stream()
                .map(MemberResponse::new)
                .toList();
        return new GiveUpVoteMemberResponse(members, members.size());
    }
}
