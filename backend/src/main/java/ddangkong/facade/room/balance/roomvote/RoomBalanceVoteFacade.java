package ddangkong.facade.room.balance.roomvote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.exception.BadRequestException;
import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.context.VoteContext;
import ddangkong.facade.room.balance.roomvote.dto.ContentRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResultResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
import ddangkong.service.balance.content.BalanceContentService;
import ddangkong.service.balance.option.BalanceOptionService;
import ddangkong.service.balance.vote.TotalBalanceVoteService;
import ddangkong.service.room.RoomService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import ddangkong.service.room.balance.roomvote.RoomBalanceVoteService;
import ddangkong.service.room.member.MemberService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomBalanceVoteFacade {

    private final BalanceContentService balanceContentService;

    private final BalanceOptionService balanceOptionService;

    private final TotalBalanceVoteService totalBalanceVoteService;

    private final RoomService roomService;

    private final MemberService memberService;

    private final RoomContentService roomContentService;

    private final RoomBalanceVoteService roomBalanceVoteService;

    @Transactional
    public RoomBalanceVoteResponse createVote(RoomBalanceVoteRequest request, Long roomId, Long contentId) {
        VoteContext voteContext = getVoteContext(roomId, contentId);
        if (voteContext.isVoteFinished()) {
            throw new BadRequestException("이미 투표가 종료되었습니다.");
        }
        Member member = voteContext.getRoomMembers().getMember(request.memberId());
        RoomBalanceVote roomBalanceVote = roomBalanceVoteService.createVote(member, voteContext.getBalanceOptions(),
                request.optionId());
        return new RoomBalanceVoteResponse(roomBalanceVote);
    }

    @Transactional(readOnly = true)
    public RoomBalanceVoteResultResponse getAllVoteResult(Long roomId, Long contentId) {
        VoteContext voteContext = getVoteContext(roomId, contentId);
        if (voteContext.isVoteNotFinished()) {
            throw new BadRequestException("투표가 끝나지 않아 투표 결과를 조회할 수 없습니다.");
        }
        ContentRoomBalanceVoteResponse group = getContentRoomBalanceVoteResponse(voteContext.getRoomMembers(),
                voteContext.getBalanceOptions());
        ContentTotalBalanceVoteResponse total = getContentTotalBalanceVoteResponse(voteContext.getBalanceOptions());
        return new RoomBalanceVoteResultResponse(group, total);
    }

    private ContentRoomBalanceVoteResponse getContentRoomBalanceVoteResponse(RoomMembers roomMembers,
                                                                             BalanceOptions balanceOptions) {
        List<RoomBalanceVote> firstOptionVotes = roomBalanceVoteService
                .getVotesInRoom(roomMembers, balanceOptions.getFirstOption());
        List<RoomBalanceVote> secondOptionVotes = roomBalanceVoteService
                .getVotesInRoom(roomMembers, balanceOptions.getSecondOption());
        // todo 기권 추가
        return ContentRoomBalanceVoteResponse.create(balanceOptions, firstOptionVotes, secondOptionVotes);
    }

    private ContentTotalBalanceVoteResponse getContentTotalBalanceVoteResponse(BalanceOptions balanceOptions) {
        long firstOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getFirstOption());
        long secondOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getSecondOption());
        return ContentTotalBalanceVoteResponse.create(balanceOptions, firstOptionVoteCount, secondOptionVoteCount);
    }

    @Transactional(readOnly = true)
    public VoteFinishedResponse getVoteFinished(Long roomId, Long contentId) {
        VoteContext voteContext = getVoteContext(roomId, contentId);
        Member master = voteContext.getRoomMembers().getMaster();
        return new VoteFinishedResponse(voteContext.isVoteFinished(), master);
    }

    private VoteContext getVoteContext(Long roomId, Long contentId) {
        Room room = roomService.getRoom(roomId);
        BalanceContent balanceContent = balanceContentService.getBalanceContent(contentId);
        RoomMembers roomMembers = memberService.findRoomMembers(room);
        BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
        boolean roundFinished = roomContentService.isRoundFinished(room, balanceContent);
        boolean voteFinished = roomBalanceVoteService.isVoteFinished(roomMembers, balanceOptions);

        return new VoteContext(roomMembers, balanceOptions, roundFinished || voteFinished);
    }
}
