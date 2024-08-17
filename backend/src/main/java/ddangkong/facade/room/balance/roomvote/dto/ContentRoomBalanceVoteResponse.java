package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import java.util.List;

public record ContentRoomBalanceVoteResponse(
        OptionRoomBalanceVoteResponse firstOption,
        OptionRoomBalanceVoteResponse secondOption
) {

    public static ContentRoomBalanceVoteResponse create(BalanceOptions balanceOptions,
                                                        List<RoomBalanceVote> firstOptionVotes,
                                                        List<RoomBalanceVote> secondOptionVotes) {
        BalanceOption fistOption = balanceOptions.getFirstOption();
        BalanceOption secondOption = balanceOptions.getSecondOption();
        int contentVoteCount = firstOptionVotes.size() + secondOptionVotes.size();

        return new ContentRoomBalanceVoteResponse(
                OptionRoomBalanceVoteResponse.create(fistOption, firstOptionVotes, contentVoteCount),
                OptionRoomBalanceVoteResponse.create(secondOption, secondOptionVotes, contentVoteCount)
        );
    }
}
