package ddangkong.controller;


import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.room.RoomContentRepository;
import ddangkong.domain.balance.room.RoomRepository;
import ddangkong.domain.balance.vote.BalanceVoteRepository;
import ddangkong.domain.member.MemberRepository;
import ddangkong.support.extension.DatabaseCleanerExtension;
import io.restassured.RestAssured;
import java.time.Clock;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.jdbc.Sql;

@ExtendWith(DatabaseCleanerExtension.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@SpyBean(Clock.class)
@Sql(scripts = "/init-test.sql")
public abstract class BaseControllerTest {

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

    @LocalServerPort
    private int port;

    @BeforeEach
    void setUpPort() {
        RestAssured.port = port;
    }
}
