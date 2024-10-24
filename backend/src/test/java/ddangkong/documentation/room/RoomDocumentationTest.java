package ddangkong.documentation.room;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.restdocs.cookies.CookieDocumentation.cookieWithName;
import static org.springframework.restdocs.cookies.CookieDocumentation.requestCookies;
import static org.springframework.restdocs.cookies.CookieDocumentation.responseCookies;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.delete;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
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
import static org.springframework.restdocs.request.RequestDocumentation.queryParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.room.RoomMemberCookieEncryptor;
import ddangkong.controller.room.EncryptionUtils;
import ddangkong.controller.room.RoomController;
import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.facade.balance.content.BalanceCategoryResponse;
import ddangkong.facade.room.RoomFacade;
import ddangkong.facade.room.dto.InitialRoomResponse;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinRequest;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomMemberResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoomSettingResponse;
import ddangkong.facade.room.dto.RoomStatusResponse;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import ddangkong.facade.room.member.dto.MasterResponse;
import ddangkong.facade.room.member.dto.MemberResponse;
import jakarta.servlet.http.Cookie;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;

@WebMvcTest(value = RoomController.class)
@Import(value = {RoomMemberCookieEncryptor.class, EncryptionUtils.class})
class RoomDocumentationTest extends BaseDocumentationTest {

    @MockBean
    private RoomFacade roomFacade;

    @Nested
    class 방_생성 {

        private static final String ENDPOINT = "/api/balances/rooms";

        @Test
        void 방을_생성한다() throws Exception {
            // given
            MemberResponse memberResponse = new MemberResponse(1L, "땅콩", true);
            RoomJoinResponse response = new RoomJoinResponse(1L, "488fd79f92a34131bf2a628bd58c5d2c", memberResponse);
            when(roomFacade.createRoom(anyString())).thenReturn(response);

            RoomJoinRequest request = new RoomJoinRequest("땅콩");
            String content = objectMapper.writeValueAsString(request);

            // when & then
            mockMvc.perform(post(ENDPOINT)
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
                                    fieldWithPath("roomUuid").type(STRING).description("생성된 방의 UUID"),
                                    fieldWithPath("member.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("member.nickname").type(STRING).description("멤버 닉네임"),
                                    fieldWithPath("member.isMaster").type(BOOLEAN).description("방장 여부")
                            ),
                            responseCookies(
                                    cookieWithName("test_cookie").description("방 재참여시 사용되는 쿠키")
                            )
                    ));
        }

    }

    @Nested
    class 방_정보_조회 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}";

        @Test
        void 방_정보를_조회한다() throws Exception {
            // given
            Category category = Category.IF;
            RoomSettingResponse roomSetting = new RoomSettingResponse(5, 30, BalanceCategoryResponse.create(category));
            List<MemberResponse> members = List.of(
                    new MemberResponse(1L, "땅콩", true),
                    new MemberResponse(2L, "타콩", false)
            );
            MasterResponse master = new MasterResponse(1L, "땅콩");
            RoomInfoResponse response = new RoomInfoResponse(false, roomSetting, members, master);
            when(roomFacade.getRoomInfo(anyLong())).thenReturn(response);

            // when & then
            mockMvc.perform(get(ENDPOINT, 1L))
                    .andExpect(status().isOk())
                    .andDo(document("room/info",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            responseFields(
                                    fieldWithPath("isGameStart").type(BOOLEAN).description("게임 시작 여부"),
                                    fieldWithPath("roomSetting").type(OBJECT).description("현재 방 설정 값"),
                                    fieldWithPath("roomSetting.totalRound").type(NUMBER).description("전체 라운드"),
                                    fieldWithPath("roomSetting.timeLimit").type(NUMBER).description("라운드 당 시간제한(ms)"),
                                    fieldWithPath("roomSetting.category").type(OBJECT).description("컨텐츠 카테고리"),
                                    fieldWithPath("roomSetting.category.value").type(STRING).description("카테고리 값"),
                                    fieldWithPath("roomSetting.category.label").type(STRING).description("카테고리 표기"),
                                    fieldWithPath("members").type(ARRAY).description("방에 참여중 인원 목록"),
                                    fieldWithPath("members[].memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("members[].nickname").type(STRING).description("멤버 닉네임"),
                                    fieldWithPath("members[].isMaster").type(BOOLEAN).description("방장 여부"),
                                    fieldWithPath("master").type(OBJECT).description("방장 정보"),
                                    fieldWithPath("master.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("master.nickname").type(STRING).description("닉네임")
                            )
                    ));
        }
    }

    @Nested
    class 방_설정_변경 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}";

        @Test
        void 방의_설정_정보를_변경한다() throws Exception {
            // given
            int totalRound = 5;
            int timeLimit = 10_000;
            Category category = Category.IF;
            RoomSettingRequest content = new RoomSettingRequest(totalRound, timeLimit, category);

            // then
            mockMvc.perform(patch(ENDPOINT, 1L)
                            .content(objectMapper.writeValueAsString(content))
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isNoContent())
                    .andDo(document("room/setting",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            requestFields(
                                    fieldWithPath("totalRound").type(NUMBER).description("변경할 총 라운드"),
                                    fieldWithPath("timeLimit").type(NUMBER).description("변경할 제한 시간"),
                                    fieldWithPath("category").type(STRING).description("변경할 카테고리")
                            )
                    ));
        }
    }

    @Nested
    class 방_참여 {

        private static final String ENDPOINT = "/api/balances/rooms/{uuid}/members";

        @Test
        void 방에_참여한다() throws Exception {
            // given
            RoomJoinResponse response = new RoomJoinResponse(1L, "488fd79f92a34131bf2a628bd58c5d2c",
                    new MemberResponse(2L, "타콩", false));
            when(roomFacade.joinRoom(anyString(), anyString())).thenReturn(response);

            RoomJoinRequest request = new RoomJoinRequest("타콩");
            String content = objectMapper.writeValueAsString(request);

            //when & then
            mockMvc.perform(post(ENDPOINT, "488fd79f92a34131bf2a628bd58c5d2c")
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isCreated())
                    .andDo(document("room/join",
                            pathParameters(
                                    parameterWithName("uuid").description("참여하는 방 UUID")
                            ),
                            requestFields(
                                    fieldWithPath("nickname").description("닉네임")
                            ),
                            responseFields(
                                    fieldWithPath("roomId").type(NUMBER).description("참여한 방 ID"),
                                    fieldWithPath("roomUuid").type(STRING).description("참여한 방 UUID"),
                                    fieldWithPath("member.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("member.nickname").type(STRING).description("멤버 닉네임"),
                                    fieldWithPath("member.isMaster").type(BOOLEAN).description("방장 여부")
                            ),
                            responseCookies(
                                    cookieWithName("test_cookie").description("방 재참여시 사용되는 쿠키")
                            )
                    ));
        }
    }

    @Nested
    class 사용자_정보_조회 {

        private static final String ENDPOINT = "/api/balances/rooms/member";

        @Test
        void 사용자_정보를_조회한다() throws Exception {
            // given
            RoomMemberResponse response = new RoomMemberResponse(1L, "488fd79f92a34131bf2a628bd58c5d2c",
                    new MemberResponse(2L, "타콩", false));
            when(roomFacade.getRoomMemberInfo(anyLong())).thenReturn(response);

            //when & then
            mockMvc.perform(get(ENDPOINT)
                            .contentType(MediaType.APPLICATION_JSON)
                            .cookie(new Cookie("test_cookie", "oNnHwjSR1G4E5L8Mute61w=="))
                    )
                    .andExpect(status().isOk())
                    .andDo(document("room/member",
                            requestCookies(
                                    cookieWithName("test_cookie").description("사용자 인증에 필요한 쿠키(쿠키의 키 값은 UUID로 예측할 수 없는 값이 들어감)")
                            ),
                            responseFields(
                                    fieldWithPath("roomId").type(NUMBER).description("참여한 방 ID"),
                                    fieldWithPath("roomUuid").type(STRING).description("참여한 방 UUID"),
                                    fieldWithPath("member.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("member.nickname").type(STRING).description("멤버 닉네임"),
                                    fieldWithPath("member.isMaster").type(BOOLEAN).description("방장 여부")
                            )
                    ));
        }
    }

    @Nested
    class 방_나가기 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/members/{memberId}";

        @Test
        void 방에서_나간다() throws Exception {
            // given
            Long roomId = 1L;
            Long memberId = 1L;

            //when & then
            mockMvc.perform(delete(ENDPOINT, roomId, memberId)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isNoContent())
                    .andDo(document("room/leave",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID"),
                                    parameterWithName("memberId").description("멤버 ID")
                            )
                    ));
        }
    }

    @Nested
    class 게임_시작 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/start";

        @Test
        void 게임을_시작한다() throws Exception {
            // given
            Long roomId = 1L;

            // when & then
            mockMvc.perform(patch(ENDPOINT, roomId))
                    .andExpect(status().isNoContent())
                    .andDo(document("room/start",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            )
                    ));
        }
    }

    @Nested
    class 다음_라운드로_이동 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/next-round";

        @Test
        void 다음_라운드로_이동한다() throws Exception {
            // when & then
            mockMvc.perform(patch(ENDPOINT, 1L)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isNoContent())
                    .andDo(document("room/nextRound",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            )
                    ));
        }
    }

    @Nested
    class 라운드_종료_여부 {

        private static final String ENDPOINT = "/api/balances/rooms/{roomId}/round-finished";

        @Test
        void 라운드가_종료되었는지_조회한다() throws Exception {
            // given
            MasterResponse prin = new MasterResponse(1L, "프콩");
            RoundFinishedResponse response = new RoundFinishedResponse(true, false, prin);
            when(roomFacade.getRoundFinished(anyLong(), anyInt())).thenReturn(response);

            // when & then
            mockMvc.perform(get(ENDPOINT, 1)
                            .param("round", "1")
                    )
                    .andExpect(status().isOk())
                    .andDo(document("room/roundFinished",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            queryParameters(
                                    parameterWithName("round").description("라운드")
                            ),
                            responseFields(
                                    fieldWithPath("isRoundFinished").description("라운드 종료 여부"),
                                    fieldWithPath("isGameFinished").description("게임 종료 여부"),
                                    fieldWithPath("master").type(OBJECT).description("방장 정보"),
                                    fieldWithPath("master.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("master.nickname").type(STRING).description("닉네임")
                            )
                    ));
        }
    }

    @Nested
    class 방_게임_참여_가능_여부 {
        private static final String ENDPOINT = "/api/balances/rooms/{uuid}/status";

        @Test
        void 방에서_게임이_참여_가능_여부를_조회한다() throws Exception {
            // given
            RoomStatusResponse response = new RoomStatusResponse(true);
            when(roomFacade.getRoomStatus(anyString())).thenReturn(response);

            // when & then
            mockMvc.perform(get(ENDPOINT, "488fd79f92a34131bf2a628bd58c5d2c"))
                    .andExpect(status().isOk())
                    .andDo(document("room/status",
                            pathParameters(
                                    parameterWithName("uuid").description("방의 UUID")
                            ),
                            responseFields(
                                    fieldWithPath("isJoinable").description("방에 참가 가능 여부")
                            )
                    ));
        }
    }

    @Nested
    class 방_초기화 {

        @Test
        void 방을_초기화한다() throws Exception {
            // given
            String endpoint = "/api/balances/rooms/{roomId}/reset";
            doNothing().when(roomFacade).resetRoom(anyLong());

            // when & then
            mockMvc.perform(patch(endpoint, 1L))
                    .andExpect(status().isNoContent())
                    .andDo(document("room/reset",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            )
                    ));
        }

        @Test
        void 방이_초기화되었는지_확인한다() throws Exception {
            // given
            String endpoint = "/api/balances/rooms/{roomId}/initial";
            MasterResponse prin = new MasterResponse(1L, "프콩");
            InitialRoomResponse response = new InitialRoomResponse(true, prin);
            when(roomFacade.isInitialRoom(anyLong())).thenReturn(response);

            // when & then
            mockMvc.perform(get(endpoint, 1L))
                    .andExpect(status().isOk())
                    .andDo(document("room/initial",
                            pathParameters(
                                    parameterWithName("roomId").description("방 ID")
                            ),
                            responseFields(
                                    fieldWithPath("isInitial").description("방 초기화 여부"),
                                    fieldWithPath("master").type(OBJECT).description("방장 정보"),
                                    fieldWithPath("master.memberId").type(NUMBER).description("멤버 ID"),
                                    fieldWithPath("master.nickname").type(STRING).description("닉네임")
                            )
                    ));

        }
    }
}
