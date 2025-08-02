package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.facade.room.member.dto.MemberResponse;
import ddangkong.util.PercentageCalculator;
import java.util.List;

public record OptionRoomBalanceVoteResponse(
        Long optionId,
        String name,
        List<MemberResponse> members,
        int memberCount,
        int percent
) {

    public static OptionRoomBalanceVoteResponse create(BalanceOption balanceOption,
                                                       List<RoomBalanceVote> optionVotes,
                                                       int contentVoteCount) {
        List<MemberResponse> members = optionVotes.stream()
                .map(RoomBalanceVote::getMember)
                .map(MemberResponse::new)
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
