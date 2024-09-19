package ddangkong.service.room.balance.roomvote;

import ddangkong.domain.balance.vote.TotalBalanceVote;
import ddangkong.domain.balance.vote.TotalBalanceVoteRepository;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomcontent.RoomContentRepository;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ExpiredRoomMigrator {

    private final TotalBalanceVoteRepository totalBalanceVoteRepository;

    private final RoomBalanceVoteRepository roomBalanceVoteRepository;

    private final RoomRepository roomRepository;

    private final MemberRepository memberRepository;

    private final RoomContentRepository roomContentRepository;

    @Transactional
    public void migrateExpiredRooms(List<Room> expiredRooms) {
        List<RoomBalanceVote> migratedRoomBalanceVotes = new ArrayList<>();
        List<RoomContent> migratedRoomContents = new ArrayList<>();
        List<Member> migratedRoomMembers = new ArrayList<>();

        for (Room expiredRoom : expiredRooms) {
            migrate(expiredRoom, migratedRoomBalanceVotes, migratedRoomContents, migratedRoomMembers);
        }
        roomBalanceVoteRepository.deleteAllInBatch(migratedRoomBalanceVotes);
        roomContentRepository.deleteAllInBatch(migratedRoomContents);
        memberRepository.deleteAllInBatch(migratedRoomMembers);
        roomRepository.deleteAllInBatch(expiredRooms);

        List<Long> migratedRoomIds = expiredRooms.stream()
                .map(Room::getId)
                .toList();
        log.info("방 밸런스 게임 투표를 전체 밸런스 게임 투표로 마이그레이션 완료했습니다. roomId: {}, vote 개수: {}",
                migratedRoomIds, migratedRoomBalanceVotes.size());
    }

    private void migrate(Room room,
                         List<RoomBalanceVote> migratedRoomBalanceVotes,
                         List<RoomContent> migratedRoomContents,
                         List<Member> migratedRoomMembers) {
        migratedRoomBalanceVotes.addAll(migrateRoomVoteToTotalVote(room));
        migratedRoomContents.addAll(roomContentRepository.findAllByRoom(room));
        migratedRoomMembers.addAll(memberRepository.findAllByRoom(room));
    }

    @Transactional
    public List<RoomBalanceVote> migrateRoomVoteToTotalVote(Room room) {
        List<RoomBalanceVote> migratedRoomBalanceVotes = roomBalanceVoteRepository.findByMemberRoom(room);
        saveTotalVotes(migratedRoomBalanceVotes);

        return migratedRoomBalanceVotes;
    }

    @Transactional
    public void migrateRoomVoteToTotalVote(Member member) {
        List<RoomBalanceVote> deletedRoomVotes = deleteMemberVotes(member);
        saveTotalVotes(deletedRoomVotes);
        log.info("멤버의 밸런스 게임 투표를 전체 밸런스 게임 투표로 마이그레이션 완료했습니다. memberId: {}, vote 개수: {}",
                member.getId(), deletedRoomVotes.size());
    }

    private void saveTotalVotes(List<RoomBalanceVote> deletedRoomVotes) {
        List<TotalBalanceVote> totalBalanceVotes = deletedRoomVotes.stream()
                .map(RoomBalanceVote::getBalanceOption)
                .map(TotalBalanceVote::new)
                .toList();
        totalBalanceVoteRepository.saveAll(totalBalanceVotes);
    }

    @Transactional
    public void deleteRoomVotes(List<RoomBalanceVote> roomBalanceVotes) {
        roomBalanceVoteRepository.deleteAllInBatch(roomBalanceVotes);
    }

    private List<RoomBalanceVote> deleteMemberVotes(Member member) {
        List<RoomBalanceVote> roomBalanceVotes = roomBalanceVoteRepository.findByMember(member);
        roomBalanceVoteRepository.deleteAllInBatch(roomBalanceVotes);
        return roomBalanceVotes;
    }
}
