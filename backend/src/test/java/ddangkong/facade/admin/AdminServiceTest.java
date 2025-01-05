package ddangkong.facade.admin;

import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.admin.NotMatchAdminPasswordException;
import ddangkong.facade.BaseServiceTest;
import ddangkong.facade.admin.dto.AdminLoginRequest;
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
            // given
            AdminLoginRequest request = new AdminLoginRequest("admin", adminPassword);

            // when & then
            assertThatCode(() -> adminService.validatePassword(request))
                    .doesNotThrowAnyException();
        }

        @Test
        void 어드민_비밀번호가_다르면_예외가_발생한다() {
            // given
            AdminLoginRequest request = new AdminLoginRequest("admin", "no-password");

            // when & then
            assertThatThrownBy(() -> adminService.validatePassword(request))
                    .isInstanceOf(NotMatchAdminPasswordException.class);
        }
    }
}
