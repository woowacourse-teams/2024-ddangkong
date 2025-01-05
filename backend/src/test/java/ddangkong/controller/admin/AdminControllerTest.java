package ddangkong.controller.admin;

import ddangkong.facade.admin.dto.AdminLoginRequest;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class AdminControllerTest extends BaseAdminControllerTest {

    @Nested
    class 어드민_로그인 {

        @Test
        void 비밀번호가_일치하면_로그인_할_수_있다() {
            // given
            AdminLoginRequest body = new AdminLoginRequest("이든", adminPassword);

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/admin/login")
                    .then().log().all()
                    .statusCode(200)
                    .cookie("JSESSIONID");
        }
    }

    @Nested
    class 어드민_로그아웃 {

        @Test
        void 이미_로그인_한_유저는_로그아웃_할_수_있다() {
            // when & then
            RestAssured.given().log().all()
                    .cookie("JSESSIONID", sessionId)
                    .when().post("/api/admin/logout")
                    .then().log().all()
                    .statusCode(200);
        }
    }
}
