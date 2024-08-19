package ddangkong.controller.balance;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.facade.balance.content.BalanceCategoriesResponse;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;


class BalancesControllerTest extends BaseControllerTest {

    @Nested
    class 카테고리_조회{

        @Test
        void 카테고리_목록을_조회한다() {
            // when & then
            BalanceCategoriesResponse response = RestAssured.given().log().all()
                    .when().get("/api/balances/categories")
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(BalanceCategoriesResponse.class);

            assertThat(response.categories()).hasSize(Category.getCategories().size());
        }
    }
}