package ddangkong.documentation.exception;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.JsonFieldType.STRING;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.request.RequestDocumentation.queryParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.documentation.exception.ExceptionController.ExceptionRequest;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;

@WebMvcTest(ExceptionController.class)
class ExceptionDocumentationTest extends BaseDocumentationTest {

    private static final String ENDPOINT = "/exception/{id}";
    private static final String PARAM_KEY = "teamName";
    private static final String PARAM_VALUE = "backend";

    @Test
    void 요청_바디_관련_예외가_발생한다() throws Exception {
        // given
        ExceptionRequest request = new ExceptionRequest(" ");
        String content = objectMapper.writeValueAsString(request);

        // when & then
        mockMvc.perform(post(ENDPOINT, 1)
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                        .param(PARAM_KEY, PARAM_VALUE)
                )
                .andExpect(status().isBadRequest())
                .andDo(document("exception/field-error",
                        requestFields(
                                fieldWithPath("memberName").type(STRING).description("field name")
                        ),
                        responseFields(
                                fieldWithPath("errorCode").type(STRING).description("에러 코드"),
                                fieldWithPath("message").type(STRING).description("에러 메시지"),
                                fieldWithPath("fieldErrors.[].field").type(STRING).description("필드명"),
                                fieldWithPath("fieldErrors.[].rejectedValue").type(STRING).description("거부된 값"),
                                fieldWithPath("fieldErrors.[].reason").type(STRING).description("거부된 이유")
                        )
                ));

    }

    @Test
    void 요청_파라미터_관련_예외가_발생한다() throws Exception {
        // given
        ExceptionRequest request = new ExceptionRequest("prin");
        String content = objectMapper.writeValueAsString(request);

        // when & then
        mockMvc.perform(post(ENDPOINT, -1)
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                        .param(PARAM_KEY, " ")
                )
                .andExpect(status().isBadRequest())
                .andDo(document("exception/url-parameter-error",
                        pathParameters(
                                parameterWithName("id").description("path variable")
                        ),
                        queryParameters(
                                parameterWithName(PARAM_KEY).description("query parameter")
                        ),
                        responseFields(
                                fieldWithPath("errorCode").type(STRING).description("에러 코드"),
                                fieldWithPath("message").type(STRING).description("에러 메시지"),
                                fieldWithPath("violationErrors.[].field").type(STRING).description("필드명"),
                                fieldWithPath("violationErrors.[].rejectedValue").type(STRING).description("거부된 값"),
                                fieldWithPath("violationErrors.[].reason").type(STRING).description("거부된 이유")
                        )
                ));

    }

    @Test
    void 비즈니스_관련_예외가_발생한다() throws Exception {
        // given
        ExceptionRequest request = new ExceptionRequest("prin");
        String content = objectMapper.writeValueAsString(request);

        // when & then
        mockMvc.perform(post(ENDPOINT, 1)
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                        .param(PARAM_KEY, PARAM_VALUE)
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
