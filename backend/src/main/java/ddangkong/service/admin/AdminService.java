package ddangkong.service.admin;

import ddangkong.exception.admin.NotMatchAdminPasswordException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final String adminPassword;

    public AdminService(@Value("${admin.password}") String adminPassword) {
        this.adminPassword = adminPassword;
    }

    public void validatePassword(String password) {
        if (!adminPassword.equals(password)) {
            throw new NotMatchAdminPasswordException();
        }
    }
}
