package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.util.PercentageCalculator;
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
                PercentageCalculator.calculate(optionVotes.size(), contentVoteCount)
        );
    }
}
