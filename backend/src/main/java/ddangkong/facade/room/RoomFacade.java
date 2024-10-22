package ddangkong.facade.room;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.exception.room.NotFinishedRoomException;
import ddangkong.facade.room.dto.InitialRoomResponse;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomMemberResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoomStatusResponse;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import ddangkong.facade.room.member.dto.MemberResponse;
import ddangkong.service.balance.content.BalanceContentService;
import ddangkong.service.room.RoomService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import ddangkong.service.room.balance.roomvote.RoomMigrator;
import ddangkong.service.room.member.MemberService;
import java.time.LocalDateTime;
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

    private final RoomMigrator roomMigrator;

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

    @Transactional(readOnly = true)
    public RoomMemberResponse getRoomMemberInfo(Long memberId) {
        Member member = memberService.getMemberById(memberId);
        Room room = member.getRoom();
        return new RoomMemberResponse(room.getId(), room.getUuid(), new MemberResponse(member));
    }

    @Transactional
    public void leaveRoom(Long roomId, Long memberId) {
        Room room = roomService.getRoom(roomId);
        RoomMembers roomMembers = memberService.findRoomMembers(room);
        Member member = roomMembers.getMember(memberId);

        roomMigrator.migrateMemberVotes(member);
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
        Room room = roomService.getRoom(roomId);

        if (!room.isGameFinish()) {
            throw new NotFinishedRoomException();
        }

        room.reset();
        roomContentService.deleteRoomContents(room);
        roomMigrator.migrateRoom(room);
    }

    @Transactional
    public void migrateExpiredRooms(LocalDateTime modifiedAt) {
        List<Room> expiredRooms = roomService.findRoomsBefore(modifiedAt);
        roomMigrator.migrateRooms(expiredRooms);
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
