package ddangkong.service.room.balance.roomvote;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.BadRequestException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomBalanceVoteService {

    private final RoomBalanceVoteRepository roomVoteRepository;

    @Transactional
    public RoomBalanceVote createVote(Member member, BalanceOptions balanceOptions, Long votedOptionId) {
        for (BalanceOption option : balanceOptions.getOptions()) {
            validDuplicatedVote(member, option);
        }
        BalanceOption votedOption = balanceOptions.getOptionById(votedOptionId);
        return roomVoteRepository.save(new RoomBalanceVote(member, votedOption));
    }

    private void validDuplicatedVote(Member member, BalanceOption balanceOption) {
        if (roomVoteRepository.existsByMemberAndBalanceOption(member, balanceOption)) {
            throw new BadRequestException("이미 투표했습니다. nickname: %s, option name: %s"
                    .formatted(member.getNickname(), balanceOption.getName()));
        }
    }

    @Transactional(readOnly = true)
    public boolean isVoteFinished(List<Member> roomMembers, BalanceOptions balanceOptions) {
        long voteCount = roomVoteRepository.countByMemberInAndBalanceOptionIn(roomMembers, balanceOptions.getOptions());
        if (voteCount > roomMembers.size()) {
            log.error("[Concurrency Error] 투표한 인원 수가 방 인원 수보다 많습니다. 투표한 인원 수: {}, 방 인원 수: {}",
                    voteCount, roomMembers.size());
        }
        return voteCount >= roomMembers.size();
    }

    @Transactional(readOnly = true)
    public List<RoomBalanceVote> getVotesInRoomByOption(Room room, BalanceOption balanceOption) {
        return roomVoteRepository.findByMemberRoomAndBalanceOption(room, balanceOption);
    }

    @Transactional(readOnly = true)
    public List<RoomBalanceVote> getVotesInRoomByContent(Room room, BalanceContent balanceContent) {
        return roomVoteRepository.findByMemberRoomAndBalanceOptionBalanceContent(room, balanceContent);
    }
}
