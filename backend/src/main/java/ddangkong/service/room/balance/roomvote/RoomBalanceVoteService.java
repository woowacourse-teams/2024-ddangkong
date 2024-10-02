package ddangkong.service.room.balance.roomvote;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.exception.room.balance.roomvote.AlreadyVotedException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomBalanceVoteService {

    private final RoomBalanceVoteRepository roomVoteRepository;

    @Transactional
    public RoomBalanceVote createVote(Member member, BalanceOptions balanceOptions, Long votedOptionId) {
        BalanceOption votedOption = balanceOptions.getOptionById(votedOptionId);
        try {
            return roomVoteRepository.save(new RoomBalanceVote(member, votedOption));
        } catch (DataIntegrityViolationException e) {
            throw new AlreadyVotedException(member.getNickname(), votedOption.getName());
        }
    }

    @Transactional(readOnly = true)
    public boolean isAllMemberVoted(RoomMembers roomMembers, BalanceOptions balanceOptions) {
        long voteCount = roomVoteRepository.countByMemberInAndBalanceOptionIn(roomMembers.getMembers(),
                balanceOptions.getOptions());
        if (voteCount > roomMembers.size()) {
            log.error("[Concurrency Error] 투표한 인원 수가 방 인원 수보다 많습니다. 투표한 인원 수: {}, 방 인원 수: {}",
                    voteCount, roomMembers.size());
        }
        return voteCount >= roomMembers.size();
    }

    @Transactional(readOnly = true)
    public List<RoomBalanceVote> getVotesInRoom(RoomMembers roomMembers, BalanceOption balanceOption) {
        return roomVoteRepository.findByMemberInAndBalanceOption(roomMembers.getMembers(), balanceOption);
    }

    public List<RoomBalanceVote> findRoomVotesByBalanceOptionsWithoutMember(List<BalanceOption> memberRoomVoteOptions,
                                                                            Room room,
                                                                            Member member) {
        return roomVoteRepository.findRoomBalanceVotesByBalanceOptionsAndRoomWithoutMember(memberRoomVoteOptions, room,
                member);
    }

    @Transactional
    public void deleteRoomVotes(List<RoomBalanceVote> roomBalanceVotes) {
        roomVoteRepository.deleteAllInBatch(roomBalanceVotes);
    }
}
