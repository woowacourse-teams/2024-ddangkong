package ddangkong.service;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import ddangkong.support.extension.DatabaseCleanerExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;

@ExtendWith(DatabaseCleanerExtension.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@Sql(scripts = "/init-test.sql")
public abstract class BaseServiceTest {
}
