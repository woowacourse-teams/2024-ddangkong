package ddangkong.service.balance.vote;

import ddangkong.service.balance.content.dto.BalanceContentGroupResponse;
import ddangkong.service.balance.content.dto.BalanceContentTotalResponse;
import ddangkong.service.balance.vote.dto.BalanceVoteRequest;
import ddangkong.service.balance.vote.dto.BalanceVoteResponse;
import ddangkong.service.balance.vote.dto.BalanceVoteResultResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.room.RoomContentRepository;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.balance.vote.BalanceVote;
import ddangkong.domain.balance.vote.BalanceVoteRepository;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import ddangkong.exception.BadRequestException;
import ddangkong.service.balance.option.dto.VoteFinishedResponse;
import java.time.Clock;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceVoteService {

    private final BalanceVoteRepository balanceVoteRepository;

    private final MemberRepository memberRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    private final BalanceContentRepository balanceContentRepository;

    private final RoomContentRepository roomContentRepository;

    private final RoomRepository roomRepository;

    private final Clock clock;

    @Transactional
    public BalanceVoteResponse createBalanceVote(BalanceVoteRequest request, Long roomId, Long contentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(contentId);
        validateRoundFinished(room, balanceContent);
        BalanceOption balanceOption = getValidOption(request.optionId(), balanceContent);
        Member member = getValidMember(request.memberId(), room);

        BalanceVote balanceVote = balanceVoteRepository.save(new BalanceVote(balanceOption, member));
        return new BalanceVoteResponse(balanceVote);
    }

    private void validateRoundFinished(Room room, BalanceContent balanceContent) {
        if (isRoundFinished(room, balanceContent)) {
            throw new BadRequestException("이미 종료된 라운드에는 투표할 수 없습니다.");
        }
    }

    private BalanceOption getValidOption(Long optionId, BalanceContent balanceContent) {
        return balanceOptionRepository.findByIdAndBalanceContent(optionId, balanceContent)
                .orElseThrow(() -> new BadRequestException("해당 질문의 선택지가 존재하지 않습니다."));
    }

    private Member getValidMember(Long memberId, Room room) {
        return memberRepository.findByIdAndRoom(memberId, room)
                .orElseThrow(() -> new BadRequestException("해당 방의 멤버가 존재하지 않습니다."));
    }

    @Transactional(readOnly = true)
    public BalanceVoteResultResponse getBalanceVoteResult(Long roomId, Long balanceContentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(balanceContentId);
        if (isRoundFinished(room, balanceContent) || isAllVoteFinished(room, balanceContent)) {
            BalanceOptions balanceOptions = balanceOptionRepository.getBalanceOptionsByBalanceContent(balanceContent);
            BalanceContentGroupResponse group = getBalanceContentGroupResponse(room, balanceOptions);
            BalanceContentTotalResponse total = getBalanceContentTotalResponse(balanceOptions);
            return new BalanceVoteResultResponse(group, total);
        }
        throw new BadRequestException("투표가 끝나지 않아 투표 결과를 조회할 수 없습니다.");
    }

    private BalanceContentGroupResponse getBalanceContentGroupResponse(Room room, BalanceOptions balanceOptions) {
        List<BalanceVote> firstOptionVotes = balanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, balanceOptions.getFistOption());
        List<BalanceVote> secondOptionVotes = balanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, balanceOptions.getSecondOption());

        return BalanceContentGroupResponse.of(balanceOptions, firstOptionVotes, secondOptionVotes);
    }

    private BalanceContentTotalResponse getBalanceContentTotalResponse(BalanceOptions balanceOptions) {
        Long firstOptionCount = balanceVoteRepository.countByBalanceOption(balanceOptions.getFistOption());
        Long secondOptionCount = balanceVoteRepository.countByBalanceOption(balanceOptions.getSecondOption());

        return BalanceContentTotalResponse.of(balanceOptions, firstOptionCount, secondOptionCount);
    }

    @Transactional(readOnly = true)
    public VoteFinishedResponse getAllVoteFinished(Long roomId, Long contentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(contentId);
        if (isRoundFinished(room, balanceContent)) {
            return VoteFinishedResponse.roundFinished();
        }
        return VoteFinishedResponse.allVoteFinished(isAllVoteFinished(room, balanceContent));
    }

    private boolean isRoundFinished(Room room, BalanceContent balanceContent) {
        RoomContent roomContent = roomContentRepository.getByRoomAndBalanceContent(room, balanceContent);
        LocalDateTime now = LocalDateTime.now(clock);
        return roomContent.isRoundOver(now, room.getCurrentRound());
    }

    private boolean isAllVoteFinished(Room room, BalanceContent balanceContent) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(balanceContent);
        Long voteCount = balanceVoteRepository.countByMemberRoomAndBalanceOptionIn(room, balanceOptions);
        List<Member> members = memberRepository.findAllByRoom(room);
        return voteCount == members.size();
    }
}
