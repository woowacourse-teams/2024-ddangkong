package ddangkong.controller.balance.content;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionResponse;
import ddangkong.domain.balance.content.Category;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class BalanceContentControllerTest extends BaseControllerTest {

    @Nested
    class 현재_방의_내용_조회 {

        private static final BalanceContentResponse EXPECTED_RESPONSE = new BalanceContentResponse(
                1L, Category.EXAMPLE, "민초 vs 반민초",
                new BalanceOptionResponse(1L, "민초"),
                new BalanceOptionResponse(2L, "반민초"));

        @Test
        void 현재_방의_질문을_조회할_수_있다() {
            // when
            BalanceContentResponse actual = RestAssured.given().log().all()
                    .when().get("/api/balances/rooms/1/question")
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(BalanceContentResponse.class);

            // then
            assertThat(actual).isEqualTo(EXPECTED_RESPONSE);
        }

        @Test
        void 방의_식별자가_음수인_경우_예외를_던진다() {
            // when & then
            RestAssured.given().log().all()
                    .when().get("/api/balances/rooms/-1/question")
                    .then().log().all()
                    .statusCode(400);
        }
    }
}
