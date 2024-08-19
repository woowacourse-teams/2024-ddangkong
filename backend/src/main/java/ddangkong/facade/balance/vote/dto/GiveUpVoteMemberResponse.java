package ddangkong.facade.balance.vote.dto;

import ddangkong.domain.room.member.Member;
import java.util.List;

public record GiveUpVoteMemberResponse(List<String> members, int memberCount) {

    public static GiveUpVoteMemberResponse create(List<Member> giveUpMembers) {
        List<String> members = giveUpMembers.stream()
                .map(Member::getNickname)
                .toList();
        int memberCount = giveUpMembers.size();

        return new GiveUpVoteMemberResponse(members, memberCount);
    }
}
