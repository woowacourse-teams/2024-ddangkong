package ddangkong.service.balance.vote;

import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.vote.BalanceVote;
import ddangkong.domain.balance.vote.BalanceVoteRepository;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import ddangkong.exception.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceVoteService {

    private final BalanceVoteRepository balanceVoteRepository;

    private final MemberRepository memberRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional
    public BalanceVoteResponse createBalanceVote(BalanceVoteRequest request, Long roomId, Long contentId) {
        BalanceOption balanceOption = findValidOption(request.optionId(), contentId);
        Member member = findValidMember(request.memberId(), roomId);

        BalanceVote balanceVote = new BalanceVote(balanceOption, member);
        BalanceVote savedBalanceVote = balanceVoteRepository.save(balanceVote);
        return new BalanceVoteResponse(savedBalanceVote);
    }

    private BalanceOption findValidOption(Long optionId, Long contentId) {
        BalanceOption balanceOption = balanceOptionRepository.getById(optionId);
        if (balanceOption.isNotContained(contentId)) {
            String errorMessage = "해당 질문의 선택지가 아닙니다. contentId : %d, optionId : %d"
                    .formatted(contentId, optionId);
            throw new BadRequestException(errorMessage);
        }
        return balanceOption;
    }

    private Member findValidMember(Long memberId, Long roomId) {
        Member member = memberRepository.getById(memberId);
        if (member.isNotIn(roomId)) {
            String errorMessage = "해당 방의 멤버가 아닙니다. roomId : %d, memberId : %d"
                    .formatted(roomId, memberId);
            throw new BadRequestException(errorMessage);
        }
        return member;
    }
}
