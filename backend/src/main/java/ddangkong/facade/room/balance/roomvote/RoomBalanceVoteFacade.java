package ddangkong.facade.room.balance.roomvote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.balance.vote.TotalBalanceVoteRepository;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomcontent.RoomContentRepository;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import ddangkong.exception.BadRequestException;
import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.ContentRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResultResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
import java.time.Clock;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomBalanceVoteFacade {

    private final BalanceContentRepository balanceContentRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    private final TotalBalanceVoteRepository totalBalanceVoteRepository;

    private final RoomRepository roomRepository;

    private final MemberRepository memberRepository;

    private final RoomContentRepository roomContentRepository;

    private final RoomBalanceVoteRepository roomBalanceVoteRepository;

    private final Clock clock;

    @Transactional
    public RoomBalanceVoteResponse createVote(RoomBalanceVoteRequest request, Long roomId, Long contentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(contentId);
        validateRoundFinished(room, balanceContent);
        Member member = getValidMember(request.memberId(), room);
        BalanceOption balanceOption = getValidOption(request.optionId(), balanceContent, member);

        RoomBalanceVote roomBalanceVote = roomBalanceVoteRepository.save(new RoomBalanceVote(member, balanceOption));
        return new RoomBalanceVoteResponse(roomBalanceVote);
    }

    private void validateRoundFinished(Room room, BalanceContent balanceContent) {
        if (isRoundFinished(room, balanceContent)) {
            throw new BadRequestException("이미 종료된 라운드에는 투표할 수 없습니다.");
        }
    }

    private BalanceOption getValidOption(Long optionId, BalanceContent balanceContent, Member member) {
        BalanceOption selectedOption = null;
        List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(balanceContent);
        for (BalanceOption balanceOption : balanceOptions) {
            validDuplicatedVote(optionId, member, balanceOption);
            if (balanceOption.isSameId(optionId)) {
                selectedOption = balanceOption;
            }
        }
        if (selectedOption == null) {
            throw new BadRequestException("해당 질문의 선택지가 존재하지 않습니다.");
        }
        return selectedOption;
    }

    private void validDuplicatedVote(Long optionId, Member member, BalanceOption balanceOption) {
        if (roomBalanceVoteRepository.existsByMemberAndBalanceOption(member, balanceOption)) {
            throw new BadRequestException("이미 투표한 선택지가 존재합니다. 투표하려는 선택지 : %d, 이미 투표한 선택지 : %d"
                    .formatted(optionId, balanceOption.getId()));
        }
    }

    private Member getValidMember(Long memberId, Room room) {
        return memberRepository.findByIdAndRoom(memberId, room)
                .orElseThrow(() -> new BadRequestException("해당 방의 멤버가 존재하지 않습니다."));
    }

    @Transactional(readOnly = true)
    public RoomBalanceVoteResultResponse getAllVoteResult(Long roomId, Long balanceContentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(balanceContentId);
        if (isRoundFinished(room, balanceContent)) {
            BalanceOptions balanceOptions = balanceOptionRepository.getBalanceOptionsByBalanceContent(balanceContent);
            // todo 기권 추가
            ContentRoomBalanceVoteResponse group = getContentRoomBalanceVoteResponse(room, balanceOptions);
            ContentTotalBalanceVoteResponse total = getContentTotalBalanceVoteResponse(balanceOptions);
            return new RoomBalanceVoteResultResponse(group, total);
        }
        throw new BadRequestException("투표가 끝나지 않아 투표 결과를 조회할 수 없습니다.");
    }

    private ContentRoomBalanceVoteResponse getContentRoomBalanceVoteResponse(Room room, BalanceOptions balanceOptions) {
        List<RoomBalanceVote> firstOptionVotes = roomBalanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, balanceOptions.getFistOption());
        List<RoomBalanceVote> secondOptionVotes = roomBalanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, balanceOptions.getSecondOption());

        return ContentRoomBalanceVoteResponse.create(balanceOptions, firstOptionVotes, secondOptionVotes);
    }

    private ContentTotalBalanceVoteResponse getContentTotalBalanceVoteResponse(BalanceOptions balanceOptions) {
        long firstOptionVoteCount = totalBalanceVoteRepository.countByBalanceOption(balanceOptions.getFistOption());
        long secondOptionVoteCount = totalBalanceVoteRepository.countByBalanceOption(balanceOptions.getSecondOption());

        return ContentTotalBalanceVoteResponse.create(balanceOptions, firstOptionVoteCount, secondOptionVoteCount);
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
        long voteCount = roomBalanceVoteRepository.countByMemberRoomAndBalanceOptionIn(room, balanceOptions);
        List<Member> members = memberRepository.findAllByRoom(room);
        return voteCount == members.size();
    }
}
