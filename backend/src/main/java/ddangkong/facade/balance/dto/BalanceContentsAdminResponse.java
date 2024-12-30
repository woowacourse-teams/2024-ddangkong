package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.TotalBalanceContent;
import ddangkong.domain.balance.vote.TotalBalanceVotes;
import java.util.List;

public record BalanceContentsAdminResponse(List<BalanceContentAdminResponse> contents) {

    public static BalanceContentsAdminResponse of(List<TotalBalanceContent> totalContents,
                                                  TotalBalanceVotes totalVotes) {
        List<BalanceContentAdminResponse> responses = totalContents.stream()
                .map(totalContent -> BalanceContentAdminResponse.of(totalContent, totalVotes))
                .toList();
        return new BalanceContentsAdminResponse(responses);
    }
}
