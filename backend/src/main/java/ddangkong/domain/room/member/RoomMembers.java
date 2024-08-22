package ddangkong.domain.room.member;

import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RoomMembers {

    private static final int ALLOWED_MASTER_COUNT = 1;

    private final List<Member> members;

    public RoomMembers(List<Member> members) {
        validateMasterCount(members);
        this.members = new ArrayList<>(members);
    }

    private void validateMasterCount(List<Member> members) {
        long masterCount = members.stream()
                .filter(Member::isMaster)
                .count();

        if (masterCount != ALLOWED_MASTER_COUNT) {
            throw new InternalServerException("방장이 %d명이 아닙니다. 현재 방장 수: %d, roomId: %d"
                    .formatted(ALLOWED_MASTER_COUNT, masterCount, members.get(0).getRoom().getId()));
        }
    }

    public List<Member> getMembers() {
        return Collections.unmodifiableList(members);
    }

    public Member getMaster() {
        return members.stream()
                .filter(Member::isMaster)
                .findFirst()
                .orElseThrow(() -> new InternalServerException("방장이 존재하지 않습니다. roomId: %d"
                        .formatted(members.get(0).getRoom().getId())));
    }

    public Member getAnyCommonMember() {
        return members.stream()
                .filter(Member::isCommon)
                .findAny()
                .orElseThrow(() -> new BadRequestException("방에 일반 멤버가 존재하지 않습니다."));
    }

    public Member getMember(Long memberId) {
        return members.stream()
                .filter(member -> member.isSameId(memberId))
                .findFirst()
                .orElseThrow(() -> new BadRequestException("멤버가 존재하지 않습니다."));
    }

    public int size() {
        return members.size();
    }
}
