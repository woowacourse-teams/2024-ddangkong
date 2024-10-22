package ddangkong.controller.room;

import static ddangkong.support.fixture.MemberFixture.PRIN;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
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
            // when
            RoomInfoResponse actual = RestAssured.given()
                    .pathParam("roomId", 1L)
                    .when().get("/api/balances/rooms/{roomId}")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomInfoResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.members()).hasSize(5),
                    () -> assertThat(actual.isGameStart()).isTrue(),
                    () -> assertThat(actual.roomSetting().timeLimit()).isEqualTo(10_000),
                    () -> assertThat(actual.roomSetting().totalRound()).isEqualTo(5)
            );
        }
    }

    @Nested
    class 방_참여_가능_여부_조회 {
        @Test
        void 대기중인_방_참여_가능_여부_조회() {
            // when & then
            RoomStatusResponse actual = RestAssured.given()
                    .pathParam("uuid", "uuid4")
                    .when().get("/api/balances/rooms/{uuid}/status")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomStatusResponse.class);
            assertThat(actual.isJoinable()).isTrue();
        }

        @Test
        void 게임_진행중인_방_참여_가능_여부_조회() {
            // when & then
            RoomStatusResponse actual = RestAssured.given()
                    .pathParam("uuid", "uuid1")
                    .when().get("/api/balances/rooms/{uuid}/status")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(RoomStatusResponse.class);
            assertThat(actual.isJoinable()).isFalse();
        }

        @Test
        void 게임_종료된_방_참여_가능_여부_조회() {
            // when & then
            RoomStatusResponse actual = RestAssured.given()
                    .pathParam("uuid", "uuid5")
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
            int totalRound = 5;
            int timeLimit = 10000;
            Category category = Category.IF;

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
                    .pathParam("uuid", "uuid4")
                    .body(body)
                    .when().post("/api/balances/rooms/{uuid}/members")
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
                    .pathParam("uuid", "uuid4")
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
            Long roomId = 1L;
            Long memberId = 1L;

            // when & then
            RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .pathParam("roomId", roomId)
                    .pathParam("memberId", memberId)
                    .when().delete(ENDPOINT)
                    .then().log().all()
                    .statusCode(204);
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
        private Member master;

        @BeforeEach
        void setUp() {
            BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));
            RoomSetting roomSetting = new RoomSetting(3, 10_000, Category.IF);
            room = roomRepository.save(new Room("roomResetSetUpUUID", 3, RoomStatus.FINISH, roomSetting));
            master = memberRepository.save(PRIN.master(room));
            roomContentRepository.save(new RoomContent(room, content, 1, null));
            roomContentRepository.save(new RoomContent(room, content, 2, null));
            roomContentRepository.save(new RoomContent(room, content, 3, null));
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

        @Test
        void 방이_초기화되었는지_확인한다() {
            // given
            방을_초기화한다();

            // when
            InitialRoomResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .when().get("/api/balances/rooms/{roomId}/initial")
                    .then().log().all()
                    .statusCode(HttpStatus.OK.value())
                    .extract()
                    .as(InitialRoomResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.isInitial()).isTrue(),
                    () -> assertThat(actual.master().memberId()).isEqualTo(master.getId())
            );
        }
    }

    @Nested
    class 쿠키 {

        @Test
        void 방_생성시_쿠키를_생성한다() {
            // given
            RoomJoinRequest body = new RoomJoinRequest("방장");

            // when
            String cookie = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms")
                    .getCookie("test_cookie");

            // then
            assertThat(cookie).isNotBlank();
        }

        @Test
        void 방_참여시_쿠키를_생성한다() {
            // given
            RoomJoinRequest body = new RoomJoinRequest("참가자");

            // when
            String cookie = RestAssured.given().log().all()
                    .contentType(ContentType.JSON)
                    .body(body)
                    .when().post("/api/balances/rooms")
                    .getCookie("test_cookie");

            // then
            assertThat(cookie).isNotBlank();
        }

        @Test
        void 쿠키를_통해_사용자_정보를_조회_할_수_있다() {
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
    }
}
