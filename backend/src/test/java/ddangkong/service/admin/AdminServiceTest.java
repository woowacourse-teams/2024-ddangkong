package ddangkong.service.admin;

import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.admin.NotMatchAdminPasswordException;
import ddangkong.facade.BaseServiceTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

class AdminServiceTest extends BaseServiceTest {

    @Value("${admin.password}")
    private String adminPassword;

    @Autowired
    private AdminService adminService;

    @Nested
    class 어드민_비밀번호_검증 {

        @Test
        void 어드민_비밀번호가_일치하면_아무_일도_일어나지_않는다() {
            // when & then
            assertThatCode(() -> adminService.validatePassword(adminPassword))
                    .doesNotThrowAnyException();
        }

        @Test
        void 어드민_비밀번호가_다르면_예외가_발생한다() {
            // given
            String notMatchPassword = "no-password";

            // when & then
            assertThatThrownBy(() -> adminService.validatePassword(notMatchPassword))
                    .isInstanceOf(NotMatchAdminPasswordException.class);
        }
    }
}
