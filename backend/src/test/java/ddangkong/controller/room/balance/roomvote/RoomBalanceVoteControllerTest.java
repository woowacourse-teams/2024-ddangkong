package ddangkong.controller.room.balance.roomvote;

import static ddangkong.support.fixture.MemberFixture.EDEN;
import static ddangkong.support.fixture.MemberFixture.KEOCHAN;
import static ddangkong.support.fixture.MemberFixture.PRIN;
import static ddangkong.support.fixture.MemberFixture.TACAN;
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
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomBalanceVoteControllerTest extends BaseControllerTest {

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
        balanceContent = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));
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
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-07-18T20:00:08");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, voteDeadline));

            RoomBalanceVoteRequest request = new RoomBalanceVoteRequest(keochan.getId(), optionA.getId());

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

        @Test
        void 방의_모든_멤버가_투표하면_투표가_종료된다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:08");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, voteDeadline));
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(tacan, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(keochan, optionB));
            roomBalanceVoteRepository.save(new RoomBalanceVote(eden, optionB));

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
        void 방_컨텐츠의_투표_마감_시간이_지나면_투표가_종료된다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:00");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, voteDeadline));

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
        void 투표_마감_시간이_지나지_않고_방의_모든_멤버가_투표하지_않으면_투표가_종료되지_않는다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:08");
            roomContentRepository.save(new RoomContent(room, balanceContent, 1, voteDeadline));

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

    @Nested
    class 투표_매칭도_조회 {
        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/members/{memberId}/matching";
        private Member member1;
        private Member member2;
        private Member member3;
        private Room room;
        private List<RoomContent> roomContents;

        @BeforeEach
        void init() {
            roomContents = new ArrayList<>();
            room = roomRepository.save(new Room(
                    "투표_매칭도_조회",
                    3,
                    RoomStatus.FINISH,
                    new RoomSetting(3, 5000, Category.IF)));

            BalanceContent balanceContent1 = balanceContentRepository.save(new BalanceContent(Category.IF, "if1"));
            balanceOptionRepository.save(new BalanceOption("option1", balanceContent1));
            balanceOptionRepository.save(new BalanceOption("option2", balanceContent1));
            BalanceContent balanceContent2 = balanceContentRepository.save(new BalanceContent(Category.IF, "if2"));
            balanceOptionRepository.save(new BalanceOption("option1", balanceContent2));
            balanceOptionRepository.save(new BalanceOption("option2", balanceContent2));
            BalanceContent balanceContent3 = balanceContentRepository.save(new BalanceContent(Category.IF, "if3"));
            balanceOptionRepository.save(new BalanceOption("option1", balanceContent3));
            balanceOptionRepository.save(new BalanceOption("option2", balanceContent3));

            roomContents.add(roomContentRepository.save(RoomContent.newRoomContent(room, balanceContent1, 1)));
            roomContents.add(roomContentRepository.save(RoomContent.newRoomContent(room, balanceContent2, 2)));
            roomContents.add(roomContentRepository.save(RoomContent.newRoomContent(room, balanceContent3, 3)));

            member1 = memberRepository.save(Member.createMaster("M1", room));
            member2 = memberRepository.save(Member.createCommon("M2", room));
            member3 = memberRepository.save(Member.createCommon("M3", room));
        }

        @Test
        void 종료된_방에서_특정_멤버에_대한_다른_멤버들의_투표_매칭도를_조회한다() {
            // given
            for (RoomContent roomContent : roomContents) {
                List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(
                        roomContent.getBalanceContent());
                roomBalanceVoteRepository.save(new RoomBalanceVote(member1, balanceOptions.get(0)));
                roomBalanceVoteRepository.save(new RoomBalanceVote(member2, balanceOptions.get(0)));
                roomBalanceVoteRepository.save(new RoomBalanceVote(member3, balanceOptions.get(1)));
            }

            // when
            RoomMembersVoteMatchingResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .pathParam("memberId", member1.getId())
                    .when().get(ENDPOINT)
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(RoomMembersVoteMatchingResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.existMatching()).isTrue(),
                    () -> assertThat(actual.matchedMembers()).hasSize(2),
                    () -> assertThat(actual.matchedMembers().get(0).memberId()).isEqualTo(member2.getId()),
                    () -> assertThat(actual.matchedMembers().get(0).rank()).isEqualTo(1),
                    () -> assertThat(actual.matchedMembers().get(0).matchingPercent()).isEqualTo(100),
                    () -> assertThat(actual.matchedMembers().get(1).memberId()).isEqualTo(member3.getId()),
                    () -> assertThat(actual.matchedMembers().get(1).matchingPercent()).isEqualTo(0),
                    () -> assertThat(actual.matchedMembers().get(1).rank()).isEqualTo(2)
            );
        }
    }
}
