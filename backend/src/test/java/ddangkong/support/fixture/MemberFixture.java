package ddangkong.support.fixture;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MemberFixture {

    @Autowired
    private MemberRepository memberRepository;

    public Member createCommon(String nickname, Room room) {
        return memberRepository.save(Member.createCommon(nickname, room));
    }

    public Member createMaster(String nickname, Room room) {
        return memberRepository.save(Member.createMaster(nickname, room));
    }

    public Member createMaster(Room room) {
        return memberRepository.save(Member.createMaster("master", room));
    }
}
