package ddangkong.facade.balance.dto;

import ddangkong.domain.balance.content.TotalBalanceContent;
import ddangkong.domain.balance.vote.TotalBalanceVotes;

public record BalanceContentAdminResponse(
        Long contentId,
        String question,
        BalanceOptionAdminResponse firstOption,
        BalanceOptionAdminResponse secondOption
) {

    public static BalanceContentAdminResponse create(TotalBalanceContent totalContent, TotalBalanceVotes totalVotes) {
        int firstOptionVoteCount = totalVotes.countVotes(totalContent.getFirstOption());
        int secondOptionVoteCount = totalVotes.countVotes(totalContent.getSecondOption());
        int totalVoteCount = firstOptionVoteCount + secondOptionVoteCount;

        return new BalanceContentAdminResponse(
                totalContent.getContentId(),
                totalContent.getContentName(),
                new BalanceOptionAdminResponse(totalContent.getFirstOption(), totalVoteCount, firstOptionVoteCount),
                new BalanceOptionAdminResponse(totalContent.getSecondOption(), totalVoteCount, secondOptionVoteCount)
        );
    }
}
