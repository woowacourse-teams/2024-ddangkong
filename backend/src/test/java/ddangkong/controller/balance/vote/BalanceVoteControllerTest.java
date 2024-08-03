package ddangkong.controller.balance.vote;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.support.config.TestClockConfig;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.Import;

@Import(TestClockConfig.class)
class BalanceVoteControllerTest extends BaseControllerTest {

    @Nested
    class 투표_생성 {

        private static final Long ROOM_ID = 1L;
        private static final Long CONTENT_ID = 1L;
        private static final BalanceVoteRequest NORMAL_REQUEST = new BalanceVoteRequest(1L, 1L);
        private static final BalanceVoteResponse EXPECTED_RESPONSE = new BalanceVoteResponse(1L);

        @Test
        void 현재_방에서_투표할_수_있다() {
            // given & when
            BalanceVoteResponse actual = RestAssured.given().log().all()
                    .body(NORMAL_REQUEST).contentType(ContentType.JSON)
                    .pathParam("roomId", ROOM_ID)
                    .pathParam("contentId", CONTENT_ID)
                    .when().post("/api/balances/rooms/{roomId}/contents/{contentId}/votes")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(BalanceVoteResponse.class);

            // then
            assertThat(actual).isEqualTo(EXPECTED_RESPONSE);
        }

        @Test
        void 요청_경로의_아이디가_양수가_아닌_경우_400_에러로_응답한다() {
            // given
            Long roomId = 0L;

            // when & then
            assertThatCreateVoteIsBadRequest(roomId, CONTENT_ID, NORMAL_REQUEST);
        }

        @Test
        void 요청_바디의_아이디가_양수가_아닌_경우_400_에러로_응답한다() {
            // given
            BalanceVoteRequest request = new BalanceVoteRequest(0L, 1L);

            // when & then
            assertThatCreateVoteIsBadRequest(ROOM_ID, CONTENT_ID, request);
        }

        @Test
        void 요청_바디의_아이디가_null인_경우_400_에러로_응답한다() {
            // given
            BalanceVoteRequest request = new BalanceVoteRequest(null, 1L);

            // when & then
            assertThatCreateVoteIsBadRequest(ROOM_ID, CONTENT_ID, request);
        }

        void assertThatCreateVoteIsBadRequest(Long roomId, Long contentId, BalanceVoteRequest request) {
            RestAssured.given().log().all()
                    .body(request).contentType(ContentType.JSON)
                    .pathParam("roomId", roomId)
                    .pathParam("contentId", contentId)
                    .when().post("/api/balances/rooms/{roomId}/contents/{contentId}/votes")
                    .then().log().all()
                    .statusCode(400);
        }
    }
}
