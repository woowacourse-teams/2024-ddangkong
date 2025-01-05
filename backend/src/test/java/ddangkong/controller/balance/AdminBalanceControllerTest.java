package ddangkong.controller.balance;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.controller.BaseControllerTest;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.facade.balance.dto.BalanceContentCreateRequest;
import ddangkong.facade.balance.dto.BalanceContentCreateResponse;
import ddangkong.facade.balance.dto.BalanceContentPatchRequest;
import ddangkong.facade.balance.dto.BalanceContentPatchResponse;
import ddangkong.facade.balance.dto.BalanceContentsAdminResponse;
import ddangkong.facade.balance.dto.BalanceOptionPatchRequest;
import ddangkong.facade.balance.dto.BalanceOptionPatchResponse;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class AdminBalanceControllerTest extends BaseControllerTest {

    @Nested
    class 밸런스_게임_컨텐츠_조회 {

        @Test
        void 밸런스_게임_컨텐츠와_전체_투표_결과를_조회할_수_있다() {
            // given
            BalanceContent content1 = balanceContentFixture.create();
            BalanceOption option1 = balanceOptionFixture.create(content1);
            BalanceOption option2 = balanceOptionFixture.create(content1);
            BalanceContent content2 = balanceContentFixture.create();
            balanceOptionFixture.create(content2);
            balanceOptionFixture.create(content2);

            totalBalanceVoteFixture.create(option1);
            totalBalanceVoteFixture.create(option1);
            totalBalanceVoteFixture.create(option2);

            // when
            BalanceContentsAdminResponse actual = RestAssured.given()
                    .queryParam("category", content1.getCategory())
                    .get("/api/admin/balances/contents")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(BalanceContentsAdminResponse.class);

            // then
            assertThat(actual.contents()).hasSize(2);
        }
    }

    @Nested
    class 밸런스_게임_질문지_추가 {

        @Test
        void 질문지_추가() {
            // given
            BalanceContentCreateRequest request = new BalanceContentCreateRequest(
                    Category.IF, "다음 중 더 좋은 초능력은?", "순간이동", "불로장생");

            // when
            BalanceContentCreateResponse actual = RestAssured.given()
                    .contentType(ContentType.JSON)
                    .body(request)
                    .post("/api/admin/balances/contents")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(201)
                    .extract().as(BalanceContentCreateResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.question()).isEqualTo(request.question()),
                    () -> assertThat(actual.category()).isEqualTo(request.category()),
                    () -> assertThat(actual.firstOption().name()).isEqualTo(request.firstOption()),
                    () -> assertThat(actual.secondOption().name()).isEqualTo(request.secondOption()),
                    () -> assertThat(actual.firstOption().count()).isEqualTo(0),
                    () -> assertThat(actual.firstOption().percent()).isEqualTo(0)
            );
        }
    }

    @Nested
    class 밸런스_게임_질문지_변경 {

        @Test
        void 질문지_변경() {
            // given
            BalanceContent content = balanceContentFixture.create();
            BalanceContentPatchRequest request = new BalanceContentPatchRequest(content.getId(), "변경된 질문지");

            // when
            BalanceContentPatchResponse actual = RestAssured.given()
                    .contentType(ContentType.JSON)
                    .body(request)
                    .patch("/api/admin/balances/contents")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(BalanceContentPatchResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.contentId()).isEqualTo(request.contentId()),
                    () -> assertThat(actual.name()).isEqualTo(request.name())
            );
        }
    }

    @Nested
    class 밸런스_게임_선택지_변경 {

        @Test
        void 선택지_변경() {
            // given
            BalanceContent content = balanceContentFixture.create();
            BalanceOption option = balanceOptionFixture.create(content);
            BalanceOptionPatchRequest request = new BalanceOptionPatchRequest(option.getId(), "변경된 선택지");

            // when
            BalanceOptionPatchResponse actual = RestAssured.given()
                    .contentType(ContentType.JSON)
                    .body(request)
                    .patch("/api/admin/balances/options")
                    .then().contentType(ContentType.JSON).log().all()
                    .statusCode(200)
                    .extract().as(BalanceOptionPatchResponse.class);

            // then
            assertAll(
                    () -> assertThat(actual.optionId()).isEqualTo(request.optionId()),
                    () -> assertThat(actual.name()).isEqualTo(request.name())
            );
        }
    }

    @Nested
    class 밸런스_게임_컨텐츠_삭제 {

        @Test
        void 밸런스_게임_컨텐츠를_삭제할_수_있다() {
            // given
            BalanceContent content = balanceContentFixture.create();
            BalanceOption option1 = balanceOptionFixture.create(content);
            BalanceOption option2 = balanceOptionFixture.create(content);
            totalBalanceVoteFixture.create(option1);
            totalBalanceVoteFixture.create(option2);

            // when & then
            RestAssured.given()
                    .pathParam("contentId", content.getId())
                    .delete("/api/admin/balances/contents/{contentId}")
                    .then().log().all()
                    .statusCode(204);
        }
    }
}
