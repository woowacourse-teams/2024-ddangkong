package ddangkong.controller.room.balance.roomvote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomMembersVoteMatchingResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
import ddangkong.support.annotation.FixedClock;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import java.time.LocalDateTime;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomBalanceVoteControllerTest extends BaseControllerTest {

    BalanceContent balanceContent;
    BalanceOption optionA;
    BalanceOption optionB;

    @BeforeEach
    void setUp() {
        balanceContent = balanceContentFixture.create(Category.IF);
        optionA = balanceOptionFixture.create(balanceContent);
        optionB = balanceOptionFixture.create(balanceContent);
    }

    @Nested
    @FixedClock(date = "2024-07-18", time = "20:00:02")
    class 투표_생성 {

        @Test
        void 현재_방에서_투표할_수_있다() {
            // given
            Room room = roomFixture.createNotStartedRoom(1, 5, 10_000, Category.IF, RoomStatus.PROGRESS);
            memberFixture.createMaster(room);
            Member common = memberFixture.createCommon(room);

            LocalDateTime voteDeadline = LocalDateTime.parse("2024-07-18T20:00:08");
            roomContentFixture.create(room, balanceContent, 1, voteDeadline);

            RoomBalanceVoteRequest request = new RoomBalanceVoteRequest(common.getId(), optionA.getId());

            // when
            RoomBalanceVoteResponse actual = RestAssured.given().log().all()
                    .body(request)
                    .contentType(ContentType.JSON)
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().post("/api/balances/rooms/{roomId}/contents/{contentId}/votes")
                    .then().log().all()
                    .statusCode(201)
                    .extract().as(RoomBalanceVoteResponse.class);

            // then
            assertThat(actual.optionId()).isEqualTo(optionA.getId());
        }
    }

    @Nested
    @FixedClock(date = "2024-08-03", time = "20:00:02")
    class 투표_종료_여부_조회 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/contents/{contentId}/vote-finished";

        private Room room;
        private Member master;
        private Member common;

        @BeforeEach
        void init() {
            room = roomFixture.createNotStartedRoom(1, 5, 10_000, Category.IF, RoomStatus.PROGRESS);
            master = memberFixture.createMaster(room);
            common = memberFixture.createCommon(room);
        }

        @Test
        void 방의_모든_멤버가_투표하면_투표가_종료된다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:08");
            roomContentFixture.create(room, balanceContent, 1, voteDeadline);

            roomBalanceVoteFixture.create(master, optionA);
            roomBalanceVoteFixture.create(common, optionB);

            // when
            VoteFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(VoteFinishedResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.isFinished()).isTrue(),
                    () -> assertThat(actual.memberCount()).isEqualTo(2),
                    () -> assertThat(actual.voteCount()).isEqualTo(2)
            );
        }

        @Test
        void 방_컨텐츠의_투표_마감_시간이_지나면_투표가_종료된다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:00");
            roomContentFixture.create(room, balanceContent, 1, voteDeadline);

            // when
            VoteFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(VoteFinishedResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.isFinished()).isTrue(),
                    () -> assertThat(actual.memberCount()).isEqualTo(2),
                    () -> assertThat(actual.voteCount()).isEqualTo(0)
            );
        }

        @Test
        void 투표_마감_시간이_지나지_않고_방의_모든_멤버가_투표하지_않으면_투표가_종료되지_않는다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:08");
            roomContentFixture.create(room, balanceContent, 1, voteDeadline);

            roomBalanceVoteFixture.create(master, optionA);

            // when
            VoteFinishedResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("contentId", balanceContent.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(VoteFinishedResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.isFinished()).isFalse(),
                    () -> assertThat(actual.memberCount()).isEqualTo(2),
                    () -> assertThat(actual.voteCount()).isEqualTo(1)
            );
        }
    }

    @Nested
    class 투표_매칭도_조회 {
        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/members/{memberId}/matching";
        private Member master;
        private Member common1;
        private Member common2;
        private Room room;
        private List<RoomContent> roomContents;

        @BeforeEach
        void init() {
            room = roomFixture.createNotStartedRoom(3, new RoomSetting(3, 15_000, Category.IF), RoomStatus.FINISH);
            roomContents = roomContentFixture.initRoomContents(room);
            balanceOptionFixture.initOptions(roomContents);

            master = memberFixture.createMaster(room);
            common1 = memberFixture.createCommon(1, room);
            common2 = memberFixture.createCommon(2, room);
        }

        @Test
        void 종료된_방에서_특정_멤버에_대한_다른_멤버들의_투표_매칭도를_조회한다() {
            // given
            for (RoomContent roomContent : roomContents) {
                List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(
                        roomContent.getBalanceContent());
                roomBalanceVoteRepository.save(new RoomBalanceVote(master, balanceOptions.get(0)));
                roomBalanceVoteRepository.save(new RoomBalanceVote(common1, balanceOptions.get(0)));
                roomBalanceVoteRepository.save(new RoomBalanceVote(common2, balanceOptions.get(1)));
            }

            // when
            RoomMembersVoteMatchingResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("memberId", master.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(RoomMembersVoteMatchingResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.existMatching()).isTrue(),
                    () -> assertThat(actual.matchedMembers()).hasSize(2),
                    () -> assertThat(actual.matchedMembers().get(0).memberId()).isEqualTo(common1.getId()),
                    () -> assertThat(actual.matchedMembers().get(0).rank()).isEqualTo(1),
                    () -> assertThat(actual.matchedMembers().get(0).matchingPercent()).isEqualTo(100),
                    () -> assertThat(actual.matchedMembers().get(1).memberId()).isEqualTo(common2.getId()),
                    () -> assertThat(actual.matchedMembers().get(1).matchingPercent()).isEqualTo(0),
                    () -> assertThat(actual.matchedMembers().get(1).rank()).isEqualTo(2)
            );
        }
    }
}
