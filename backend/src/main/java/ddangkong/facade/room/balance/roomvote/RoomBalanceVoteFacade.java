package ddangkong.facade.room.balance.roomvote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.BadRequestException;
import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;
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
        Room room = roomService.getRoom(roomId);
        BalanceContent balanceContent = balanceContentService.getBalanceContent(contentId);
        if (isVoteFinished(room, balanceContent)) {
            throw new BadRequestException("이미 종료된 라운드에는 투표할 수 없습니다.");
        }
        Member member = memberService.getRoomMember(request.memberId(), room);
        BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
        RoomBalanceVote roomBalanceVote = roomBalanceVoteService.createVote(member, balanceOptions, request.optionId());
        return new RoomBalanceVoteResponse(roomBalanceVote);
    }

    private boolean isVoteFinished(Room room, BalanceContent balanceContent) {
        List<Member> members = memberService.findRoomMembers(room);
        BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
        return roomContentService.isRoundFinished(room, balanceContent)
                || roomBalanceVoteService.isVoteFinished(members, balanceOptions);
    }

    @Transactional(readOnly = true)
    public RoomBalanceVoteResultResponse getAllVoteResult(Long roomId, Long balanceContentId) {
        Room room = roomService.getRoom(roomId);
        BalanceContent balanceContent = balanceContentService.getBalanceContent(balanceContentId);
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
        List<RoomBalanceVote> firstOptionVotes = roomBalanceVoteService
                .getVotesInRoomByOption(room, balanceOptions.getFirstOption());
        List<RoomBalanceVote> secondOptionVotes = roomBalanceVoteService
                .getVotesInRoomByOption(room, balanceOptions.getSecondOption());
        return ContentRoomBalanceVoteResponse.create(balanceOptions, firstOptionVotes, secondOptionVotes);
    }

    private ContentTotalBalanceVoteResponse getContentTotalBalanceVoteResponse(BalanceOptions balanceOptions) {
        long firstOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getFirstOption());
        long secondOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getSecondOption());
        return ContentTotalBalanceVoteResponse.create(balanceOptions, firstOptionVoteCount, secondOptionVoteCount);
    }

    @Transactional(readOnly = true)
    public VoteFinishedResponse getVoteFinished(Long roomId, Long contentId) {
        Room room = roomService.getRoom(roomId);
        BalanceContent balanceContent = balanceContentService.getBalanceContent(contentId);
        return new VoteFinishedResponse(isVoteFinished(room, balanceContent));
    }
}
