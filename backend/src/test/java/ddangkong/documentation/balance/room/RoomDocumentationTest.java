package ddangkong.documentation.balance.room;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.request.RequestDocumentation.queryParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.balance.room.RoomController;
import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.service.balance.room.RoomService;
import ddangkong.service.balance.room.dto.RoundFinishedResponse;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@WebMvcTest(RoomController.class)
class RoomDocumentationTest extends BaseDocumentationTest {

    @MockBean
    private RoomService roomService;

    @Nested
    class 나의_라운드_종료_여부 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/round-finished";

        @Test
        void 나의_라운드가_종료되었는지_조회한다() throws Exception {
            // given
            RoundFinishedResponse response = new RoundFinishedResponse(true);
            when(roomService.getMyRoundFinished(anyLong(), anyInt())).thenReturn(response);

            // when & then
            mockMvc.perform(get(ENDPOINT, 1)
                            .param("myRound", "1")
                    )
                    .andExpect(status().isOk())
                    .andDo(document("room/round-isFinished",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            queryParameters(
                                    parameterWithName("myRound").description("나의 라운드")
                            ),
                            responseFields(
                                    fieldWithPath("isFinished").description("라운드 종료 여부")
                            )
                    ));
        }
    }
}
