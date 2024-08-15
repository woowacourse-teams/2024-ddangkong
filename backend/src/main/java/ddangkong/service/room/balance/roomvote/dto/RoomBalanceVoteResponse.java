package ddangkong.service.room.balance.roomvote.dto;

import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;

public record RoomBalanceVoteResponse(
        Long optionId
) {

    public RoomBalanceVoteResponse(RoomBalanceVote roomBalanceVote) {
        this(roomBalanceVote.getOptionId());
    }
}
