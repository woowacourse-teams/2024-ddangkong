package ddangkong.controller.room;

import jakarta.servlet.http.Cookie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class RejoinCookieEncryptor {

    private final EncryptionUtils encryptionUtils;

    private final String rejoinKey;

    public RejoinCookieEncryptor(EncryptionUtils encryptionUtils, @Value("${cookie.rejoin-key}") String rejoinKey) {
        this.encryptionUtils = encryptionUtils;
        this.rejoinKey = rejoinKey;
    }

    public Cookie getEncodedCookie(Object value) {
        String encrypt = encryptionUtils.encrypt(String.valueOf(value));
        return new Cookie(rejoinKey, encrypt);
    }

    public Long getDecodedCookieValue(String cookieValue) {
        return Long.parseLong(encryptionUtils.decrypt(cookieValue));
    }
}
