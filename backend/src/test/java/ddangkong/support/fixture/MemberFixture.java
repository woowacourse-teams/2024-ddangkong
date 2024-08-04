package ddangkong.support.fixture;

import ddangkong.domain.balance.room.Room;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import java.util.ArrayList;
import java.util.List;
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

    public List<Member> createCommonMembers(Room room, int count) {
        List<Member> members = new ArrayList<>();
        for (int i = 1; i <= count; i++) {
            Member member = Member.createCommon("회원%d".formatted(i), room);
            members.add(memberRepository.save(member));
        }

        return members;
    }
}
