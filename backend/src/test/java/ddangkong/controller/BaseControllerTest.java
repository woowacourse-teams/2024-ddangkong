package ddangkong.controller;


import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import ddangkong.support.extension.DatabaseCleanerExtension;
import io.restassured.RestAssured;
import java.time.Clock;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.jdbc.Sql;

@ExtendWith(DatabaseCleanerExtension.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@SpyBean(Clock.class)
@Sql(scripts = "/init-test.sql")
public abstract class BaseControllerTest {

    @LocalServerPort
    private int port;

    @BeforeEach
    void setUp() {
        RestAssured.port = port;
    }
}
