package ddangkong.controller.room;

import ddangkong.exception.room.CookieNotFoundException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.Arrays;
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

    public String getCookieValue(HttpServletRequest request) {
        return Arrays.stream(request.getCookies())
                .filter(cookie -> cookie.getName().equals(key))
                .findAny()
                .orElseThrow(CookieNotFoundException::new)
                .getValue();
    }
}
