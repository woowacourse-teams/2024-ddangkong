package ddangkong.facade.room.balance.roomvote.dto;

import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;

public record RoomBalanceVoteResultResponse(
        ContentRoomBalanceVoteResponse group,
        ContentTotalBalanceVoteResponse total
) {
}
