package ddangkong.documentation.admin;

import ddangkong.controller.admin.Admin;
import ddangkong.documentation.BaseDocumentationTest;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mock.web.MockHttpSession;

public abstract class BaseAdminDocumentationTest extends BaseDocumentationTest {

    @Value("${admin.session-key}")
    private String sessionKey;

    protected MockHttpSession session;

    @BeforeEach
    void setSession() {
        session = new MockHttpSession();
        session.setAttribute(sessionKey, new Admin("admin"));
    }
}
