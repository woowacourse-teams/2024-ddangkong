package ddangkong.support.domain;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.member.Member;
import ddangkong.domain.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BalanceContentFixture {

    @Autowired
    private BalanceContentRepository balanceContentRepository;

    public BalanceContent createContent() {
        BalanceContent balanceContent = new BalanceContent(Category.EXAMPLE, "컨텐츠명");
        return balanceContentRepository.save(balanceContent);
    }

    public BalanceContent createContent(String name) {
        BalanceContent balanceContent = new BalanceContent(Category.EXAMPLE, name);
        return balanceContentRepository.save(balanceContent);
    }
}
