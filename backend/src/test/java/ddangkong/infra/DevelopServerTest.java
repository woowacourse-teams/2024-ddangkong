package ddangkong.infra;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.jdbc.Sql;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
class DevelopServerTest {

    @Test
    @Sql(scripts = "/sql/data-dev.sql")
    void dataSqlInitTest() {
    }
}
