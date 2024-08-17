package ddangkong.service.room.member;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import ddangkong.exception.BadRequestException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public Member saveMasterMember(String nickname, Room room) {
        if (existsMasterInRoom(room)) {
            throw new BadRequestException("이미 방장이 존재합니다.");
        }
        validateMemberNotExists(room);
        return memberRepository.save(Member.createMaster(nickname, room));
    }

    private void validateMemberNotExists(Room room) {
        long memberCountInRoom = memberRepository.countByRoom(room);
        if (memberCountInRoom > 0) {
            throw new BadRequestException("방에 멤버가 존재하면 방장을 생성할 수 없습니다. 현재 멤버 수: %d"
                    .formatted(memberCountInRoom));
        }
    }

    @Transactional
    public Member saveCommonMember(String nickname, Room room) {
        if (!existsMasterInRoom(room)) {
            throw new BadRequestException("방장이 존재하지 않습니다.");
        }
        validateRoomAcceptMember(room);
        // todo 중복 닉네임 체크
        return memberRepository.save(Member.createCommon(nickname, room));
    }

    private boolean existsMasterInRoom(Room room) {
        return memberRepository.existsByRoomAndIsMaster(room, true);
    }

    private void validateRoomAcceptMember(Room room) {
        if (room.isGameProgress()) {
            throw new BadRequestException("게임이 진행 중인 방에는 멤버를 생성할 수 없습니다.");
        }
        long memberCountInRoom = memberRepository.countByRoom(room);
        if (room.isFull(memberCountInRoom)) {
            throw new BadRequestException("방의 최대 인원 수가 가득 찼습니다. 현재 멤버 수: %d".formatted(memberCountInRoom));
        }
    }

    @Transactional(readOnly = true)
    public List<Member> findRoomMembers(Room room) {
        return memberRepository.findAllByRoom(room);
    }

    @Transactional(readOnly = true)
    public Member getRoomMember(Long memberId, Room room) {
        return memberRepository.findByIdAndRoom(memberId, room)
                .orElseThrow(() -> new BadRequestException("방에 존재하지 않는 멤버입니다."));
    }
}
