package ddangkong.facade.room.balance.roomvote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.BadRequestException;
import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.ContentRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResultResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
import ddangkong.service.balance.option.BalanceOptionService;
import ddangkong.service.balance.vote.TotalBalanceVoteService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import ddangkong.service.room.member.MemberService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomBalanceVoteFacade {

    private final BalanceContentRepository balanceContentRepository;

    private final BalanceOptionService balanceOptionService;

    private final TotalBalanceVoteService totalBalanceVoteService;

    private final RoomRepository roomRepository;

    private final MemberService memberService;

    private final RoomContentService roomContentService;

    private final RoomBalanceVoteRepository roomBalanceVoteRepository;

    @Transactional
    public RoomBalanceVoteResponse createVote(RoomBalanceVoteRequest request, Long roomId, Long contentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(contentId);
        validateRoundFinished(room, balanceContent);
        Member member = memberService.getRoomMember(request.memberId(), room);
        BalanceOption balanceOption = getValidOption(request.optionId(), balanceContent, member);

        RoomBalanceVote roomBalanceVote = roomBalanceVoteRepository.save(new RoomBalanceVote(member, balanceOption));
        return new RoomBalanceVoteResponse(roomBalanceVote);
    }

    private void validateRoundFinished(Room room, BalanceContent balanceContent) {
        if (isVoteFinished(room, balanceContent)) {
            throw new BadRequestException("이미 종료된 라운드에는 투표할 수 없습니다.");
        }
    }

    private BalanceOption getValidOption(Long optionId, BalanceContent balanceContent, Member member) {
        BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
        for (BalanceOption option : balanceOptions.getOptions()) {
            validDuplicatedVote(member, option);
        }
        return balanceOptions.getOptionById(optionId);
    }

    private void validDuplicatedVote(Member member, BalanceOption balanceOption) {
        if (roomBalanceVoteRepository.existsByMemberAndBalanceOption(member, balanceOption)) {
            throw new BadRequestException("이미 투표했습니다. nickname: %s, option name: %s"
                    .formatted(member.getNickname(), balanceOption.getName()));
        }
    }

    @Transactional(readOnly = true)
    public RoomBalanceVoteResultResponse getAllVoteResult(Long roomId, Long balanceContentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(balanceContentId);
        if (isVoteFinished(room, balanceContent)) {
            BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
            // todo 기권 추가
            ContentRoomBalanceVoteResponse group = getContentRoomBalanceVoteResponse(room, balanceOptions);
            ContentTotalBalanceVoteResponse total = getContentTotalBalanceVoteResponse(balanceOptions);
            return new RoomBalanceVoteResultResponse(group, total);
        }
        throw new BadRequestException("투표가 끝나지 않아 투표 결과를 조회할 수 없습니다.");
    }

    private ContentRoomBalanceVoteResponse getContentRoomBalanceVoteResponse(Room room, BalanceOptions balanceOptions) {
        List<RoomBalanceVote> firstOptionVotes = roomBalanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, balanceOptions.getFirstOption());
        List<RoomBalanceVote> secondOptionVotes = roomBalanceVoteRepository
                .findByMemberRoomAndBalanceOption(room, balanceOptions.getSecondOption());
        return ContentRoomBalanceVoteResponse.create(balanceOptions, firstOptionVotes, secondOptionVotes);
    }

    private ContentTotalBalanceVoteResponse getContentTotalBalanceVoteResponse(BalanceOptions balanceOptions) {
        long firstOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getFirstOption());
        long secondOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getSecondOption());

        return ContentTotalBalanceVoteResponse.create(balanceOptions, firstOptionVoteCount, secondOptionVoteCount);
    }

    @Transactional(readOnly = true)
    public VoteFinishedResponse getAllVoteFinished(Long roomId, Long contentId) {
        Room room = roomRepository.getById(roomId);
        BalanceContent balanceContent = balanceContentRepository.getById(contentId);
        return VoteFinishedResponse.voteFinished(isVoteFinished(room, balanceContent));
    }

    private boolean isVoteFinished(Room room, BalanceContent balanceContent) {
        return roomContentService.isRoundFinished(room, balanceContent) || isAllVoteFinished(room, balanceContent);
    }

    private boolean isAllVoteFinished(Room room, BalanceContent balanceContent) {
        BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
        long voteCount = roomBalanceVoteRepository.countByMemberRoomAndBalanceOptionIn(room,
                balanceOptions.getOptions());
        List<Member> members = memberService.findRoomMembers(room);
        return voteCount == members.size();
    }
}
