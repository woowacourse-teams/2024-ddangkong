package ddangkong.controller.balance.room;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomControllerTest extends BaseControllerTest {

    @Nested
    class 밸런스_게임_방_전체_멤버_조회 {

        @Test
        void 게임_방_전체_멤버_조회() {
            //when
            RoomMembersResponse actual = RestAssured.given()
                    .when().get("/api/balances/rooms/1/members")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomMembersResponse.class);

            //then
            Assertions.assertThat(actual.members()).hasSize(4);
        }
    }
}
