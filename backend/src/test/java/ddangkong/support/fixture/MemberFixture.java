package ddangkong.support.fixture;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;

public enum MemberFixture {
    PRIN,
    TACAN,
    KEOCHAN,
    EDEN,
    MARU,
    POME,
    SUNDAY,
    ;

    public Member master(Room room) {
        return Member.createMaster(name().toLowerCase(), room);
    }

    public Member common(Room room) {
        return Member.createCommon(name().toLowerCase(), room);
    }

    public Member common(Room room, Object suffix) {
        return Member.createCommon(name() + suffix, room);
    }
}
