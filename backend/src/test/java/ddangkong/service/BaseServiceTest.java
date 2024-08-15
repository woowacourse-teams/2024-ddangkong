package ddangkong.service;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.vote.BalanceVoteRepository;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.balance.roomcontent.RoomContentRepository;
import ddangkong.domain.room.member.MemberRepository;
import ddangkong.support.extension.DatabaseCleanerExtension;
import java.time.Clock;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.context.jdbc.Sql;

@ExtendWith(DatabaseCleanerExtension.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@SpyBean(Clock.class)
@Sql(scripts = "/init-test.sql")
public abstract class BaseServiceTest {

    @Autowired
    protected RoomRepository roomRepository;

    @Autowired
    protected MemberRepository memberRepository;

    @Autowired
    protected BalanceContentRepository balanceContentRepository;

    @Autowired
    protected BalanceOptionRepository balanceOptionRepository;

    @Autowired
    protected BalanceVoteRepository balanceVoteRepository;

    @Autowired
    protected RoomContentRepository roomContentRepository;
}
