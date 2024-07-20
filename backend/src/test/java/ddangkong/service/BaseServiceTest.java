package ddangkong.service;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;

@SpringBootTest
@Sql(scripts = "/init-test.sql")
public abstract class BaseServiceTest {
}
