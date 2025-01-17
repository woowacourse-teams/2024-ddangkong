package ddangkong.documentation;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.modifyHeaders;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.modifyUris;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import com.fasterxml.jackson.databind.ObjectMapper;
import ddangkong.aop.cookie.EncryptionUtils;
import ddangkong.aop.cookie.RoomMemberCookieAspect;
import ddangkong.aop.cookie.RoomMemberCookieEncryptor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpHeaders;
import org.springframework.restdocs.RestDocumentationContextProvider;
import org.springframework.restdocs.RestDocumentationExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@ExtendWith(RestDocumentationExtension.class)
@Import(value = {RoomMemberCookieEncryptor.class, EncryptionUtils.class, RoomMemberCookieAspect.class})
public abstract class BaseDocumentationTest {

    @Autowired
    protected ObjectMapper objectMapper;

    protected MockMvc mockMvc;

    @BeforeEach
    void setUp(WebApplicationContext context, RestDocumentationContextProvider restDocumentation) {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context)
                .alwaysDo(print())
                .apply(documentationConfiguration(restDocumentation)
                        .operationPreprocessors()
                        .withRequestDefaults(
                                modifyUris()
                                        .scheme("https")
                                        .host("api.dev.ddangkong.kr")
                                        .removePort(),
                                prettyPrint(),
                                modifyHeaders().remove(HttpHeaders.CONTENT_LENGTH)
                        )
                        .withResponseDefaults(
                                prettyPrint(),
                                modifyHeaders().remove(HttpHeaders.CONTENT_LENGTH)
                        )
                )
                .build();
    }
}
