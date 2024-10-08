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
public class RoomMigrator {

    private final TotalBalanceVoteRepository totalBalanceVoteRepository;

    private final RoomBalanceVoteRepository roomBalanceVoteRepository;

    private final RoomRepository roomRepository;

    private final MemberRepository memberRepository;

    private final RoomContentRepository roomContentRepository;

    @Transactional
    public void migrateRooms(List<Room> rooms) {
        List<RoomBalanceVote> targetRoomBalanceVotes = new ArrayList<>();
        List<RoomContent> targetRoomContents = new ArrayList<>();
        List<Member> targetRoomMembers = new ArrayList<>();
        initTargets(rooms, targetRoomBalanceVotes, targetRoomContents, targetRoomMembers);

        List<Long> migratedRoomIds = migrate(rooms, targetRoomBalanceVotes, targetRoomContents,
                targetRoomMembers);
        log.info("방 밸런스 게임 투표를 전체 밸런스 게임 투표로 마이그레이션 완료했습니다. roomId: {}, vote 개수: {}",
                migratedRoomIds, targetRoomBalanceVotes.size());
    }

    private void initTargets(List<Room> targetRooms, List<RoomBalanceVote> targetRoomBalanceVotes,
                             List<RoomContent> targetRoomContents, List<Member> targetRoomMembers) {
        for (Room targetRoom : targetRooms) {
            targetRoomBalanceVotes.addAll(roomBalanceVoteRepository.findByMemberRoom(targetRoom));
            targetRoomContents.addAll(roomContentRepository.findAllByRoom(targetRoom));
            targetRoomMembers.addAll(memberRepository.findAllByRoom(targetRoom));
        }
    }

    private List<Long> migrate(List<Room> expiredRooms,
                               List<RoomBalanceVote> targetRoomBalanceVotes,
                               List<RoomContent> targetRoomContents,
                               List<Member> targetRoomMembers) {
        saveTotalVotesByRoomVotes(targetRoomBalanceVotes);
        roomBalanceVoteRepository.deleteAllInBatch(targetRoomBalanceVotes);
        roomContentRepository.deleteAllInBatch(targetRoomContents);
        memberRepository.deleteAllInBatch(targetRoomMembers);
        roomRepository.deleteAllInBatch(expiredRooms);

        List<Long> migratedRoomIds = expiredRooms.stream()
                .map(Room::getId)
                .toList();
        return migratedRoomIds;
    }

    @Transactional
    public void migrateMemberVotes(Member member) {
        List<RoomBalanceVote> deletedRoomVotes = deleteMemberVotes(member);
        saveTotalVotesByRoomVotes(deletedRoomVotes);

        log.info("멤버의 밸런스 게임 투표를 전체 밸런스 게임 투표로 마이그레이션 완료했습니다. memberId: {}, vote 개수: {}",
                member.getId(), deletedRoomVotes.size());
    }

    private List<RoomBalanceVote> deleteMemberVotes(Member member) {
        List<RoomBalanceVote> roomBalanceVotes = roomBalanceVoteRepository.findByMember(member);
        roomBalanceVoteRepository.deleteAllInBatch(roomBalanceVotes);
        return roomBalanceVotes;
    }

    @Transactional
    public List<RoomBalanceVote> migrateRoom(Room room) {
        List<RoomBalanceVote> targetRoomVotes = roomBalanceVoteRepository.findByMemberRoom(room);
        saveTotalVotesByRoomVotes(targetRoomVotes);
        roomBalanceVoteRepository.deleteAllInBatch(targetRoomVotes);
        log.info("방 밸런스 게임 투표를 전체 밸런스 게임 투표로 마이그레이션 완료했습니다. roomId: {}", room);

        return targetRoomVotes;
    }

    private void saveTotalVotesByRoomVotes(List<RoomBalanceVote> targetRoomBalanceVotes) {
        List<TotalBalanceVote> totalBalanceVotes = targetRoomBalanceVotes.stream()
                .map(RoomBalanceVote::getBalanceOption)
                .map(TotalBalanceVote::new)
                .toList();
        totalBalanceVoteRepository.saveAll(totalBalanceVotes);
    }
}
