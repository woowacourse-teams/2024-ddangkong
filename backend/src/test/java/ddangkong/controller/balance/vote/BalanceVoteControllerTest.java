package ddangkong.controller.balance.vote;

import static ddangkong.support.fixture.MemberFixture.EDEN;
import static ddangkong.support.fixture.MemberFixture.KEOCHAN;
import static ddangkong.support.fixture.MemberFixture.PRIN;
import static ddangkong.support.fixture.MemberFixture.TACAN;
import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.vote.BalanceVote;
import ddangkong.domain.member.Member;
import ddangkong.service.balance.vote.dto.VoteFinishedResponse;
import ddangkong.support.annotation.FixedClock;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import java.time.LocalDateTime;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class BalanceVoteControllerTest extends BaseControllerTest {

    private Room room;

    private BalanceContent balanceContent;

    private BalanceOption optionA;

    private BalanceOption optionB;

    private Member prin;

    private Member tacan;

    private Member keochan;

    private Member eden;

    @BeforeEach
    void setUp() {
        balanceContent = balanceContentRepository.save(new BalanceContent(Category.EXAMPLE, "A vs B"));
        optionA = balanceOptionRepository.save(new BalanceOption("A", balanceContent));
        optionB = balanceOptionRepository.save(new BalanceOption("B", balanceContent));

        room = roomRepository.save(Room.createNewRoom());
        prin = memberRepository.save(PRIN.master(room));
        tacan = memberRepository.save(TACAN.common(room));
        keochan = memberRepository.save(KEOCHAN.common(room));
        eden = memberRepository.save(EDEN.common(room));
    }

    @Nested
    @FixedClock(date = "2024-07-18", time = "20:00:02")
    class 투표_생성 {

        @Test
        void 현재_방에서_투표할_수_있다() {
            // given
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-07-18T20:00:08");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, roundEndedAt, false));

            BalanceVoteRequest request = new BalanceVoteRequest(keochan.getId(), optionA.getId());

            // when
            BalanceVoteResponse actual = RestAssured.given().log().all()
                    .body(request)
                    .contentType(ContentType.JSON)
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().post("/api/balances/rooms/{roomId}/contents/{contentId}/votes")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(BalanceVoteResponse.class);

            // then
            assertThat(actual.optionId()).isEqualTo(optionA.getId());
        }

        @Test
        void 요청_경로의_아이디가_양수가_아닌_경우_400_에러로_응답한다() {
            // given
            BalanceVoteRequest request = new BalanceVoteRequest(keochan.getId(), optionA.getId());
            Long roomId = 0L;

            // when & then
            assertThatCreateVoteIsBadRequest(roomId, balanceContent.getId(), request);
        }

        @Test
        void 요청_바디의_아이디가_양수가_아닌_경우_400_에러로_응답한다() {
            // given
            BalanceVoteRequest request = new BalanceVoteRequest(0L, optionA.getId());

            // when & then
            assertThatCreateVoteIsBadRequest(room.getId(), balanceContent.getId(), request);
        }

        @Test
        void 요청_바디의_아이디가_null인_경우_400_에러로_응답한다() {
            // given
            BalanceVoteRequest request = new BalanceVoteRequest(null, optionA.getId());

            // when & then
            assertThatCreateVoteIsBadRequest(room.getId(), balanceContent.getId(), request);
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

    @Nested
    @FixedClock(date = "2024-08-03", time = "20:00:02")
    class 투표_종료_여부_조회 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/contents/{contentId}/vote-finished";

        @Test
        void 방의_모든_멤버가_투표하면_투표가_종료된다() {
            // given
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-08-03T20:00:08");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, roundEndedAt, false));
            balanceVoteRepository.save(new BalanceVote(optionA, prin));
            balanceVoteRepository.save(new BalanceVote(optionA, tacan));
            balanceVoteRepository.save(new BalanceVote(optionB, keochan));
            balanceVoteRepository.save(new BalanceVote(optionB, eden));

            // when
            VoteFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(VoteFinishedResponse.class);

            // then
            assertThat(actual.isFinished()).isEqualTo(true);
        }

        @Test
        void 방_컨텐츠의_투표_제한_시간이_끝나면_투표가_종료된다() {
            // given
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-08-03T20:00:00");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, roundEndedAt, false));

            // when
            VoteFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(VoteFinishedResponse.class);

            // then
            assertThat(actual.isFinished()).isEqualTo(true);
        }

        @Test
        void 투표_제한_시간이_끝나지_않고_방의_모든_멤버가_투표하지_않으면_투표가_종료되지_않는다() {
            // given
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-08-03T20:00:08");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, roundEndedAt, false));

            // when
            VoteFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(VoteFinishedResponse.class);

            // then
            assertThat(actual.isFinished()).isEqualTo(false);
        }
    }
}
