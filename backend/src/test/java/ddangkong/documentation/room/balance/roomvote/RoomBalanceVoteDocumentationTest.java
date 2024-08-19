package ddangkong.documentation.room.balance.roomvote;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.JsonFieldType.ARRAY;
import static org.springframework.restdocs.payload.JsonFieldType.BOOLEAN;
import static org.springframework.restdocs.payload.JsonFieldType.NUMBER;
import static org.springframework.restdocs.payload.JsonFieldType.OBJECT;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.room.balance.roomvote.RoomBalanceVoteController;
import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;
import ddangkong.facade.balance.vote.dto.GiveUpVoteMemberResponse;
import ddangkong.facade.balance.vote.dto.OptionTotalBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.RoomBalanceVoteFacade;
import ddangkong.facade.room.balance.roomvote.dto.ContentRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.OptionRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResultResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;

@WebMvcTest(RoomBalanceVoteController.class)
public class RoomBalanceVoteDocumentationTest extends BaseDocumentationTest {

    @MockBean
    private RoomBalanceVoteFacade roomBalanceVoteFacade;

    @Nested
    class 방_투표_결과_조희 {

        private static final String END_POINT = "/api/balances/rooms/{roomId}/contents/{contentId}/vote-result";

        @Test
        void 방의_진행중인_라운드의_투표_결과를_조회한다() throws Exception {
            // given
            Long roomId = 1L;
            Long contentId = 1L;

            OptionRoomBalanceVoteResponse firstGroupResponse = new OptionRoomBalanceVoteResponse(1L, "민초",
                    List.of("mohamedeu al katan", "deundeun", "rupi"), 3, 75);
            OptionRoomBalanceVoteResponse secondGroupResponse = new OptionRoomBalanceVoteResponse(2L, "반민초",
                    List.of("rapper lee"), 1, 25);
            OptionTotalBalanceVoteResponse firstTotalResponse = new OptionTotalBalanceVoteResponse(1L, "민초", 50);
            OptionTotalBalanceVoteResponse secondTotalResponse = new OptionTotalBalanceVoteResponse(2L, "반민초", 50);
            GiveUpVoteMemberResponse giveUpVoteMemberResponse = new GiveUpVoteMemberResponse(List.of("jason"), 1);

            RoomBalanceVoteResultResponse response = new RoomBalanceVoteResultResponse(
                    new ContentRoomBalanceVoteResponse(firstGroupResponse, secondGroupResponse,
                            giveUpVoteMemberResponse),
                    new ContentTotalBalanceVoteResponse(firstTotalResponse, secondTotalResponse)
            );
            when(roomBalanceVoteFacade.getAllVoteResult(roomId, contentId)).thenReturn(response);

            // when & then
            mockMvc.perform(get(END_POINT, roomId, contentId))
                    .andExpect(status().isOk())
                    .andDo(document("roomBalanceVote/findVoteResult",
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
                                            fieldWithPath("group.giveUp").type(OBJECT).description("기권한 멤버 정보"),
                                            fieldWithPath("group.giveUp.members").type(ARRAY)
                                                    .description("기권한 멤버 이름들"),
                                            fieldWithPath("group.giveUp.memberCount").type(NUMBER)
                                                    .description("기권한 멤버 수"),
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
        void 선택지에_투표를_할_수_있다() throws Exception {
            // given
            Long optionId = 1L;
            Long contentId = 1L;
            Long memberId = 1L;
            Long roomId = 1L;
            RoomBalanceVoteRequest request = new RoomBalanceVoteRequest(memberId, optionId);
            RoomBalanceVoteResponse response = new RoomBalanceVoteResponse(optionId);
            String content = objectMapper.writeValueAsString(request);
            when(roomBalanceVoteFacade.createVote(request, roomId, contentId)).thenReturn(response);

            // when & then
            mockMvc.perform(post(END_POINT, roomId, contentId)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isCreated())
                    .andDo(document("roomBalanceVote/create",
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

    @Nested
    class 투표_종료_여부_조회 {

        private static final String END_POINT = "/api/balances/rooms/{roomId}/contents/{contentId}/vote-finished";

        @Test
        void 투표가_종료되었는지_조회한다() throws Exception {
            // given
            VoteFinishedResponse response = new VoteFinishedResponse(true);
            when(roomBalanceVoteFacade.getVoteFinished(anyLong(), anyLong())).thenReturn(response);

            // when & then
            mockMvc.perform(get(END_POINT, 1L, 1L))
                    .andExpect(status().isOk())
                    .andDo(document("roomBalanceVote/voteFinished",
                                    pathParameters(
                                            parameterWithName("roomId").description("방 ID"),
                                            parameterWithName("contentId").description("콘텐츠 ID")
                                    ),
                                    responseFields(
                                            fieldWithPath("isFinished").type(BOOLEAN).description("투표 종료 여부")
                                    )
                            )
                    );
        }
    }
}
