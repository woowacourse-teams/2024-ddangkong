package ddangkong.domain;

import ddangkong.config.JpaAuditingConfig;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.jdbc.Sql;

@DataJpaTest
@Import(JpaAuditingConfig.class)
@Sql(scripts = "/init-test.sql")
public abstract class BaseRepositoryTest {
}
