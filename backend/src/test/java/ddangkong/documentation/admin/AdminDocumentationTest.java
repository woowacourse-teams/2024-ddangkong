package ddangkong.documentation.admin;

import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.admin.AdminController;
import ddangkong.facade.admin.dto.AdminLoginRequest;
import ddangkong.facade.admin.AdminService;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;

@WebMvcTest(value = AdminController.class)
public class AdminDocumentationTest extends BaseAdminDocumentationTest {

    @MockBean
    private AdminService adminService;

    @Nested
    class 어드민_로그인 {

        private static final String ENDPOINT = "/api/admin/login";

        @Test
        void 로그인_할_수_있다() throws Exception {
            // given
            AdminLoginRequest request = new AdminLoginRequest("이든", "password");
            String content = objectMapper.writeValueAsString(request);
            doNothing().when(adminService).validatePassword(request);

            // when & then
            mockMvc.perform(post(ENDPOINT)
                            .content(content)
                            .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andExpect(status().isOk())
                    .andDo(document("admin/auth/login",
                            requestFields(
                                    fieldWithPath("nickname").type(STRING).description("닉네임"),
                                    fieldWithPath("password").type(STRING).description("어드민 비밀번호")
                            )
                    ));
        }
    }

    @Nested
    class 어드민_로그아웃 {

        private static final String ENDPOINT = "/api/admin/logout";

        @Test
        void 로그아웃_할_수_있다() throws Exception {
            // when & then
            mockMvc.perform(post(ENDPOINT)
                            .session(session))
                    .andExpect(status().isOk())
                    .andDo(document("admin/auth/logout"));
        }
    }
}
