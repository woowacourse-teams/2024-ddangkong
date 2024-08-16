package ddangkong.controller.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.service.room.dto.RoomInfoResponse;
import ddangkong.service.room.dto.RoomJoinRequest;
import ddangkong.service.room.dto.RoomJoinResponse;
import ddangkong.service.room.dto.RoomSettingRequest;
import ddangkong.service.room.dto.RoundFinishedResponse;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import java.util.Map;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

class RoomControllerTest extends BaseControllerTest {

    @Nested
    class 방_생성 {

        @Test
        void 방을_생성할_수_있다() {
            // given
            RoomJoinRequest body = new RoomJoinRequest("방장");

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
            RoomJoinRequest body = new RoomJoinRequest("방장");

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
    class 밸런스_게임_방_정보_조회 {

        @Test
        void 게임_방_정보_조회() {
            //when
            RoomInfoResponse actual = RestAssured.given()
                    .pathParam("roomId", 1L)
                    .when().get("/api/balances/rooms/{roomId}")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomInfoResponse.class);

            //then
            assertAll(
                    () -> Assertions.assertThat(actual.members()).hasSize(4),
                    () -> Assertions.assertThat(actual.isGameStart()).isTrue(),
                    () -> Assertions.assertThat(actual.roomSetting().timeLimit()).isEqualTo(30000),
                    () -> Assertions.assertThat(actual.roomSetting().totalRound()).isEqualTo(5)
            );
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
    class 방_참가 {

        @Test
        void 방에_참가할_수_있다() {
            // given
            String nickname = "참가자";
            Map<String, Object> body = Map.of("nickname", nickname);

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .pathParam("roomId", 1L)
                    .body(body)
                    .when().post("/api/balances/rooms/{roomId}/members")
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
                    .pathParam("roomId", 1L)
                    .body(body)
                    .when().post("/api/balances/rooms/{roomId}/members")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomJoinResponse.class);

            assertThat(actual.member().isMaster()).isFalse();
        }
    }

    @Nested
    class 게임_시작 {

        private static final Long READY_ROOM_ID = 4L;

        @Test
        void 게임을_시작할_수_있다() {
            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", READY_ROOM_ID)
                    .when().patch("/api/balances/rooms/{roomId}/start")
                    .then().log().all()
                    .statusCode(204);
        }

        @Test
        void 방의_식별자가_음수인_경우_예외를_던진다() {
            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", -1L)
                    .when().patch("/api/balances/rooms/{roomId}/start")
                    .then().log().all()
                    .statusCode(400);
        }
    }

    @Nested
    class 다음_라운드_진행 {

        @Test
        void 다음_라운드로_진행할_수_있다() {
            // when
            RestAssured.given().log().all()
                    .pathParam("roomId", 1L)
                    .when().patch("/api/balances/rooms/{roomId}/next-round")
                    .then().log().all()
                    .statusCode(204);
        }

        @Test
        void 방의_식별자가_음수인_경우_예외를_던진다() {
            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", -1L)
                    .when().patch("/api/balances/rooms/{roomId}/next-round")
                    .then().log().all()
                    .statusCode(400);
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

    @Nested
    class 방_초기화 {

        private Room room;

        @BeforeEach
        void setUp() {
            BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.EXAMPLE, "A vs B"));
            room = roomRepository.save(new Room(3, 3, 30, RoomStatus.FINISH, Category.EXAMPLE));
            roomContentRepository.save(new RoomContent(room, content, 1, null, false));
            roomContentRepository.save(new RoomContent(room, content, 2, null, false));
            roomContentRepository.save(new RoomContent(room, content, 3, null, false));
        }

        @Test
        void 방을_초기화한다() {
            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .when().patch("/api/balances/rooms/{roomId}/reset")
                    .then().log().all()
                    .statusCode(HttpStatus.NO_CONTENT.value());
        }
    }
}
