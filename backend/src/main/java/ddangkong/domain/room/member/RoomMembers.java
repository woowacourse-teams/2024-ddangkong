package ddangkong.domain.room.member;

import ddangkong.exception.room.member.InvalidMasterCountException;
import ddangkong.exception.room.member.NotExistMasterException;
import ddangkong.exception.room.member.NotExistMemberInRoomException;
import ddangkong.exception.room.member.NotRoomMemberException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RoomMembers {

    private static final int ALLOWED_MASTER_COUNT = 1;

    private final List<Member> members;

    public RoomMembers(List<Member> members) {
        validateEmpty(members);
        validateMasterCount(members);
        this.members = new ArrayList<>(members);
    }

    private void validateEmpty(List<Member> members) {
        if (members.isEmpty()) {
            throw new NotExistMemberInRoomException();
        }
    }

    private void validateMasterCount(List<Member> members) {
        long masterCount = members.stream()
                .filter(Member::isMaster)
                .count();

        if (masterCount != ALLOWED_MASTER_COUNT) {
            throw new InvalidMasterCountException(ALLOWED_MASTER_COUNT, masterCount,
                    members.get(0).getRoom().getId());
        }
    }

    public List<Member> getMembers() {
        return Collections.unmodifiableList(members);
    }

    public Member getMaster() {
        return members.stream()
                .filter(Member::isMaster)
                .findFirst()
                .orElseThrow(NotExistMasterException::new);
    }

    public Member getMember(Long memberId) {
        return members.stream()
                .filter(member -> member.getId().equals(memberId))
                .findFirst()
                .orElseThrow(NotRoomMemberException::new);
    }

    public int size() {
        return members.size();
    }
}
