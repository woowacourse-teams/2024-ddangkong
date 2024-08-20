package ddangkong.documentation.room.balance.roomcontent;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.JsonFieldType.NUMBER;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.room.balance.roomcontent.RoomContentController;
import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.facade.balance.option.dto.BalanceOptionResponse;
import ddangkong.facade.room.balance.roomcontent.RoomContentFacade;
import ddangkong.facade.room.balance.roomcontent.dto.RoomContentResponse;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@WebMvcTest(RoomContentController.class)
class RoomContentDocumentationTest extends BaseDocumentationTest {

    @MockBean
    private RoomContentFacade roomContentFacade;

    @Nested
    class 방의_콘텐츠_조회 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/content";

        @Test
        void 방의_콘텐츠_및_선택지를_조회한다() throws Exception {
            // given
            BalanceOptionResponse firstOptionResponse = new BalanceOptionResponse(1L, "100억 빚 송강");
            BalanceOptionResponse secondOptionResponse = new BalanceOptionResponse(2L, "100억 부자 송강호");
            RoomContentResponse response = new RoomContentResponse(
                    1L,
                    Category.EXAMPLE,
                    5,
                    2,
                    10_000, // TODO sec 단위로 수정
                    "100억 빚 송강 vs 100억 부자 송강호",
                    firstOptionResponse,
                    secondOptionResponse
            );
            when(roomContentFacade.getRecentRoomContent(anyLong())).thenReturn(response);

            // when & then
            mockMvc.perform(get(ENDPOINT, 1L)
                    )
                    .andExpect(status().isOk())
                    .andDo(document("roomContent/find",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            responseFields(
                                    fieldWithPath("contentId").type(NUMBER).description("콘텐츠 ID"),
                                    fieldWithPath("category").type(STRING).description("콘텐츠 카테고리"),
                                    fieldWithPath("totalRound").type(NUMBER).description("총 라운드 수"),
                                    fieldWithPath("currentRound").type(NUMBER).description("현재 라운드"),
                                    fieldWithPath("timeLimit").type(NUMBER).description("라운드 제한시간"),
                                    fieldWithPath("question").type(STRING).description("콘텐츠 질문"),
                                    fieldWithPath("firstOption.optionId").type(NUMBER).description("첫 번째 선택지 ID"),
                                    fieldWithPath("firstOption.name").type(STRING).description("첫 번째 선택지명"),
                                    fieldWithPath("secondOption.optionId").type(NUMBER).description("두 번째 선택지 ID"),
                                    fieldWithPath("secondOption.name").type(STRING).description("두 번째 선택지명")
                            )
                    ));
        }
    }
}
