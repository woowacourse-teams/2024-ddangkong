package ddangkong.controller.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.service.balance.option.dto.BalanceOptionResponse;
import ddangkong.service.room.balance.roomcontent.dto.RoomContentResponse;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomContentControllerTest extends BaseControllerTest {

    @Nested
    class 현재_방의_내용_조회 {

        private static final RoomContentResponse EXPECTED_RESPONSE = new RoomContentResponse(
                1L,
                Category.EXAMPLE,
                5,
                2,
                30_000, // TODO 추후 sec으로 변경
                "민초 vs 반민초",
                new BalanceOptionResponse(1L, "민초"),
                new BalanceOptionResponse(2L, "반민초"));

        @Test
        void 현재_방의_질문을_조회할_수_있다() {
            // when
            RoomContentResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", 1L)
                    .when().get("/api/balances/rooms/{roomId}/content")
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(RoomContentResponse.class);

            // then
            assertThat(actual).isEqualTo(EXPECTED_RESPONSE);
        }

        @Test
        void 방의_식별자가_음수인_경우_예외를_던진다() {
            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", -1L)
                    .when().get("/api/balances/rooms/{roomId}/content")
                    .then().log().all()
                    .statusCode(400);
        }
    }
}
