package ddangkong.controller.balance.room;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomMembersResponse;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import java.util.HashMap;
import java.util.Map;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomControllerTest extends BaseControllerTest {

    @Nested
    class 방_생성 {

        @Test
        void 방을_생성할_수_있다() {
            // given
            String nickname = "방장";
            Map<String, Object> body = new HashMap<>();
            body.put("nickname", nickname);

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomJoinResponse.class);
        }

        @Test
        void 방을_생성한_사용자는_방장이다() {
            // given
            String nickname = "방장";
            Map<String, Object> body = new HashMap<>();
            body.put("nickname", nickname);

            // when & then
            RoomJoinResponse actual = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomJoinResponse.class);

            assertThat(actual.member().isMaster()).isTrue();
        }
    }

    @Nested
    class 방_참가 {

        @Test
        void 방에_참가할_수_있다() {
            // given
            String nickname = "참가자";
            Map<String, Object> body = new HashMap<>();
            body.put("nickname", nickname);

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms/1/members")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomJoinResponse.class);
        }

        @Test
        void 방에_참가한_멤버는_방장이_아니다() {
            // given
            String nickname = "참가자";
            Map<String, Object> body = new HashMap<>();
            body.put("nickname", nickname);

            // when & then
            RoomJoinResponse actual = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms/1/members")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomJoinResponse.class);

            assertThat(actual.member().isMaster()).isFalse();

        }
    }

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
