package ddangkong.controller.admin;

import ddangkong.facade.admin.AdminService;
import ddangkong.facade.admin.dto.AdminLoginRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api")
public class AdminController {

    private final AdminService adminService;

    private final String sessionKey;

    public AdminController(AdminService adminService, @Value("${admin.session-key}") String sessionKey) {
        this.adminService = adminService;
        this.sessionKey = sessionKey;
    }

    @PostMapping("/admin/login")
    public void login(@RequestBody AdminLoginRequest loginRequest, HttpServletRequest httpRequest) {
        adminService.validatePassword(loginRequest);

        Admin admin = new Admin(loginRequest.nickname());
        HttpSession session = httpRequest.getSession();
        session.setAttribute(sessionKey, admin);
        log.info("어드민이 로그인 했습니다. nickname = {}, session = {}", loginRequest.nickname(), session.getId());
    }

    @AdminAuth
    @PostMapping("/admin/logout")
    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            Admin admin = (Admin) session.getAttribute(sessionKey);
            session.invalidate();
            log.info("어드민이 로그아웃 했습니다. nickname = {}, session = {}", admin.getNickname(), session.getId());
        }
    }
}
