package ddangkong.controller.room;

import jakarta.servlet.http.Cookie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CookieEncryptor {

    private final EncryptionUtils encryptionUtils;

    private final String key;

    public CookieEncryptor(EncryptionUtils encryptionUtils, @Value("${cookie.key}") String key) {
        this.encryptionUtils = encryptionUtils;
        this.key = key;
    }

    public Cookie getEncodedCookie(Object value) {
        String encrypt = encryptionUtils.encrypt(String.valueOf(value));
        return new Cookie(key, encrypt);
    }

    public String getDecodedCookieValue(String cookieValue) {
        return encryptionUtils.decrypt(cookieValue);
    }
}
