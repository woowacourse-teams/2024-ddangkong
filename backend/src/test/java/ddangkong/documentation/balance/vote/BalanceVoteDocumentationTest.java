package ddangkong.documentation.balance.vote;

import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.JsonFieldType.ARRAY;
import static org.springframework.restdocs.payload.JsonFieldType.NUMBER;
import static org.springframework.restdocs.payload.JsonFieldType.OBJECT;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.balance.content.dto.BalanceContentGroupResponse;
import ddangkong.controller.balance.content.dto.BalanceContentTotalResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionGroupResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionTotalResponse;
import ddangkong.controller.balance.vote.BalanceVoteController;
import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteResultResponse;
import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.service.balance.vote.BalanceVoteService;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;

@WebMvcTest(BalanceVoteController.class)
public class BalanceVoteDocumentationTest extends BaseDocumentationTest {

    @MockBean
    private BalanceVoteService balanceVoteService;

    @Nested
    class 방의_라운드_결과_조희 {

        private static final String END_POINT = "/api/balances/rooms/{roomId}/contents/{contentId}/vote-result";

        @Test
        void 방의_진행중인_라운드_결과를_조회한다() throws Exception {
            // given
            Long roomId = 1L;
            Long contentId = 1L;

            BalanceOptionGroupResponse firstGroupResponse = new BalanceOptionGroupResponse(1L, "민초",
                    List.of("mohamedeu al katan", "deundeun", "rupi"), 3, 75);
            BalanceOptionGroupResponse secondGroupResponse = new BalanceOptionGroupResponse(2L, "반민초",
                    List.of("rapper lee"), 1, 25);
            BalanceOptionTotalResponse firstTotalResponse = new BalanceOptionTotalResponse(1L, "민초", 50);
            BalanceOptionTotalResponse secondTotalResponse = new BalanceOptionTotalResponse(2L, "반민초", 50);
            BalanceVoteResultResponse response = new BalanceVoteResultResponse(
                    new BalanceContentGroupResponse(firstGroupResponse, secondGroupResponse),
                    new BalanceContentTotalResponse(firstTotalResponse, secondTotalResponse));
            when(balanceVoteService.findBalanceVoteResult(roomId, contentId)).thenReturn(response);

            // when & then
            mockMvc.perform(get(END_POINT, roomId, contentId))
                    .andExpect(status().isOk())
                    .andDo(document("balanceVote/findRoundResult",
                                    pathParameters(
                                            parameterWithName("roomId").description("방 ID"),
                                            parameterWithName("contentId").description("콘텐츠 ID")
                                    ),
                                    responseFields(
                                            fieldWithPath("group").type(OBJECT).description("그룹 내 결과"),
                                            fieldWithPath("group.firstOption").type(OBJECT).description("그룹 내 첫 번째 선택지 결과"),
                                            fieldWithPath("group.firstOption.optionId").type(NUMBER).description("선택지 ID"),
                                            fieldWithPath("group.firstOption.name").type(STRING).description("선택지 이름"),
                                            fieldWithPath("group.firstOption.members").type(ARRAY)
                                                    .description("선택지를 선택한 멤버 이름들"),
                                            fieldWithPath("group.firstOption.memberCount").type(NUMBER)
                                                    .description("선택지를 선택한 사람 수"),
                                            fieldWithPath("group.firstOption.percent").type(NUMBER).description("선택지를 선택한 퍼센트"),
                                            fieldWithPath("group.secondOption").type(OBJECT).description("그룹 내 두 번째 선택지 결과"),
                                            fieldWithPath("group.secondOption.optionId").type(NUMBER).description("선택지 ID"),
                                            fieldWithPath("group.secondOption.name").type(STRING).description("선택지 이름"),
                                            fieldWithPath("group.secondOption.members").type(ARRAY)
                                                    .description("선택지를 선택한 멤버 이름들"),
                                            fieldWithPath("group.secondOption.memberCount").type(NUMBER)
                                                    .description("선택지를 선택한 사람 수"),
                                            fieldWithPath("group.secondOption.percent").type(NUMBER)
                                                    .description("선택지를 선택한 퍼센트"),
                                            fieldWithPath("total").type(OBJECT).description("전체 유저 결과"),
                                            fieldWithPath("total.firstOption").type(OBJECT).description("전체 유저 첫 번째 선택지 결과"),
                                            fieldWithPath("total.firstOption.optionId").type(NUMBER).description("선택지 ID"),
                                            fieldWithPath("total.firstOption.name").type(STRING).description("선택지 이름"),
                                            fieldWithPath("total.firstOption.percent").type(NUMBER).description("선택지를 선택한 퍼센트"),
                                            fieldWithPath("total.secondOption").type(OBJECT).description("전체 유저 두 번째 선택지 결과"),
                                            fieldWithPath("total.secondOption.optionId").type(NUMBER).description("선택지 ID"),
                                            fieldWithPath("total.secondOption.name").type(STRING).description("선택지 이름"),
                                            fieldWithPath("total.secondOption.percent").type(NUMBER).description("선택지를 선택한 퍼센트")
                                    )
                            )
                    );
        }
    }

    @Nested
    class 투표_생성 {

        private static final String END_POINT = "/api/balances/rooms/{roomId}/contents/{contentId}/votes";

        @Test
        void 방의_진행중인_라운드_결과를_조회한다() throws Exception {
            // given
            Long optionId = 1L;
            Long contentId = 1L;
            Long memberId = 1L;
            Long roomId = 1L;
            BalanceVoteRequest request = new BalanceVoteRequest(memberId, optionId);
            BalanceVoteResponse response = new BalanceVoteResponse(optionId);
            String content = objectMapper.writeValueAsString(request);
            when(balanceVoteService.createBalanceVote(request, roomId, contentId)).thenReturn(response);

            // when & then
            mockMvc.perform(post(END_POINT, roomId, contentId)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isCreated())
                    .andDo(document("balanceVote/createBalanceVote",
                                    pathParameters(
                                            parameterWithName("roomId").description("방 ID"),
                                            parameterWithName("contentId").description("콘텐츠 ID")
                                    ),
                                    requestFields(
                                            fieldWithPath("memberId").type(NUMBER).description("멤버 ID"),
                                            fieldWithPath("optionId").type(NUMBER).description("선택지 ID")
                                    ),
                                    responseFields(
                                            fieldWithPath("optionId").type(NUMBER).description("옵션 ID")
                                    )
                            )
                    );
        }
    }
}
