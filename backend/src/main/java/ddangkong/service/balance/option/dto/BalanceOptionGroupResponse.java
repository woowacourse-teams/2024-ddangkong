package ddangkong.service.balance.option.dto;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.vote.BalanceVote;
import java.util.List;

public record BalanceOptionGroupResponse(
        Long optionId,
        String name,
        List<String> members,
        int memberCount,
        int percent
) {
    public static BalanceOptionGroupResponse of(BalanceOption balanceOption,
                                                List<BalanceVote> balanceVotes,
                                                int totalSize) {
        List<String> members = balanceVotes.stream()
                .map(BalanceVote::getMemberNickname)
                .toList();
        return new BalanceOptionGroupResponse(balanceOption.getId(),
                balanceOption.getName(),
                members,
                balanceVotes.size(),
                (int) Math.round(balanceVotes.size() * 1.0 / totalSize * 100));
    }
}
