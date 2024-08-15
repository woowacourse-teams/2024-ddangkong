package ddangkong.service.room.balance.roomvote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import java.util.List;

public record OptionRoomBalanceVoteResponse(
        Long optionId,
        String name,
        List<String> members,
        int memberCount,
        int percent
) {

    public static OptionRoomBalanceVoteResponse create(BalanceOption balanceOption,
                                                       List<RoomBalanceVote> optionVotes,
                                                       int contentVoteCount) {
        List<String> members = optionVotes.stream()
                .map(RoomBalanceVote::getMemberNickname)
                .toList(); // todo member n + 1

        return new OptionRoomBalanceVoteResponse(
                balanceOption.getId(),
                balanceOption.getName(),
                members,
                members.size(),
                getVotePercent(contentVoteCount, optionVotes.size())
        );
    }

    private static int getVotePercent(int contentVoteCount, int optionVoteCount) {
        return (int) Math.round(optionVoteCount * 1.0 / contentVoteCount * 100);
    }
}
