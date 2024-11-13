package ddangkong.support.fixture;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MemberFixture {

    private static final String COMMON_NICKNAME = "common";
    private static final String MASTER_NICKNAME = "master";

    @Autowired
    private MemberRepository memberRepository;

    public Member createCommon(String nickname, Room room) {
        return memberRepository.save(Member.createCommon(nickname, room));
    }

    public Member createMaster(String nickname, Room room) {
        return memberRepository.save(Member.createMaster(nickname, room));
    }

    public Member createMaster(Room room) {
        return createMaster(MASTER_NICKNAME, room);
    }

    public void createCommons(Room room, int count) {
        for (int i = 0; i < count; i++) {
            createCommon(COMMON_NICKNAME + i, room);
        }
    }
}
