package ddangkong.facade.room;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import ddangkong.facade.room.member.dto.MemberResponse;
import ddangkong.service.room.balance.roomcontent.RoomContentService;
import ddangkong.service.room.balance.roomvote.RoomBalanceVoteMigrator;
import ddangkong.service.room.member.MemberService;
import java.util.Collections;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomFacade {

    private final RoomRepository roomRepository;

    private final MemberService memberService;

    private final RoomContentService roomContentService;

    private final BalanceContentRepository balanceContentRepository;

    private final RoomBalanceVoteMigrator roomBalanceVoteMigrator;

    @Transactional(readOnly = true)
    public RoomInfoResponse findRoomInfo(Long roomId) {
        Room room = roomRepository.getById(roomId);
        List<Member> members = memberService.findRoomMembers(room);
        return RoomInfoResponse.create(members, room);
    }

    @Transactional
    public RoomJoinResponse createRoom(String nickname) {
        Room room = roomRepository.save(Room.createNewRoom());
        Member member = memberService.saveMasterMember(nickname, room);
        return new RoomJoinResponse(room.getId(), new MemberResponse(member));
    }

    @Transactional
    public RoomJoinResponse joinRoom(String nickname, Long roomId) {
        Room room = roomRepository.findByIdWithLock(roomId)
                .orElseThrow(() -> new BadRequestException("해당 방이 존재하지 않습니다."));

        long memberCountInRoom = memberService.getMemberCount(room);
        if (room.isFull(memberCountInRoom)) {
            throw new BadRequestException("방의 인원 수가 가득 찼습니다.");
        }

        Member member = memberService.saveCommonMember(nickname, room);
        return new RoomJoinResponse(room.getId(), new MemberResponse(member));
    }

    @Transactional
    public void startGame(Long roomId) {
        Room room = roomRepository.getById(roomId);
        room.startGame();
        List<BalanceContent> balanceContents = findByRandom(room.getCategory(), room.getTotalRound());
        roomContentService.readyRoomContents(room, balanceContents);
    }

    private List<BalanceContent> findByRandom(Category category, int count) {
        List<BalanceContent> contents = balanceContentRepository.findByCategory(category);
        if (contents.size() < count) {
            throw new InternalServerException("DB의 질문 수가 부족합니다. category : " + category);
        }

        Collections.shuffle(contents);
        return contents.subList(0, count);
    }

    @Transactional
    public void updateRoomSetting(Long roomId, RoomSettingRequest request) {
        Room room = roomRepository.getById(roomId);

        room.updateTimeLimit(request.timeLimit());
        room.updateTotalRound(request.totalRound());
        room.updateCategory(request.category());
    }

    @Transactional
    public void moveToNextRound(Long roomId) {
        Room room = roomRepository.getById(roomId);
        room.moveToNextRound();

        if (room.isGameProgress()) {
            roomContentService.progressNextRoomContent(room);
        }
    }

    @Transactional(readOnly = true)
    public RoundFinishedResponse getRoundFinished(Long roomId, int round) {
        Room room = roomRepository.getById(roomId);
        return new RoundFinishedResponse(room.isRoundFinished(round), room.isAllRoundFinished());
    }

    @Transactional
    public void resetRoom(Long roomId) {
        Room room = roomRepository.getById(roomId);
        room.reset();
        roomContentService.finishRoomContents(room);
        roomBalanceVoteMigrator.migrateToTotalVote(room);
    }
}
