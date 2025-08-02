package ddangkong.service.room.member;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.exception.room.NotReadyRoomException;
import ddangkong.exception.room.member.AlreadyExistMasterException;
import ddangkong.exception.room.member.ExceedMaxMemberCountException;
import ddangkong.exception.room.member.InvalidMasterCreationException;
import ddangkong.exception.room.member.InvalidMemberIdException;
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
    public Member saveMember(Member member) {
        if (member.isMaster()) {
            return saveMasterMember(member);
        }
        return saveCommonMember(member);
    }

    private Member saveMasterMember(Member member) {
        if (existsMasterInRoom(member.getRoom())) {
            throw new AlreadyExistMasterException();
        }
        validateMemberNotExists(member.getRoom());
        return memberRepository.save(member);
    }

    private void validateMemberNotExists(Room room) {
        long memberCountInRoom = memberRepository.countByRoom(room);
        if (memberCountInRoom > 0) {
            throw new InvalidMasterCreationException(memberCountInRoom);
        }
    }

    private Member saveCommonMember(Member member) {
        if (!existsMasterInRoom(member.getRoom())) {
            throw new NotExistMasterException();
        }
        validateRoomAcceptMember(member.getRoom());
        return memberRepository.save(member);
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
    public RoomMembers findRoomMembers(Room room) {
        List<Member> members = memberRepository.findAllByRoom(room);
        return new RoomMembers(members);
    }

    @Transactional(readOnly = true)
    public Member getRoomMember(Long memberId, Room room) {
        return memberRepository.findByIdAndRoom(memberId, room)
                .orElseThrow(NotRoomMemberException::new);
    }

    @Transactional
    public void passMaster(RoomMembers members, Long nextMasterId) {
        Member currentMaster = members.getMaster();
        Member nextMaster = members.getMember(nextMasterId);

        nextMaster.promoteToMaster();
        currentMaster.demoteToCommon();
    }

    @Transactional
    public void promoteOtherMember(RoomMembers members) {
        Member commonMember = members.getAnyCommonMember();
        commonMember.promoteToMaster();
    }

    @Transactional
    public void delete(Member member) {
        memberRepository.delete(member);
    }

    @Transactional
    public void deleteMember(Room room) {
        RoomMembers members = findRoomMembers(room);
        memberRepository.deleteAllInBatch(members.getMembers());
    }

    @Transactional(readOnly = true)
    public Member getMemberById(Long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(InvalidMemberIdException::new);
    }
}
