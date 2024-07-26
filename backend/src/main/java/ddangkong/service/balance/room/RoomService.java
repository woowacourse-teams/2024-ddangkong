package ddangkong.service.balance.room;

import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomMemberResponse;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    private final MemberRepository memberRepository;

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

    @Transactional(readOnly = true)
    public RoomMembersResponse findAllRoomMember(Long roomId) {
        Room room = roomRepository.getById(roomId);

        List<RoomMemberResponse> response = memberRepository.findAllByRoom(room)
                .stream()
                .map(RoomMemberResponse::new)
                .toList();
        return new RoomMembersResponse(response);
    }
}
