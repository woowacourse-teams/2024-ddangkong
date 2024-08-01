package ddangkong.documentation.balance.room;


import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.JsonFieldType.BOOLEAN;
import static org.springframework.restdocs.payload.JsonFieldType.NUMBER;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.balance.content.dto.BalanceContentResponse;
import ddangkong.controller.balance.member.dto.MemberResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionResponse;
import ddangkong.controller.balance.room.RoomController;
import ddangkong.controller.balance.room.dto.RoomInfoResponse;
import ddangkong.controller.balance.room.dto.RoomJoinRequest;
import ddangkong.controller.balance.room.dto.RoomJoinResponse;
import ddangkong.controller.balance.room.dto.RoomSettingResponse;
import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.service.balance.room.RoomService;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;

@WebMvcTest(RoomController.class)
class RoomDocumentationTest extends BaseDocumentationTest {

    @MockBean
    private RoomService roomService;

    @Nested
    class 방_생성 {

        private static final String ENDPOINT = "/api/balances/rooms";

        @Test
        void 방을_생성한다() throws Exception {
            //given
            RoomJoinRequest request = new RoomJoinRequest("땅콩");
            String content = objectMapper.writeValueAsString(request);

            //when
            MemberResponse memberResponse = new MemberResponse(1L, "땅콩", true);
            RoomJoinResponse response = new RoomJoinResponse(1L, memberResponse);
            when(roomService.createRoom(anyString())).thenReturn(response);

            //then
            mockMvc.perform(post(ENDPOINT, 1L)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isCreated())
                    .andDo(document("room/create",
                            requestFields(
                                    fieldWithPath("nickname").description("닉네임")
                            ),
                            responseFields(
                                    fieldWithPath("roomId").type(NUMBER).description("생성된 방 ID"),
                                    fieldWithPath("member.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("member.nickname").type(STRING).description("멤버 닉네임"),
                                    fieldWithPath("member.isMaster").type(BOOLEAN).description("방장 여부")
                            )
                    ));
        }
    }

    @Nested
    class 방_참여 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/members";

        @Test
        void 방에_참여한다() throws Exception {
            //given
            RoomJoinRequest request = new RoomJoinRequest("타콩");
            RoomJoinResponse response = new RoomJoinResponse(1L, new MemberResponse(2L, "타콩", false));
            String content = objectMapper.writeValueAsString(request);
            when(roomService.joinRoom(anyString(), anyLong())).thenReturn(response);

            //when & then
            mockMvc.perform(post(ENDPOINT, 1L)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isCreated())
                    .andDo(document("room/join",
                            pathParameters(
                                    parameterWithName("roomId").description("참여방 ID")
                            ),
                            requestFields(
                                    fieldWithPath("nickname").description("닉네임")
                            ),
                            responseFields(
                                    fieldWithPath("roomId").type(NUMBER).description("생성된 방 ID"),
                                    fieldWithPath("member.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("member.nickname").type(STRING).description("멤버 닉네임"),
                                    fieldWithPath("member.isMaster").type(BOOLEAN).description("방장 여부")
                            )
                    ));
        }
    }

    @Nested
    class 방_정보_조회 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}";

        @Test
        void 방_정보를_조회한다() throws Exception {
            //given
            int totalRound = 5;
            int timeLimit = 30000;
            RoomInfoResponse response = new RoomInfoResponse(
                    false,
                    new RoomSettingResponse(totalRound, timeLimit),
                    List.of(
                            new MemberResponse(1L, "땅콩", true),
                            new MemberResponse(2L, "타콩", false)
                    ));

            //when
            when(roomService.findRoomInfo(anyLong())).thenReturn(response);

            //then
            mockMvc.perform(get(ENDPOINT, 1L))
                    .andExpect(status().isOk())
                    .andDo(document("room/info",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            responseFields(
                                    fieldWithPath("isGameStart").type(BOOLEAN).description("게임 시작 여부"),
                                    fieldWithPath("roomSetting").type(JsonFieldType.OBJECT).description("현재 방 설정 값"),
                                    fieldWithPath("roomSetting.totalRound").type(NUMBER).description("전체 라운드"),
                                    fieldWithPath("roomSetting.timeLimit").type(NUMBER).description("라운드 당 시간제한(ms)"),
                                    fieldWithPath("members").type(JsonFieldType.ARRAY).description("방에 참여중 인원 목록"),
                                    fieldWithPath("members[].memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("members[].nickname").type(STRING).description("멤버 닉네임"),
                                    fieldWithPath("members[].isMaster").type(BOOLEAN).description("방장 여부")
                            )
                    ));
        }
    }

    @Nested
    class 다음_라운드로_이동 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/contents";

        @Test
        void 다음_라운드로_이동한다() throws Exception {
            //given
            BalanceOptionResponse firstOption = new BalanceOptionResponse(3L, "10년 동안 한 사람과 연애한 애인");
            BalanceOptionResponse secondOption = new BalanceOptionResponse(4L, "1년 동안 다섯 사람과 연애한 애인");
            BalanceContentResponse response = new BalanceContentResponse(
                    2L,
                    Category.EXAMPLE,
                    5,
                    2,
                    "10년 동안 한 사람과 연애한 애인 VS 1년 동안 다섯 사람과 연애한 애인",
                    firstOption,
                    secondOption
            );

            //when
            when(roomService.moveToNextRound(anyLong())).thenReturn(response);

            //then
            mockMvc.perform(post(ENDPOINT, 1L))
                    .andExpect(status().isCreated())
                    .andDo(document("room/next",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            responseFields(
                                    fieldWithPath("contentId").type(NUMBER).description("콘텐츠 ID"),
                                    fieldWithPath("category").type(STRING).description("콘텐츠 카테고리"),
                                    fieldWithPath("totalRound").type(NUMBER).description("총 라운드 수"),
                                    fieldWithPath("currentRound").type(NUMBER).description("현재 라운드"),
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
