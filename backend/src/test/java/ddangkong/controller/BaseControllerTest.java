package ddangkong.controller;


import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.vote.TotalBalanceVoteRepository;
import ddangkong.domain.room.RoomRepository;
import ddangkong.domain.room.balance.roomcontent.RoomContentRepository;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVoteRepository;
import ddangkong.domain.room.member.MemberRepository;
import ddangkong.support.extension.DatabaseCleanerExtension;
import ddangkong.support.fixture.domain.BalanceContentFixture;
import ddangkong.support.fixture.domain.BalanceOptionFixture;
import ddangkong.support.fixture.domain.MemberFixture;
import ddangkong.support.fixture.domain.RoomBalanceVoteFixture;
import ddangkong.support.fixture.domain.RoomContentFixture;
import ddangkong.support.fixture.domain.RoomFixture;
import io.restassured.RestAssured;
import java.time.Clock;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.boot.test.web.server.LocalServerPort;

@ExtendWith(DatabaseCleanerExtension.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@SpyBean(Clock.class)
public abstract class BaseControllerTest {

    @Autowired
    protected BalanceContentRepository balanceContentRepository;

    @Autowired
    protected BalanceOptionRepository balanceOptionRepository;

    @Autowired
    protected TotalBalanceVoteRepository totalBalanceVoteRepository;

    @Autowired
    protected RoomRepository roomRepository;

    @Autowired
    protected MemberRepository memberRepository;

    @Autowired
    protected RoomContentRepository roomContentRepository;

    @Autowired
    protected RoomBalanceVoteRepository roomBalanceVoteRepository;

    @Autowired
    protected RoomFixture roomFixture;

    @Autowired
    protected BalanceContentFixture balanceContentFixture;

    @Autowired
    protected BalanceOptionFixture balanceOptionFixture;

    @Autowired
    protected RoomContentFixture roomContentFixture;

    @Autowired
    protected MemberFixture memberFixture;

    @Autowired
    protected RoomBalanceVoteFixture roomBalanceVoteFixture;

    @LocalServerPort
    private int port;

    @BeforeEach
    void setPort() {
        RestAssured.port = port;
    }
}
