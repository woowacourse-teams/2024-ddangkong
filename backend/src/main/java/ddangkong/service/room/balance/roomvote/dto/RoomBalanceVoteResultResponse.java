package ddangkong.service.room.balance.roomvote.dto;

import ddangkong.service.balance.vote.dto.ContentTotalBalanceVoteResponse;

public record RoomBalanceVoteResultResponse(
        ContentRoomBalanceVoteResponse group,
        ContentTotalBalanceVoteResponse total
) {
}
