package ddangkong.controller.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.facade.balance.option.dto.BalanceOptionResponse;
import ddangkong.facade.room.balance.roomcontent.dto.RoomContentResponse;
import io.restassured.RestAssured;
import java.time.LocalDateTime;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomContentControllerTest extends BaseControllerTest {

    @Nested
    class 현재_방의_내용_조회 {
        private Room room;
        private RoomContentResponse expectedResponse;

        @BeforeEach
        void init() {
            int currentRound = 1;
            int totalRound = 5;
            int timeLimit = 10_000;
            Category category = Category.IF;
            RoomStatus status = RoomStatus.PROGRESS;
            String balanceContentName = "A vs B";
            String balanceOption1Name = "A";
            String balanceOption2Name = "B";
            RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, category);

            room = roomFixture.createRoom(currentRound, roomSetting, status);
            BalanceContent balanceContent = balanceContentFixture.create(Category.IF, balanceContentName);
            balanceOptionFixture.create(balanceOption1Name, balanceContent);
            balanceOptionFixture.create(balanceOption2Name, balanceContent);
            roomContentFixture.create(room, balanceContent, 1, LocalDateTime.now().plusDays(1));

            expectedResponse = new RoomContentResponse(
                    balanceContent.getId(),
                    category.getValue(),
                    totalRound,
                    currentRound,
                    timeLimit,
                    balanceContentName,
                    new BalanceOptionResponse(1L, balanceOption1Name),
                    new BalanceOptionResponse(2L, balanceOption2Name));
        }

        @Test
        void 현재_방의_질문을_조회할_수_있다() {
            // when
            RoomContentResponse actual = RestAssured.given().log().all()
                    .pathParam("roomId", room.getId())
                    .when().get("/api/balances/rooms/{roomId}/content")
                    .then().log().all()
                    .statusCode(200)
                    .extract().as(RoomContentResponse.class);

            // then
            assertThat(actual).isEqualTo(expectedResponse);
        }
    }
}
