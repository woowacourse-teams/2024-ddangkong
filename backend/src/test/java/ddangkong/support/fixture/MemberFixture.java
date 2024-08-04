package ddangkong.support.fixture;

import ddangkong.domain.balance.room.Room;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MemberFixture {

    @Autowired
    private MemberRepository memberRepository;

    public Member createMaster(String nickname, Room room) {
        Member member = Member.createMaster(nickname, room);
        return memberRepository.save(member);
    }

    public Member createCommon(String nickname, Room room) {
        Member member = Member.createCommon(nickname, room);
        return memberRepository.save(member);
    }
}
