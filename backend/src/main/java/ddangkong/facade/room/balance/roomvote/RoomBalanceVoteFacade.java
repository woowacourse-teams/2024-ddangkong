package ddangkong.facade.room.balance.roomvote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.exception.room.balance.roomvote.CanNotCheckMatchingPercentException;
import ddangkong.exception.room.balance.roomvote.VoteFinishedException;
import ddangkong.exception.room.balance.roomvote.VoteNotFinishedException;
import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;
import ddangkong.domain.room.balance.roomvote.VotingStatus;
import ddangkong.facade.room.balance.roomvote.dto.ContentRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResultResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomMembersVoteMatchingResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
import ddangkong.service.balance.content.BalanceContentService;
import ddangkong.service.balance.option.BalanceOptionService;
import ddangkong.service.balance.vote.TotalBalanceVoteService;
import ddangkong.service.room.RoomService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import ddangkong.service.room.balance.roomvote.RoomBalanceVoteService;
import ddangkong.service.room.member.MemberService;
import ddangkong.util.PercentageCalculator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;
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
        VotingStatus votingStatus = getVotingStatus(roomId, contentId);
        if (votingStatus.isVoteFinished()) {
            throw new VoteFinishedException();
        }
        Member member = votingStatus.getMember(request.memberId());
        RoomBalanceVote roomBalanceVote = roomBalanceVoteService.createVote(member, votingStatus.getBalanceOptions(),
                request.optionId());
        return new RoomBalanceVoteResponse(roomBalanceVote);
    }

    @Transactional(readOnly = true)
    public RoomBalanceVoteResultResponse getAllVoteResult(Long roomId, Long contentId) {
        VotingStatus votingStatus = getVotingStatus(roomId, contentId);
        if (votingStatus.isVoteNotFinished()) {
            throw new VoteNotFinishedException();
        }
        ContentRoomBalanceVoteResponse group = getContentRoomBalanceVoteResponse(votingStatus.getRoomMembers(),
                votingStatus.getBalanceOptions());
        ContentTotalBalanceVoteResponse total = getContentTotalBalanceVoteResponse(votingStatus.getBalanceOptions());
        return new RoomBalanceVoteResultResponse(group, total);
    }

    private ContentRoomBalanceVoteResponse getContentRoomBalanceVoteResponse(RoomMembers roomMembers,
                                                                             BalanceOptions balanceOptions) {
        List<RoomBalanceVote> firstOptionVotes = roomBalanceVoteService
                .getVotesInRoom(roomMembers, balanceOptions.getFirstOption());
        List<RoomBalanceVote> secondOptionVotes = roomBalanceVoteService
                .getVotesInRoom(roomMembers, balanceOptions.getSecondOption());
        List<Member> giveUpMembers = getGiveUpVoteMemberResponse(roomMembers,
                getVoteMembers(firstOptionVotes, secondOptionVotes));
        return ContentRoomBalanceVoteResponse.create(balanceOptions, firstOptionVotes, secondOptionVotes,
                giveUpMembers);
    }

    private List<Member> getGiveUpVoteMemberResponse(RoomMembers roomMembers, List<Member> voteMembers) {
        return roomMembers.getMembers()
                .stream()
                .filter(roomMember -> !voteMembers.contains(roomMember))
                .toList();
    }

    private List<Member> getVoteMembers(List<RoomBalanceVote> firstOptionVotes,
                                        List<RoomBalanceVote> secondOptionVotes) {
        return Stream.concat(firstOptionVotes.stream(), secondOptionVotes.stream())
                .map(RoomBalanceVote::getMember)
                .toList();
    }

    private ContentTotalBalanceVoteResponse getContentTotalBalanceVoteResponse(BalanceOptions balanceOptions) {
        long firstOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getFirstOption());
        long secondOptionVoteCount = totalBalanceVoteService.getVoteCount(balanceOptions.getSecondOption());
        return ContentTotalBalanceVoteResponse.create(balanceOptions, firstOptionVoteCount, secondOptionVoteCount);
    }

    @Transactional(readOnly = true)
    public VoteFinishedResponse getVoteFinished(Long roomId, Long contentId) {
        VotingStatus votingStatus = getVotingStatus(roomId, contentId);
        return new VoteFinishedResponse(votingStatus);
    }

    private VotingStatus getVotingStatus(Long roomId, Long contentId) {
        Room room = roomService.getRoom(roomId);
        BalanceContent balanceContent = balanceContentService.getBalanceContent(contentId);
        RoomMembers roomMembers = memberService.findRoomMembers(room);
        BalanceOptions balanceOptions = balanceOptionService.getBalanceOptions(balanceContent);
        int voteCount = roomBalanceVoteService.countVotesInRound(roomMembers, balanceOptions);

        boolean isOverVoteDeadline = roomContentService.isOverVoteDeadline(room, balanceContent);
        boolean isAllMemberVoted = voteCount >= roomMembers.size();

        return new VotingStatus(roomMembers, balanceOptions, voteCount, isOverVoteDeadline || isAllMemberVoted);
    }

    @Transactional(readOnly = true)
    public RoomMembersVoteMatchingResponse getRoomMembersVoteMatching(Long roomId, Long memberId) {
        Room room = roomService.getRoom(roomId);
        if (!room.isAllRoundFinished()) {
            throw new CanNotCheckMatchingPercentException();
        }

        Member member = memberService.getRoomMember(memberId, room);
        Map<Member, Long> membersVoteMatchingCount = getRoomMembersVoteMatchingCountWithoutSelf(room, member);

        return getRoomMembersVoteMatchingPercent(membersVoteMatchingCount, room, member);
    }

    private Map<Member, Long> getRoomMembersVoteMatchingCountWithoutSelf(Room room, Member member) {
        List<BalanceOption> memberRoomVoteOptions = balanceOptionService.findMemberRoomBalanceVoteOptions(member);
        List<RoomBalanceVote> roomBalanceVotes = roomBalanceVoteService.findRoomVotesByBalanceOptionsWithoutMember(
                memberRoomVoteOptions, room, member);

        Map<Member, Long> membersVoteMatchingCount = roomBalanceVotes.stream()
                .map(RoomBalanceVote::getMember)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        return membersVoteMatchingCount;
    }

    private RoomMembersVoteMatchingResponse getRoomMembersVoteMatchingPercent(Map<Member, Long> membersAndMatchingCount,
                                                                              Room room,
                                                                              Member member) {
        Map<Member, Long> membersVoteMatchingPercent = new HashMap<>();
        for (Member roomMember : memberService.findRoomMembers(room).getMembers()) {
            if (roomMember.equals(member)) {
                continue;
            }

            long matchingCount = membersAndMatchingCount.getOrDefault(roomMember, 0L);
            long matchingPercent = PercentageCalculator.calculate(matchingCount, room.getTotalRound());
            membersVoteMatchingPercent.put(roomMember, matchingPercent);
        }
        return RoomMembersVoteMatchingResponse.create(membersVoteMatchingPercent);
    }
}
