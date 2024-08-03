package ddangkong.service;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import ddangkong.support.extension.DatabaseCleanerExtension;
import java.time.Clock;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.context.jdbc.Sql;

@ExtendWith(DatabaseCleanerExtension.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@SpyBean(Clock.class)
@Sql(scripts = "/init-test.sql")
public abstract class BaseServiceTest {
}
