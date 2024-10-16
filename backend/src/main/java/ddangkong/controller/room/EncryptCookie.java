package ddangkong.controller.room;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EncryptCookie {

    private final EncryptionUtils encryptionUtils;
    @Value("${cookie.key}")
    private String key;

    public EncryptCookie(EncryptionUtils encryptionUtils) {
        this.encryptionUtils = encryptionUtils;
    }

    public void setCookie(HttpServletResponse response, Object value) {
        String encrypt = encryptionUtils.encrypt(String.valueOf(value));
        Cookie cookie = new Cookie(key, encrypt);
        response.addCookie(cookie);
    }

    public String getDecodedCookieValue(String cookieValue) {
        return encryptionUtils.decrypt(cookieValue);
    }
}
