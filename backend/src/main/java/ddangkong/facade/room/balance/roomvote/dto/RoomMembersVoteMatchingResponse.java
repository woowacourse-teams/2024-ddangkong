package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.room.member.Member;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public record RoomMembersVoteMatchingResponse(
        List<RoomMemberVoteMatchingResponse> matchedMembers,
        boolean existMatching
) {

    public static RoomMembersVoteMatchingResponse create(Map<Member, Long> membersVoteMatchingPercent) {
        List<Entry<Member, Long>> matchedMembersPercents = orderMembersVoteMatchingPercentDesc(
                membersVoteMatchingPercent);

        if (matchedMembersPercents.isEmpty()) {
            return new RoomMembersVoteMatchingResponse(List.of(), false);
        }
        return getRoomMemberVoteMatching(matchedMembersPercents);
    }

    private static RoomMembersVoteMatchingResponse getRoomMemberVoteMatching(
            List<Entry<Member, Long>> matchedMembersPercents) {
        boolean existMatching = false;
        int previousRank = 0;
        long previousMatchingPercent = Integer.MAX_VALUE;

        List<RoomMemberVoteMatchingResponse> matchedMembers = new ArrayList<>();
        for (int rank = 1; rank <= matchedMembersPercents.size(); rank++) {
            Entry<Member, Long> memberMatchingPercent = matchedMembersPercents.get(rank - 1);
            Member member = memberMatchingPercent.getKey();
            long matchingPercent = memberMatchingPercent.getValue();

            if (matchingPercent > 0) {
                existMatching = true;
            }

            if (matchingPercent < previousMatchingPercent) {
                matchedMembers.add(new RoomMemberVoteMatchingResponse(rank, member, matchingPercent));
                previousMatchingPercent = matchingPercent;
                previousRank = rank;
            } else if (matchingPercent == previousMatchingPercent) {
                matchedMembers.add(new RoomMemberVoteMatchingResponse(previousRank, member, matchingPercent));
            }
        }

        return new RoomMembersVoteMatchingResponse(matchedMembers, existMatching);
    }

    private static List<Entry<Member, Long>> orderMembersVoteMatchingPercentDesc(
            Map<Member, Long> membersVoteMatchingPercent) {
        LinkedList<Entry<Member, Long>> matchedMembersPercents = new LinkedList<>(
                membersVoteMatchingPercent.entrySet()
        );

        matchedMembersPercents.sort(Entry.comparingByValue());
        Collections.reverse(matchedMembersPercents);

        return matchedMembersPercents;
    }
}
