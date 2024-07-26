package ddangkong.service.balance.vote;

import ddangkong.controller.balance.content.dto.BalanceContentGroupResponse;
import ddangkong.controller.balance.content.dto.BalanceContentTotalResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionGroupResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionTotalResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteResultResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.room.RoomContentRepository;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.balance.vote.BalanceVote;
import ddangkong.domain.balance.vote.BalanceVoteRepository;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceVoteService {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final BalanceVoteRepository balanceVoteRepository;

    private final MemberRepository memberRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    private final BalanceContentRepository balanceContentRepository;

    private final RoomContentRepository roomContentRepository;

    private final RoomRepository roomRepository;

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

    @Transactional(readOnly = true)
    public BalanceVoteResultResponse findBalanceVoteResult(Long roomId, Long balanceContentId) {
        Room room = roomRepository.getById(roomId);
        List<BalanceOption> balanceOptions = findBalanceOptions(room, balanceContentId);

        BalanceOption firstOption = balanceOptions.get(0);
        BalanceOption secondOption = balanceOptions.get(1);

        BalanceContentGroupResponse group = getBalanceContentGroupResponse(room, firstOption, secondOption);
        BalanceContentTotalResponse total = getBalanceContentTotalResponse(firstOption, secondOption);

        return new BalanceVoteResultResponse(group, total);
    }

    private BalanceContentGroupResponse getBalanceContentGroupResponse(Room room,
                                                                       BalanceOption firstOption,
                                                                       BalanceOption secondOption) {
        List<BalanceVote> firstOptionVotes = balanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, firstOption);
        List<BalanceVote> secondOptionVotes = balanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, secondOption);

        int roomMemberSize = firstOptionVotes.size() + secondOptionVotes.size();
        return new BalanceContentGroupResponse(
                BalanceOptionGroupResponse.of(firstOption, firstOptionVotes, roomMemberSize),
                BalanceOptionGroupResponse.of(secondOption, secondOptionVotes, roomMemberSize)
        );
    }

    private BalanceContentTotalResponse getBalanceContentTotalResponse(BalanceOption firstOption,
                                                                       BalanceOption secondOption) {
        Long firstOptionCount = balanceVoteRepository.countByBalanceOption(firstOption);
        Long secondOptionCount = balanceVoteRepository.countByBalanceOption(secondOption);
        return new BalanceContentTotalResponse(
                BalanceOptionTotalResponse.of(firstOption,
                        firstOptionCount + secondOptionCount,
                        firstOptionCount),
                BalanceOptionTotalResponse.of(secondOption,
                        firstOptionCount + secondOptionCount,
                        secondOptionCount)
        );
    }

    private List<BalanceOption> findBalanceOptions(Room room, Long balanceContentId) {
        RoomContent roomContent = roomContentRepository.findByRoomAndRound(room, room.getCurrentRound())
                .orElseThrow(() -> new BadRequestException("해당 방의 현재 진행중인 질문이 존재하지 않습니다."));
        validateBalanceContent(balanceContentId, roomContent.getBalanceContent());

        BalanceContent balanceContent = balanceContentRepository.getById(balanceContentId);
        List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(balanceContent);
        validateBalanceOptions(balanceOptions);
        return balanceOptions;
    }

    private void validateBalanceContent(Long balanceContentId, BalanceContent balanceContent) {
        if (!Objects.equals(balanceContent.getId(), balanceContentId)) {
            throw new BadRequestException("현재 진행중인 질문의 컨텐츠와 일치하지 않는 요청입니다.");
        }
    }

    private void validateBalanceOptions(List<BalanceOption> balanceOptions) {
        if (balanceOptions.size() != BALANCE_OPTION_SIZE) {
            throw new InternalServerException("밸런스 게임의 선택지가 %d개입니다".formatted(balanceOptions.size()));
        }
    }
}
