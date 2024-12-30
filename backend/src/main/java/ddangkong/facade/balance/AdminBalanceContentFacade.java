package ddangkong.facade.balance;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.content.TotalBalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.vote.TotalBalanceVotes;
import ddangkong.exception.balance.content.AlreadyUsingBalanceContentException;
import ddangkong.facade.balance.dto.BalanceContentCreateRequest;
import ddangkong.facade.balance.dto.BalanceContentCreateResponse;
import ddangkong.facade.balance.dto.BalanceContentPatchRequest;
import ddangkong.facade.balance.dto.BalanceContentPatchResponse;
import ddangkong.facade.balance.dto.BalanceContentsAdminResponse;
import ddangkong.facade.balance.dto.BalanceOptionPatchRequest;
import ddangkong.facade.balance.dto.BalanceOptionPatchResponse;
import ddangkong.service.balance.content.BalanceContentService;
import ddangkong.service.balance.option.BalanceOptionService;
import ddangkong.service.balance.vote.TotalBalanceVoteService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdminBalanceContentFacade {

    private final BalanceContentService balanceContentService;

    private final BalanceOptionService balanceOptionService;

    private final RoomContentService roomContentService;

    private final TotalBalanceVoteService totalBalanceVoteService;

    @Transactional(readOnly = true)
    public BalanceContentsAdminResponse getContents(Category category) {
        List<BalanceContent> contents = balanceContentService.getBalanceContents(category);
        List<BalanceOption> options = balanceOptionService.getBalanceOptions(contents);
        TotalBalanceVotes votes = totalBalanceVoteService.getVotes(options);
        List<TotalBalanceContent> totalContents = TotalBalanceContent.createContents(contents, options);

        return BalanceContentsAdminResponse.of(totalContents, votes);
    }

    @Transactional
    public BalanceContentCreateResponse createContent(BalanceContentCreateRequest request) {
        BalanceContent content = balanceContentService.createBalanceContent(request.category(), request.question());
        BalanceOption firstOption = balanceOptionService.createBalanceOption(request.firstOption(), content);
        BalanceOption secondOption = balanceOptionService.createBalanceOption(request.secondOption(), content);

        return new BalanceContentCreateResponse(content, firstOption, secondOption);
    }

    @Transactional
    public BalanceContentPatchResponse updateContent(BalanceContentPatchRequest request) {
        BalanceContent content = balanceContentService.getBalanceContent(request.contentId());
        content.updateName(request.name());
        return new BalanceContentPatchResponse(content);
    }

    @Transactional
    public BalanceOptionPatchResponse updateOption(BalanceOptionPatchRequest request) {
        BalanceOption option = balanceOptionService.getBalanceOption(request.optionId());
        option.updateName(request.name());
        return new BalanceOptionPatchResponse(option);
    }

    @Transactional
    public void deleteContent(Long contentId) {
        BalanceContent content = balanceContentService.getBalanceContent(contentId);
        if (roomContentService.isUsingAtRoom(content)) {
            throw new AlreadyUsingBalanceContentException();
        }

        totalBalanceVoteService.deleteByBalanceContent(content);
        balanceOptionService.deleteByBalanceContent(content);
        balanceContentService.delete(content);
    }
}
