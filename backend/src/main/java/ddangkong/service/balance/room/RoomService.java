package ddangkong.service.balance.room;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomMemberResponse;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.room.RoomContentRepository;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomService {

    private static final int BALANCE_OPTION_SIZE = 2;

    private final RoomRepository roomRepository;

    private final MemberRepository memberRepository;

    private final RoomContentRepository roomContentRepository;

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public RoomMembersResponse findAllRoomMember(Long roomId) {
        Room room = roomRepository.getById(roomId);

        List<RoomMemberResponse> response = memberRepository.findByRoom(room)
                .stream()
                .map(RoomMemberResponse::new)
                .toList();
        return new RoomMembersResponse(response);
    }

    @Transactional
    public RoomJoinResponse createRoom(String nickname) {
        Room room = roomRepository.save(new Room());
        Member member = memberRepository.save(Member.createMaster(nickname, room));
        return new RoomJoinResponse(room.getId(), new MemberResponse(member));
    }

    @Transactional
    public RoomJoinResponse joinRoom(String nickname, Long roomId) {
        Room room = roomRepository.getById(roomId);
        Member member = memberRepository.save(Member.createCommon(nickname, room));
        return new RoomJoinResponse(room.getId(), new MemberResponse(member));
    }

    @Transactional
    public BalanceContentResponse moveToNextRound(Long roomId) {
        Room room = roomRepository.getById(roomId);
        room.moveToNextRound();

        RoomContent roomContent = findCurrentRoomContent(room);
        List<BalanceOption> balanceOptions = findBalanceOptions(roomContent.getBalanceContent());
        return BalanceContentResponse.builder()
                .roomContent(roomContent)
                .firstOption(balanceOptions.get(0))
                .secondOption(balanceOptions.get(1))
                .build();
    }

    private RoomContent findCurrentRoomContent(Room room) {
        return roomContentRepository.findByRoomAndRound(room, room.getCurrentRound())
                .orElseThrow(() -> new BadRequestException("해당 방의 현재 진행중인 질문이 존재하지 않습니다."));
    }

    private List<BalanceOption> findBalanceOptions(BalanceContent balanceContent) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findByBalanceContent(balanceContent);
        validateBalanceOptions(balanceOptions);
        return balanceOptions;
    }

    private void validateBalanceOptions(List<BalanceOption> balanceOptions) {
        if (balanceOptions.size() != BALANCE_OPTION_SIZE) {
            throw new InternalServerException("밸런스 게임의 선택지가 %d개입니다".formatted(balanceOptions.size()));
        }
    }
}
