package ddangkong.facade.admin;

import ddangkong.exception.admin.NotMatchAdminPasswordException;
import ddangkong.facade.admin.dto.AdminLoginRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final String adminPassword;

    public AdminService(@Value("${admin.password}") String adminPassword) {
        this.adminPassword = adminPassword;
    }

    public void validatePassword(AdminLoginRequest request) {
        if (!adminPassword.equals(request.password())) {
            throw new NotMatchAdminPasswordException();
        }
    }
}
