package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.TotalBalanceContent;
import ddangkong.domain.balance.vote.TotalBalanceVotes;

public record BalanceContentAdminResponse(
        long contentId,
        String question,
        BalanceOptionAdminResponse firstOption,
        BalanceOptionAdminResponse secondOption
) {

    public static BalanceContentAdminResponse of(TotalBalanceContent totalContent, TotalBalanceVotes totalVotes) {
        int firstOptionVoteCount = totalVotes.countVotes(totalContent.getFirstOption());
        int secondOptionVoteCount = totalVotes.countVotes(totalContent.getSecondOption());
        int totalVoteCount = firstOptionVoteCount + secondOptionVoteCount;

        return new BalanceContentAdminResponse(
                totalContent.getContentId(),
                totalContent.getContentName(),
                BalanceOptionAdminResponse.existVoteResponse(
                        totalContent.getFirstOption(), totalVoteCount, firstOptionVoteCount),
                BalanceOptionAdminResponse.existVoteResponse(
                        totalContent.getSecondOption(), totalVoteCount, secondOptionVoteCount)
        );
    }
}
