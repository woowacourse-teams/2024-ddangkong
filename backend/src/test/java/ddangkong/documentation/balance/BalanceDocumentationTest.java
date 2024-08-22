package ddangkong.documentation.balance;

import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.JsonFieldType.ARRAY;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import ddangkong.controller.balance.BalanceController;
import ddangkong.documentation.BaseDocumentationTest;
import ddangkong.domain.balance.content.Category;
import ddangkong.facade.balance.content.BalanceCategoriesResponse;
import ddangkong.facade.balance.content.BalanceFacade;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@WebMvcTest(BalanceController.class)
public class BalanceDocumentationTest extends BaseDocumentationTest {

    @MockBean
    private BalanceFacade balanceFacade;

    @Nested
    class 카테고리 {

        private static final String ENDPOINT = "/api/balances/categories";

        @Test
        void 카테고리_목록을_조회한다() throws Exception {
            // given
            BalanceCategoriesResponse response = BalanceCategoriesResponse.create(Category.getCategories());
            when(balanceFacade.getBalanceCategories()).thenReturn(response);

            // when & then
            mockMvc.perform(get(ENDPOINT))
                    .andExpect(status().isOk())
                    .andDo(document("balance/category",
                            responseFields(
                                    fieldWithPath("categories").type(ARRAY).description("카테고리 목록")
                            )
                    ));
        }
    }
}
