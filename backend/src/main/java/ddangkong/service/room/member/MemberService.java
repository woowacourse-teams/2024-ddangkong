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
        return memberRepository.save(Member.createMaster(nickname, room));
    }

    @Transactional
    public Member saveCommonMember(String nickname, Room room) {
        return memberRepository.save(Member.createCommon(nickname, room));
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

    @Transactional(readOnly = true)
    public int getMemberCount(Room room) {
        return (int) memberRepository.countByRoom(room);
    }
}
