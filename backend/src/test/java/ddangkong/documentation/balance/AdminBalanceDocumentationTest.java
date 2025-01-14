package ddangkong.documentation.balance;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.delete;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.JsonFieldType.ARRAY;
import static org.springframework.restdocs.payload.JsonFieldType.NUMBER;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.request.RequestDocumentation.queryParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.balance.AdminBalanceController;
import ddangkong.documentation.admin.BaseAdminDocumentationTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.facade.balance.AdminBalanceContentFacade;
import ddangkong.facade.balance.dto.BalanceContentAdminResponse;
import ddangkong.facade.balance.dto.BalanceContentCreateRequest;
import ddangkong.facade.balance.dto.BalanceContentCreateResponse;
import ddangkong.facade.balance.dto.BalanceContentPatchRequest;
import ddangkong.facade.balance.dto.BalanceContentPatchResponse;
import ddangkong.facade.balance.dto.BalanceContentsAdminResponse;
import ddangkong.facade.balance.dto.BalanceOptionAdminResponse;
import ddangkong.facade.balance.dto.BalanceOptionPatchRequest;
import ddangkong.facade.balance.dto.BalanceOptionPatchResponse;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;

@WebMvcTest(value = AdminBalanceController.class)
public class AdminBalanceDocumentationTest extends BaseAdminDocumentationTest {

    @MockBean
    private AdminBalanceContentFacade adminBalanceContentFacade;

    @Nested
    class 밸런스_게임_컨텐츠_조회 {

        private static final String ENDPOINT = "/api/admin/balances/contents";

        @Test
        void 밸런스_게임_컨텐츠와_전체_투표_결과를_조회할_수_있다() throws Exception {
            // given
            Category category = Category.IF;
            BalanceContentsAdminResponse response = new BalanceContentsAdminResponse(
                    List.of(new BalanceContentAdminResponse(133L, "다음 중 더 좋은 초능력은?",
                            new BalanceOptionAdminResponse(267L, "순간이동", 0, 50),
                            new BalanceOptionAdminResponse(268L, "불로장생", 0, 50)
                    ))
            );
            when(adminBalanceContentFacade.getContents(category)).thenReturn(response);

            // when & then
            mockMvc.perform(get(ENDPOINT)
                            .queryParam("category", category.name())
                            .session(session)
                    )
                    .andExpect(status().isOk())
                    .andDo(document("admin/balance/get",
                            queryParameters(
                                    parameterWithName("category").description("카테고리")
                            ),
                            responseFields(
                                    fieldWithPath("contents").type(ARRAY).description("컨텐츠 배열"),
                                    fieldWithPath("contents[].contentId").type(NUMBER).description("컨텐츠 ID"),
                                    fieldWithPath("contents[].question").type(STRING).description("컨텐츠"),
                                    fieldWithPath("contents[].firstOption.optionId").type(NUMBER)
                                            .description("선택지 1 ID"),
                                    fieldWithPath("contents[].firstOption.name").type(STRING).description("선택지 1"),
                                    fieldWithPath("contents[].firstOption.count").type(NUMBER)
                                            .description("선택지 1에 투표 횟수"),
                                    fieldWithPath("contents[].firstOption.percent").type(NUMBER)
                                            .description("선택지 1 선택 비율"),
                                    fieldWithPath("contents[].secondOption.optionId").type(NUMBER)
                                            .description("선택지 2 ID"),
                                    fieldWithPath("contents[].secondOption.name").type(STRING).description("선택지 2"),
                                    fieldWithPath("contents[].secondOption.count").type(NUMBER)
                                            .description("선택지 2에 투표 횟수"),
                                    fieldWithPath("contents[].secondOption.percent").type(NUMBER)
                                            .description("선택지 2 선택 비율")
                            )));
        }
    }

    @Nested
    class 밸런스_게임_질문지_추가 {

        private static final String ENDPOINT = "/api/admin/balances/contents";

        @Test
        void 질문지_추가() throws Exception {
            // given
            BalanceContentCreateRequest request = new BalanceContentCreateRequest(
                    Category.IF, "다음 중 더 좋은 초능력은?", "순간이동", "불로장생");
            BalanceContentCreateResponse response = new BalanceContentCreateResponse(
                    133L, "다음 중 더 좋은 초능력은?", Category.IF,
                    new BalanceOptionAdminResponse(267L, "순간이동", 0, 50),
                    new BalanceOptionAdminResponse(268L, "불로장생", 0, 50)
            );
            String content = objectMapper.writeValueAsString(request);
            when(adminBalanceContentFacade.createContent(request)).thenReturn(response);

            // when & then
            mockMvc.perform(post(ENDPOINT)
                            .session(session)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isCreated())
                    .andDo(document("admin/balance/create",
                            requestFields(
                                    fieldWithPath("category").type(STRING).description("카테고리"),
                                    fieldWithPath("question").type(STRING).description("컨텐츠"),
                                    fieldWithPath("firstOption").type(STRING).description("선택지 1"),
                                    fieldWithPath("secondOption").type(STRING).description("선택지 2")
                            ),
                            responseFields(
                                    fieldWithPath("contentId").type(NUMBER).description("컨텐츠 ID"),
                                    fieldWithPath("question").type(STRING).description("컨텐츠"),
                                    fieldWithPath("category").type(STRING).description("카테고리"),
                                    fieldWithPath("firstOption.optionId").type(NUMBER).description("선택지 1 ID"),
                                    fieldWithPath("firstOption.name").type(STRING).description("선택지 1"),
                                    fieldWithPath("firstOption.count").type(NUMBER).description("선택지 1에 투표 횟수"),
                                    fieldWithPath("firstOption.percent").type(NUMBER).description("선택지 1 선택 비율"),
                                    fieldWithPath("secondOption.optionId").type(NUMBER).description("선택지 2 ID"),
                                    fieldWithPath("secondOption.name").type(STRING).description("선택지 2"),
                                    fieldWithPath("secondOption.count").type(NUMBER).description("선택지 2에 투표 횟수"),
                                    fieldWithPath("secondOption.percent").type(NUMBER).description("선택지 2 선택 비율")
                            )));
        }
    }

    @Nested
    class 밸런스_게임_질문지_변경 {

        private static final String ENDPOINT = "/api/admin/balances/contents";

        @Test
        void 질문지_변경() throws Exception {
            // given
            BalanceContentPatchRequest request = new BalanceContentPatchRequest(133L, "다음 중 더 필요한 초능력은?");
            BalanceContentPatchResponse response = new BalanceContentPatchResponse(133L, "다음 중 더 필요한 초능력은?");
            String content = objectMapper.writeValueAsString(request);
            when(adminBalanceContentFacade.updateContent(request)).thenReturn(response);

            // when & then
            mockMvc.perform(patch(ENDPOINT)
                            .session(session)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isOk())
                    .andDo(document("admin/balance/patch-content",
                            requestFields(
                                    fieldWithPath("contentId").type(NUMBER).description("컨텐츠 ID"),
                                    fieldWithPath("name").type(STRING).description("컨텐츠")
                            ),
                            responseFields(
                                    fieldWithPath("contentId").type(NUMBER).description("컨텐츠 ID"),
                                    fieldWithPath("name").type(STRING).description("컨텐츠")
                            )));
        }
    }

    @Nested
    class 밸런스_게임_선택지_변경 {

        private static final String ENDPOINT = "/api/admin/balances/options";

        @Test
        void 선택지_변경() throws Exception {
            // given
            BalanceOptionPatchRequest request = new BalanceOptionPatchRequest(267L, "수중답보");
            BalanceOptionPatchResponse response = new BalanceOptionPatchResponse(267L, "수중답보");
            String content = objectMapper.writeValueAsString(request);
            when(adminBalanceContentFacade.updateOption(request)).thenReturn(response);

            // when & then
            mockMvc.perform(patch(ENDPOINT)
                            .session(session)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andDo(document("admin/balance/patch-option",
                            requestFields(
                                    fieldWithPath("optionId").type(NUMBER).description("선택지 ID"),
                                    fieldWithPath("name").type(STRING).description("선택지")
                            ),
                            responseFields(
                                    fieldWithPath("optionId").type(NUMBER).description("선택지 ID"),
                                    fieldWithPath("name").type(STRING).description("선택지")
                            )));
        }
    }

    @Nested
    class 밸런스_게임_컨텐츠_삭제 {

        private static final String ENDPOINT = "/api/admin/balances/contents/{contentId}";

        @Test
        void 밸런스_게임_컨텐츠를_삭제할_수_있다() throws Exception {
            long contentId = 133L;
            doNothing().when(adminBalanceContentFacade).deleteContent(contentId);

            // when & then
            mockMvc.perform(delete(ENDPOINT, contentId).session(session))
                    .andExpect(status().isNoContent())
                    .andDo(document("admin/balance/delete",
                            pathParameters(
                                    parameterWithName("contentId").description("콘텐츠 ID")
                            )));
        }
    }
}
