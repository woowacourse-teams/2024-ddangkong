package ddangkong.controller.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.dto.InitialRoomResponse;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinRequest;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoomStatusResponse;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import java.util.Map;
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
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);
            memberFixture.createCommon(room);

            // when
            RoomInfoResponse actual = RestAssured.given()
                    .pathParam("roomId", room.getId())
                    .when().get("/api/balances/rooms/{roomId}")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomInfoResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.members()).hasSize(2),
                    () -> assertThat(actual.isGameStart()).isFalse(),
                    () -> assertThat(actual.roomSetting().timeLimit()).isEqualTo(room.getTimeLimit()),
                    () -> assertThat(actual.roomSetting().totalRound()).isEqualTo(room.getTotalRound())
            );
        }
    }

    @Nested
    class 방_참여_가능_여부_조회 {

        @Test
        void 게임이_시작되지_않은_방은_참여할_수_있다() {
            // given
            Room notStartedRoom = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(notStartedRoom);

            // when & then
            RoomStatusResponse actual = RestAssured.given()
                    .pathParam("uuid", notStartedRoom.getUuid())
                    .when().get("/api/balances/rooms/{uuid}/status")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomStatusResponse.class);
            assertThat(actual.isJoinable()).isTrue();
        }

        @Test
        void 게임이_시작된_방은_참여할_수_없다() {
            // given
            Room progressRoom = roomFixture.createProgressRoom();
            memberFixture.createMaster(progressRoom);

            // when & then
            RoomStatusResponse actual = RestAssured.given()
                    .pathParam("uuid", progressRoom.getUuid())
                    .when().get("/api/balances/rooms/{uuid}/status")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomStatusResponse.class);
            assertThat(actual.isJoinable()).isFalse();
        }

        @Test
        void 게임_종료된_방_참여_가능_여부_조회() {
            // given
            Room finishedRoom = roomFixture.createFinishedRoom();
            memberFixture.createMaster(finishedRoom);

            // when & then
            RoomStatusResponse actual = RestAssured.given()
                    .pathParam("uuid", finishedRoom.getUuid())
                    .when().get("/api/balances/rooms/{uuid}/status")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomStatusResponse.class);
            assertThat(actual.isJoinable()).isFalse();
        }
    }

    @Nested
    class 방_설정_변경 {

        @Test
        void 방_설정_정보를_변경한다() {
            // given
            int currentRound = 1;
            int totalRound = 5;
            int timeLimit = 10_000;
            Category category = Category.IF;
            RoomStatus roomStatus = RoomStatus.READY;

            Room room = roomFixture.createNotStartedRoom(currentRound, totalRound, timeLimit, category, roomStatus);
            memberFixture.createMaster(room);

            Category newCategory = Category.FOOD;
            RoomSettingRequest request = new RoomSettingRequest(totalRound, timeLimit, newCategory);

            // when
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .pathParam("roomId", 1L)
                    .body(request)
                    .when().patch("/api/balances/rooms/{roomId}")
                    .then().log().all()
                    .statusCode(HttpStatus.NO_CONTENT.value());

            Room changedRoom = roomRepository.findById(room.getId()).get();

            // then
            assertThat(changedRoom.getCategory()).isEqualTo(Category.FOOD);
        }
    }

    @Nested
    class 방_참가 {

        @Test
        void 방에_참가할_수_있다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);

            String nickname = "참가자";
            Map<String, Object> body = Map.of("nickname", nickname);

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .pathParam("uuid", room.getUuid())
                    .body(body)
                    .when().post("/api/balances/rooms/{uuid}/members")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomJoinResponse.class);
        }

        @Test
        void 방에_참가한_멤버는_방장이_아니다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);

            String nickname = "참가자";
            Map<String, Object> body = Map.of("nickname", nickname);

            // when & then
            RoomJoinResponse actual = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .pathParam("uuid", room.getUuid())
                    .body(body)
                    .when().post("/api/balances/rooms/{uuid}/members")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomJoinResponse.class);

            assertThat(actual.member().isMaster()).isFalse();
        }
    }

    @Nested
    class 방_나가기 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/members/{memberId}";

        @Test
        void 방에_나갈_수_있다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            Member member = memberFixture.createMaster(room);

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .pathParam("roomId", room.getId())
                    .pathParam("memberId", member.getId())
                    .when().delete(ENDPOINT)
                    .then().log().all()
                    .statusCode(204);
        }
    }

    @Nested
    class 게임_시작 {

        @Test
        void 게임을_시작할_수_있다() {
            // given
            Room notStartedRoom = roomFixture.createNotStartedRoom();
            roomContentFixture.initRoomContents(notStartedRoom);
            memberFixture.createMaster(notStartedRoom);

            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", notStartedRoom.getId())
                    .when().patch("/api/balances/rooms/{roomId}/start")
                    .then().log().all()
                    .statusCode(204);
        }
    }

    @Nested
    class 다음_라운드_진행 {

        @Test
        void 다음_라운드로_진행할_수_있다() {
            // given
            Room progressRoom = roomFixture.createProgressRoom();
            roomContentFixture.initRoomContents(progressRoom);
            memberFixture.createMaster(progressRoom);

            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", 1L)
                    .when().patch("/api/balances/rooms/{roomId}/next-round")
                    .then().log().all()
                    .statusCode(204);
        }
    }

    @Nested
    class 라운드_종료_여부 {

        @Test
        void 라운드가_종료되었는지_조회한다() {
            // given
            int currentRound = 2;
            Room progressRoom = roomFixture.createProgressRoom(currentRound);
            memberFixture.createMaster(progressRoom);

            int validateRound = 1;

            // when
            RoundFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", progressRoom.getId())
                    .queryParam("round", validateRound)
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

        @Test
        void 방을_초기화한다() {
            // given
            Room finishedRoom = roomFixture.createFinishedRoom();

            // when & then
            RestAssured.given().log().all()
                    .pathParam("roomId", finishedRoom.getId())
                    .when().patch("/api/balances/rooms/{roomId}/reset")
                    .then().log().all()
                    .statusCode(HttpStatus.NO_CONTENT.value());
        }

        @Test
        void 방이_초기화되었는지_확인한다() {
            // given
            Room initializedRoom = roomFixture.createFinishedRoom();
            memberFixture.createMaster(initializedRoom);

            RestAssured.given().log().all()
                    .pathParam("roomId", initializedRoom.getId())
                    .when().patch("/api/balances/rooms/{roomId}/reset")
                    .then().log().all()
                    .statusCode(HttpStatus.NO_CONTENT.value());

            // when
            InitialRoomResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", initializedRoom.getId())
                    .when().get("/api/balances/rooms/{roomId}/initial")
                    .then().log().all()
                    .statusCode(HttpStatus.OK.value())
                    .extract()
                    .as(InitialRoomResponse.class);

            // then
            assertThat(actual.isInitial()).isTrue();
        }
    }

    @Nested
    class 방_멤버_정보_조회 {

        @Test
        void 방_생성시_멤버_식별_쿠키를_생성한다() {
            // given
            RoomJoinRequest body = new RoomJoinRequest("방장");

            // when
            String cookie = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().log().all()
                    .post("/api/balances/rooms")
                    .getCookie("test_cookie");

            // then
            assertThat(cookie).isNotBlank();
        }

        @Test
        void 방_참여시_멤버_식별_쿠키를_생성한다() {
            // given
            RoomJoinRequest body = new RoomJoinRequest("참가자");

            // when
            String cookie = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().log().all()
                    .post("/api/balances/rooms")
                    .getCookie("test_cookie");

            // then
            assertThat(cookie).isNotBlank();
        }

        @Test
        void 멤버_식별_쿠키를_통해_멤버_정보를_조회_할_수_있다() {
            // given
            RoomJoinRequest body = new RoomJoinRequest("참가자");
            String cookie = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms")
                    .getCookie("test_cookie");

            // when
            RoomJoinResponse roomJoinResponse = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .cookie("test_cookie", cookie)
                    .when().get("/api/balances/rooms/member")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomJoinResponse.class);

            // then
            assertThat(body.nickname()).isEqualTo(roomJoinResponse.member().nickname());
        }

        @Test
        void 방을_나가면_멤버_식별_쿠키를_삭제한다() {
            // given
            RoomJoinRequest body = new RoomJoinRequest("참가자");
            String cookie = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms")
                    .getCookie("test_cookie");

            RoomJoinResponse roomJoinResponse = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .cookie("test_cookie", cookie)
                    .when().get("/api/balances/rooms/member")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomJoinResponse.class);

            // when
            String deleteCookie = RestAssured.given().log().all()
                    .pathParam("roomId", roomJoinResponse.roomId())
                    .pathParam("memberId", roomJoinResponse.member().memberId())
                    .cookie("test_cookie", cookie)
                    .when().delete("/api/balances/rooms/{roomId}/members/{memberId}")
                    .getCookie("test_cookie");

            assertThat(deleteCookie).isBlank();
        }
    }
}
