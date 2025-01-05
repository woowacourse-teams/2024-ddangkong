package ddangkong.controller.admin;

import ddangkong.controller.BaseControllerTest;
import ddangkong.facade.admin.dto.AdminLoginRequest;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Value;

public abstract class BaseAdminControllerTest extends BaseControllerTest {

    @Value("${admin.password}")
    protected String adminPassword;

    protected String sessionId;

    @BeforeEach
    void 세션_발급() {
        AdminLoginRequest body = new AdminLoginRequest("이든", adminPassword);
        sessionId = RestAssured.given()
                .contentType(ContentType.JSON)
                .body(body)
                .when().post("/api/admin/login")
                .then()
                .statusCode(200)
                .extract()
                .cookie("JSESSIONID");
    }
}
