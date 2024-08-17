package ddangkong.facade.room;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import ddangkong.facade.room.member.dto.MemberResponse;
import ddangkong.service.balance.content.BalanceContentService;
import ddangkong.service.room.RoomService;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import ddangkong.service.room.balance.roomvote.RoomBalanceVoteMigrator;
import ddangkong.service.room.member.MemberService;
import java.util.List;
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
        return new RoomJoinResponse(room.getId(), new MemberResponse(member));
    }

    @Transactional
    public RoomJoinResponse joinRoom(String nickname, Long roomId) {
        Room room = roomService.getRoomWithLock(roomId);
        Member member = memberService.saveCommonMember(nickname, room);
        return new RoomJoinResponse(room.getId(), new MemberResponse(member));
    }

    @Transactional(readOnly = true)
    public RoomInfoResponse getRoomInfo(Long roomId) {
        Room room = roomService.getRoom(roomId);
        List<Member> members = memberService.findRoomMembers(room);
        return RoomInfoResponse.create(members, room);
    }

    @Transactional
    public void startGame(Long roomId) {
        Room room = roomService.startGame(roomId);
        int pickCount = room.getTotalRound();
        List<BalanceContent> balanceContents = balanceContentService.pickBalanceContents(room.getCategory(), pickCount);
        roomContentService.readyRoomContents(room, balanceContents);
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
        return new RoundFinishedResponse(room.isRoundFinished(round), room.isAllRoundFinished());
    }

    @Transactional
    public void resetRoom(Long roomId) {
        Room room = roomService.reset(roomId);
        roomContentService.deleteRoomContents(room);
        roomBalanceVoteMigrator.migrateToTotalVote(room);
    }
}
