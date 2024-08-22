package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.facade.balance.vote.dto.GiveUpVoteMemberResponse;
import java.util.List;

public record ContentRoomBalanceVoteResponse(
        OptionRoomBalanceVoteResponse firstOption,
        OptionRoomBalanceVoteResponse secondOption,
        GiveUpVoteMemberResponse giveUp
) {

    public static ContentRoomBalanceVoteResponse create(BalanceOptions balanceOptions,
                                                        List<RoomBalanceVote> firstOptionVotes,
                                                        List<RoomBalanceVote> secondOptionVotes,
                                                        List<Member> giveUpMembers) {
        BalanceOption fistOption = balanceOptions.getFirstOption();
        BalanceOption secondOption = balanceOptions.getSecondOption();
        int contentVoteCount = firstOptionVotes.size() + secondOptionVotes.size();

        return new ContentRoomBalanceVoteResponse(
                OptionRoomBalanceVoteResponse.create(fistOption, firstOptionVotes, contentVoteCount),
                OptionRoomBalanceVoteResponse.create(secondOption, secondOptionVotes, contentVoteCount),
                GiveUpVoteMemberResponse.create(giveUpMembers)
        );
    }
}
