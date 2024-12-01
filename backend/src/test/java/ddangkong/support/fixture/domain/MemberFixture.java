package ddangkong.support.fixture.domain;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import org.springframework.stereotype.Component;

@Component
public class MemberFixture {

    private static final String COMMON_NICKNAME = "common";
    private static final String MASTER_NICKNAME = "master";

    private final MemberRepository memberRepository;

    public MemberFixture(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    private Member createCommon(String nickname, Room room) {
        return memberRepository.save(Member.createCommon(nickname, room));
    }

    public Member createCommon(int order, Room room) {
        return createCommon(COMMON_NICKNAME + order, room);
    }

    public Member createCommon(Room room) {
        return createCommon(COMMON_NICKNAME, room);
    }

    public void createCommons(Room room, int count) {
        for (int i = 0; i < count; i++) {
            createCommon(i, room);
        }
    }

    public Member createMaster(String nickname, Room room) {
        return memberRepository.save(Member.createMaster(nickname, room));
    }

    public Member createMaster(Room room) {
        return createMaster(MASTER_NICKNAME, room);
    }
}
