package ddangkong.service.room.member;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import ddangkong.exception.room.NotReadyRoomException;
import ddangkong.exception.room.member.AlreadyExistMasterException;
import ddangkong.exception.room.member.ExceedMaxMemberCountException;
import ddangkong.exception.room.member.InvalidMasterCreationException;
import ddangkong.exception.room.member.NotExistMasterException;
import ddangkong.exception.room.member.NotRoomMemberException;
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
            throw new AlreadyExistMasterException();
        }
        validateMemberNotExists(room);
        return memberRepository.save(Member.createMaster(nickname, room));
    }

    private void validateMemberNotExists(Room room) {
        long memberCountInRoom = memberRepository.countByRoom(room);
        if (memberCountInRoom > 0) {
            throw new InvalidMasterCreationException(memberCountInRoom);
        }
    }

    @Transactional
    public Member saveCommonMember(String nickname, Room room) {
        if (!existsMasterInRoom(room)) {
            throw new NotExistMasterException();
        }
        validateRoomAcceptMember(room);
        // todo 중복 닉네임 체크
        return memberRepository.save(Member.createCommon(nickname, room));
    }

    private boolean existsMasterInRoom(Room room) {
        return memberRepository.existsByRoomAndIsMaster(room, true);
    }

    private void validateRoomAcceptMember(Room room) {
        if (room.isAlreadyStart()) {
            throw new NotReadyRoomException();
        }
        long memberCountInRoom = memberRepository.countByRoom(room);
        if (room.isFull(memberCountInRoom)) {
            throw new ExceedMaxMemberCountException(memberCountInRoom);
        }
    }

    @Transactional(readOnly = true)
    public List<Member> findRoomMembers(Room room) {
        return memberRepository.findAllByRoom(room);
    }

    @Transactional(readOnly = true)
    public Member getRoomMember(Long memberId, Room room) {
        return memberRepository.findByIdAndRoom(memberId, room)
                .orElseThrow(NotRoomMemberException::new);
    }
}