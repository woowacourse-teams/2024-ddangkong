package ddangkong.service.balance.vote.dto;

import ddangkong.service.balance.content.dto.BalanceContentGroupResponse;
import ddangkong.service.balance.content.dto.BalanceContentTotalResponse;

public record BalanceVoteResultResponse(
        BalanceContentGroupResponse group,
        BalanceContentTotalResponse total
) {
}
