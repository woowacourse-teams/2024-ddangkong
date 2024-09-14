package ddangkong.facade.room;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.facade.room.dto.InitialRoomResponse;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoomStatusResponse;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import ddangkong.facade.room.member.dto.MemberResponse;
import ddangkong.service.balance.content.BalanceContentService;
import ddangkong.service.room.RoomService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import ddangkong.service.room.balance.roomvote.RoomBalanceVoteMigrator;
import ddangkong.service.room.member.MemberService;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomFacade {

    private final RoomService roomService;

    private final MemberService memberService;

    private final RoomContentService roomContentService;

    private final BalanceContentService balanceContentService;

    private final RoomBalanceVoteMigrator roomBalanceVoteMigrator;

    @Transactional
    public RoomJoinResponse createRoom(String nickname) {
        Room room = roomService.createRoom();
        Member member = memberService.saveMasterMember(nickname, room);
        return new RoomJoinResponse(room.getId(), room.getUuid(), new MemberResponse(member));
    }

    @Transactional
    public RoomJoinResponse joinRoom(String nickname, String uuid) {
        Room room = roomService.getRoomWithLock(uuid);
        Member member = memberService.saveCommonMember(nickname, room);
        return new RoomJoinResponse(room.getId(), room.getUuid(), new MemberResponse(member));
    }

    @Transactional
    public void leaveRoom(Long roomId, Long memberId) {
        Room room = roomService.getRoom(roomId);
        RoomMembers roomMembers = memberService.findRoomMembers(room);
        Member member = roomMembers.getMember(memberId);

        roomBalanceVoteMigrator.migrateToTotalVote(member);
        memberService.delete(member);
        if (roomMembers.isExistOnlyOneMember()) {
            roomContentService.deleteRoomContents(room);
            roomService.delete(room);
            return;
        }
        if (member.isMaster()) {
            memberService.promoteOtherMember(roomMembers);
        }
    }

    @Transactional(readOnly = true)
    public RoomInfoResponse getRoomInfo(Long roomId) {
        Room room = roomService.getRoom(roomId);
        RoomMembers roomMembers = memberService.findRoomMembers(room);
        return RoomInfoResponse.create(roomMembers, room);
    }

    @Transactional
    public void startGame(Long roomId) {
        Room room = roomService.startGame(roomId);
        int pickCount = room.getTotalRound();
        List<BalanceContent> balanceContents = balanceContentService.pickBalanceContents(room.getCategory(), pickCount);
        roomContentService.prepareRoomContents(room, balanceContents);
    }

    @Transactional
    public void updateRoomSetting(Long roomId, RoomSettingRequest request) {
        roomService.updateRoomSetting(roomId, request.toRoomSetting());
    }

    @Transactional
    public void moveToNextRound(Long roomId) {
        Room room = roomService.progressNextRound(roomId);
        if (room.isGameProgress()) {
            roomContentService.progressNextRoomContent(room);
        }
    }

    @Transactional(readOnly = true)
    public RoundFinishedResponse getRoundFinished(Long roomId, int round) {
        Room room = roomService.getRoom(roomId);
        Member master = memberService.getMaster(room);
        return new RoundFinishedResponse(room.isRoundFinished(round), room.isAllRoundFinished(), master);
    }

    @Transactional
    public void resetRoom(Long roomId) {
        Room room = roomService.reset(roomId);
        roomContentService.deleteRoomContents(room);
        roomBalanceVoteMigrator.migrateToTotalVote(room);
    }

    @Transactional(readOnly = true)
    public List<Long> findRoomIdsBefore(LocalDateTime modifiedAt) {
        return roomService.findRoomsBefore(modifiedAt)
                .stream()
                .map(Room::getId)
                .toList();
    }

    @Transactional
    public void deleteRoom(Long roomId) {
        Room room = roomService.getRoom(roomId);

        List<RoomBalanceVote> migratedRoomBalanceVotes = roomBalanceVoteMigrator.migrateToTotalVote(room);
        roomContentService.deleteRoomContents(room);
        memberService.deleteMember(room);
        roomService.delete(room);
    }

    @Transactional
    public void migrateExpiredRoom(LocalDateTime modifiedAt) {
        List<RoomBalanceVote> migratedRoomBalanceVotes = new ArrayList<>();
        List<RoomContent> migratedRoomContents = new ArrayList<>();
        List<Member> migratedRoomMembers = new ArrayList<>();
        List<Room> migratedRooms = new ArrayList<>();

        for (Room expiredRoom : roomService.findRoomsBefore(modifiedAt)) {
            migratedRooms.add(expiredRoom);
            migrate(expiredRoom, migratedRoomBalanceVotes, migratedRoomContents, migratedRoomMembers);
        }
        roomBalanceVoteMigrator.deleteRoomVotes(migratedRoomBalanceVotes);
        roomContentService.deleteRoomContents(migratedRoomContents);
        memberService.deleteMembers(migratedRoomMembers);
        roomService.deleteRooms(migratedRooms);
    }

    private void migrate(Room room,
                         List<RoomBalanceVote> migratedRoomBalanceVotes,
                         List<RoomContent> migratedRoomContents,
                         List<Member> migratedRoomMembers) {
        migratedRoomBalanceVotes.addAll(roomBalanceVoteMigrator.migrateToTotalVote(room));
        migratedRoomContents.addAll(roomContentService.findRoomContents(room));
        migratedRoomMembers.addAll(memberService.findRoomMembers(room).getMembers());
    }

    @Transactional(readOnly = true)
    public RoomStatusResponse getRoomStatus(String uuid) {
        Optional<Room> roomOptional = roomService.getRoom(uuid);
        if (roomOptional.isEmpty()) {
            return new RoomStatusResponse(false);
        }
        Room room = roomOptional.get();
        return new RoomStatusResponse(room.isGameReady());
    }

    @Transactional(readOnly = true)
    public InitialRoomResponse isInitialRoom(Long roomId) {
        Room room = roomService.getRoom(roomId);
        Member master = memberService.getMaster(room);
        return new InitialRoomResponse(room.isInitialRoom(), master);
    }
}
