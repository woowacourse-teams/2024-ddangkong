package ddangkong.documentation.exception;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.documentation.exception.ExceptionController.ExceptionRequest;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;

@WebMvcTest(ExceptionController.class)
class ExceptionDocumentationTest extends BaseDocumentationTest {

    @Test
    void 요청_바디_관련_예외가_발생한다() throws Exception {
        // given
        ExceptionRequest request = new ExceptionRequest(null);
        String content = objectMapper.writeValueAsString(request);

        // when & then
        mockMvc.perform(post("/exception/1")
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isBadRequest())
                .andDo(document("exception/field-error",
                        responseFields(
                                fieldWithPath("errorCode").description("에러 코드"),
                                fieldWithPath("message").description("에러 메시지"),
                                fieldWithPath("fieldErrors.[].field").description("필드명"),
                                fieldWithPath("fieldErrors.[].rejectedValue").description("거부된 값"),
                                fieldWithPath("fieldErrors.[].reason").description("거부된 이유")
                        )
                ));

    }

    @Test
    void 요청_파라미터_관련_예외가_발생한다() throws Exception {
        // given
        ExceptionRequest request = new ExceptionRequest("prin");
        String content = objectMapper.writeValueAsString(request);

        // when & then
        mockMvc.perform(post("/exception/-1")
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isBadRequest())
                .andDo(document("exception/url-parameter-error",
                        responseFields(
                                fieldWithPath("errorCode").description("에러 코드"),
                                fieldWithPath("message").description("에러 메시지"),
                                fieldWithPath("violationErrors.[].field").description("필드명"),
                                fieldWithPath("violationErrors.[].rejectedValue").description("거부된 값"),
                                fieldWithPath("violationErrors.[].reason").description("거부된 이유")
                        )
                ));

    }

    @Test
    void 비즈니스_관련_예외가_발생한다() throws Exception {
        // given
        ExceptionRequest request = new ExceptionRequest("prin");
        String content = objectMapper.writeValueAsString(request);

        // when & then
        mockMvc.perform(post("/exception/1")
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isBadRequest())
                .andDo(document("exception/business-error",
                        responseFields(
                                fieldWithPath("errorCode").type(STRING).description("에러 코드"),
                                fieldWithPath("message").type(STRING).description("에러 메시지")
                        )
                ));
    }
}
