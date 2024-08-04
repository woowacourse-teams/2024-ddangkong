package ddangkong.service;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import ddangkong.support.extension.DatabaseCleanerExtension;
import ddangkong.support.fixture.BalanceContentFixture;
import ddangkong.support.fixture.BalanceOptionFixture;
import ddangkong.support.fixture.BalanceVoteFixture;
import ddangkong.support.fixture.MemberFixture;
import ddangkong.support.fixture.RoomContentFixture;
import ddangkong.support.fixture.RoomFixture;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;

@ExtendWith(DatabaseCleanerExtension.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@Sql(scripts = "/init-test.sql")
public abstract class BaseServiceTest {

    @Autowired
    protected BalanceContentFixture balanceContentFixture;

    @Autowired
    protected BalanceOptionFixture balanceOptionFixture;

    @Autowired
    protected BalanceVoteFixture balanceVoteFixture;

    @Autowired
    protected MemberFixture memberFixture;

    @Autowired
    protected RoomContentFixture roomContentFixture;

    @Autowired
    protected RoomFixture roomFixture;
}
