package ddangkong.service.balance.room;

import ddangkong.controller.balance.room.dto.RoomMemberResponse;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.member.MemberRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    private final MemberRepository memberRepository;

    public RoomMembersResponse findAllRoomMember(Long roomId) {
        Room room = roomRepository.getById(roomId);

        List<RoomMemberResponse> response = memberRepository.findByRoom(room).stream()
                .map(RoomMemberResponse::fromMember)
                .toList();
        return new RoomMembersResponse(response);
    }
}
