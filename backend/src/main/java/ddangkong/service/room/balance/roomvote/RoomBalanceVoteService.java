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
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomBalanceVoteService {

    private final RoomBalanceVoteRepository roomVoteRepository;

    @Transactional
    public RoomBalanceVote createVote(Member member, BalanceOptions balanceOptions, Long votedOptionId) {
        validDuplicatedVotes(member, balanceOptions);
        BalanceOption votedOption = balanceOptions.getOptionById(votedOptionId);
        try {
            return roomVoteRepository.save(new RoomBalanceVote(member, votedOption));
        } catch (DataIntegrityViolationException e) {
            throw new AlreadyVotedException(member.getNickname(), votedOption.getName());
        }
    }

    private void validDuplicatedVotes(Member member, BalanceOptions balanceOptions) {
        balanceOptions.getOptions()
                .forEach(balanceOption -> validDuplicatedVote(member, balanceOption));
    }

    private void validDuplicatedVote(Member member, BalanceOption balanceOption) {
        if (roomVoteRepository.existsByMemberAndBalanceOption(member, balanceOption)) {
            throw new AlreadyVotedException(member.getNickname(), balanceOption.getName());
        }
    }

    @Transactional(readOnly = true)
    public List<RoomBalanceVote> getVotesInRoom(RoomMembers roomMembers, BalanceOption balanceOption) {
        return roomVoteRepository.findByMemberInAndBalanceOption(roomMembers.getMembers(), balanceOption);
    }

    @Transactional(readOnly = true)
    public List<RoomBalanceVote> getVotesInRound(RoomMembers roomMembers, BalanceOptions balanceOptions) {
        return roomVoteRepository.findByMemberInAndBalanceOptionIn(
                roomMembers.getMembers(), balanceOptions.getOptions());
    }

    @Transactional(readOnly = true)
    public List<RoomBalanceVote> findRoomVotesByBalanceOptionsWithoutMember(List<BalanceOption> memberRoomVoteOptions,
                                                                            Room room,
                                                                            Member member) {
        return roomVoteRepository.findRoomBalanceVotesByBalanceOptionsAndRoomWithoutMember(
                memberRoomVoteOptions, room, member);
    }
}
