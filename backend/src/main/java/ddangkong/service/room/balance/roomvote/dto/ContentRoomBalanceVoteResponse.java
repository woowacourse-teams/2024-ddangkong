package ddangkong.service.room.balance.roomvote.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import java.util.List;

public record ContentRoomBalanceVoteResponse(
        OptionRoomBalanceVoteResponse firstOption,
        OptionRoomBalanceVoteResponse secondOption
) {

    public static ContentRoomBalanceVoteResponse of(BalanceOptions balanceOptions,
                                                    List<RoomBalanceVote> firstOptionVotes,
                                                    List<RoomBalanceVote> secondOptionVotes) {
        BalanceOption fistOption = balanceOptions.getFistOption();
        BalanceOption secondOption = balanceOptions.getSecondOption();
        int contentVoteCount = firstOptionVotes.size() + secondOptionVotes.size();

        return new ContentRoomBalanceVoteResponse(
                OptionRoomBalanceVoteResponse.of(fistOption, firstOptionVotes, contentVoteCount),
                OptionRoomBalanceVoteResponse.of(secondOption, secondOptionVotes, contentVoteCount)
        );
    }
}
