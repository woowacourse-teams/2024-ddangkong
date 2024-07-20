package ddangkong.controller.content;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.option.dto.BalanceOptionResponse;
import ddangkong.controller.content.dto.BalanceContentResponse;
import ddangkong.domain.content.Category;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class BalanceContentControllerTest extends BaseControllerTest {

    private static final BalanceContentResponse EXPECTED_RESPONSE = new BalanceContentResponse(
            1L, Category.EXAMPLE, "민초 vs 반민초",
            new BalanceOptionResponse(1L, "민초"),
            new BalanceOptionResponse(2L, "반민초"));

    @Nested
    class 방의_질문_조회 {

        @Test
        void 현재_방의_질문을_조회할_수_있다() {
            BalanceContentResponse actual = RestAssured.given().log().all()
                    .when().get("/api/balances/rooms/1/question")
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(BalanceContentResponse.class);

            assertThat(actual).isEqualTo(EXPECTED_RESPONSE);
        }
    }
}
