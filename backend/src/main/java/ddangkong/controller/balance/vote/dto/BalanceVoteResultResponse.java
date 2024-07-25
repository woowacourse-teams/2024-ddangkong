package ddangkong.controller.balance.vote.dto;

import ddangkong.controller.balance.content.dto.BalanceContentGroupResponse;
import ddangkong.controller.balance.content.dto.BalanceContentTotalResponse;

public record BalanceVoteResultResponse(
        BalanceContentGroupResponse group,
        BalanceContentTotalResponse total
) {

}
