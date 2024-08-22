package ddangkong.service.room.balance.roomvote;

import ddangkong.domain.balance.vote.TotalBalanceVote;
import ddangkong.domain.balance.vote.TotalBalanceVoteRepository;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomBalanceVoteMigrator {

    private final TotalBalanceVoteRepository totalBalanceVoteRepository;

    private final RoomBalanceVoteRepository roomBalanceVoteRepository;

    @Transactional
    public void migrateToTotalVote(Room room) {
        List<RoomBalanceVote> deletedRoomVotes = deleteRoomVotes(room);
        saveTotalVotes(deletedRoomVotes);
        log.info("방 밸런스 게임 투표를 전체 밸런스 게임 투표로 마이그레이션 완료했습니다. roomId: {}, vote 개수: {}",
                room.getId(), deletedRoomVotes.size());
    }

    @Transactional
    public void migrateToTotalVote(Member member) {
        List<RoomBalanceVote> deletedRoomVotes = deleteMemberVotes(member);
        saveTotalVotes(deletedRoomVotes);
        log.info("멤버의 밸런스 게임 투표를 전체 밸런스 게임 투표로 마이그레이션 완료했습니다. memberId: {}, vote 개수: {}",
                member.getId(), deletedRoomVotes.size());
    }

    private List<RoomBalanceVote> deleteRoomVotes(Room room) {
        List<RoomBalanceVote> roomBalanceVotes = roomBalanceVoteRepository.findByMemberRoom(room);
        roomBalanceVoteRepository.deleteAllInBatch(roomBalanceVotes);
        return roomBalanceVotes;
    }

    private List<RoomBalanceVote> deleteMemberVotes(Member member) {
        List<RoomBalanceVote> roomBalanceVotes = roomBalanceVoteRepository.findByMember(member);
        roomBalanceVoteRepository.deleteAllInBatch(roomBalanceVotes);
        return roomBalanceVotes;
    }

    private void saveTotalVotes(List<RoomBalanceVote> deletedRoomVotes) {
        List<TotalBalanceVote> totalBalanceVotes = deletedRoomVotes.stream()
                .map(RoomBalanceVote::getBalanceOption)
                .map(TotalBalanceVote::new)
                .toList();
        totalBalanceVoteRepository.saveAll(totalBalanceVotes);
    }
}
