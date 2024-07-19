package ddangkong.controller.question;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.option.dto.BalanceOptionResponse;
import ddangkong.controller.question.dto.BalanceQuestionResponse;
import ddangkong.domain.question.Category;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class BalanceQuestionControllerTest extends BaseControllerTest {

    private static final BalanceQuestionResponse EXPECTED_RESPONSE = new BalanceQuestionResponse(
            1L, Category.EXAMPLE, "똥 맛 카레 vs 카레 맛 똥",
            new BalanceOptionResponse(1L, "똥 맛 카레"),
            new BalanceOptionResponse(2L, "카레 맛 똥"));

    @Nested
    class 방의_질문_조회 {

        @Test
        void 현재_방의_질문을_조회할_수_있다() {
            BalanceQuestionResponse actual = RestAssured.given().log().all()
                    .when().get("/api/balances/rooms/1/question")
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(BalanceQuestionResponse.class);

            assertThat(actual).isEqualTo(EXPECTED_RESPONSE);
        }
    }
}
