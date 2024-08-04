package ddangkong.controller.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionResponse;
import ddangkong.controller.balance.room.dto.RoomInfoResponse;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomSettingRequest;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.room.Room;
import ddangkong.service.balance.room.dto.RoundFinishedResponse;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import java.util.HashMap;
import java.util.Map;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

class RoomControllerTest extends BaseControllerTest {

    @Nested
    class 밸런스_게임_방_정보_조회 {

        @Test
        void 게임_방_정보_조회() {
            // given
            Room room = roomFixture.createNewRoom();
            memberFixture.createMaster("방장", room);
            memberFixture.createCommon("참가자1", room);
            memberFixture.createCommon("참가자2", room);
            memberFixture.createCommon("참가자3", room);

            // when
            RoomInfoResponse actual = RestAssured.given()
                    .pathParam("roomId", room.getId())
                    .when().get("/api/balances/rooms/{roomId}")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomInfoResponse.class);

            // then
            assertAll(
                    () -> Assertions.assertThat(actual.members()).hasSize(4),
                    () -> Assertions.assertThat(actual.isGameStart()).isFalse(),
                    () -> Assertions.assertThat(actual.roomSetting().timeLimit()).isEqualTo(room.getTimeLimit()),
                    () -> Assertions.assertThat(actual.roomSetting().totalRound()).isEqualTo(room.getTotalRound())
            );
        }
    }

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
            Map<String, Object> body = Map.of("nickname", nickname);

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
            Map<String, Object> body = Map.of("nickname", nickname);

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
    class 다음_라운드_진행 {

        private static final BalanceContentResponse EXPECTED_RESPONSE = new BalanceContentResponse(
                3L, Category.EXAMPLE, 5, 3, "다음 중 여행가고 싶은 곳은?",
                new BalanceOptionResponse(5L, "산"),
                new BalanceOptionResponse(6L, "바다"));

        @Test
        void 다음_라운드로_진행할_수_있다() {
            // when
            BalanceContentResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", 1L)
                    .when().post("/api/balances/rooms/{roomId}/contents")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(BalanceContentResponse.class);

            // then
            assertThat(actual).isEqualTo(EXPECTED_RESPONSE);
        }

        @Test
        void 방의_식별자가_음수인_경우_예외를_던진다() {
            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", -1L)
                    .when().post("/api/balances/rooms/{roomId}/contents")
                    .then().log().all()
                    .statusCode(400);
        }
    }

    @Nested
    class 방_설정_변경 {

        @Test
        void 방_설정_정보를_변경한다() {
            // given
            int totalRound = 5;
            int timeLimit = 10000;
            Category category = Category.EXAMPLE;

            RoomSettingRequest request = new RoomSettingRequest(totalRound, timeLimit, category);

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .pathParam("roomId", 1L)
                    .body(request)
                    .when().patch("/api/balances/rooms/{roomId}")
                    .then().log().all()
                    .statusCode(HttpStatus.NO_CONTENT.value());
        }
    }

    @Nested
    class 라운드_종료_여부 {

        @Test
        void 라운드가_종료되었는지_조회한다() {
            // when
            RoundFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", 1L)
                    .queryParam("round", 1)
                    .when().get("/api/balances/rooms/{roomId}/round-finished")
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(RoundFinishedResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.isRoundFinished()).isTrue(),
                    () -> assertThat(actual.isGameFinished()).isFalse()
            );
        }
    }
}
