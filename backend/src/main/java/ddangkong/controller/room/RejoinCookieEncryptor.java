package ddangkong.controller.room;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

@Component
public class RejoinCookieEncryptor {

    private static final String SAME_SITE_OPTION = "None";
    private static final String DEFAULT_PATH = "/api/balances/rooms";

    private final EncryptionUtils encryptionUtils;

    private final String rejoinKey;

    public RejoinCookieEncryptor(EncryptionUtils encryptionUtils, @Value("${cookie.rejoin-key}") String rejoinKey) {
        this.encryptionUtils = encryptionUtils;
        this.rejoinKey = rejoinKey;
    }

    public ResponseCookie getEncodedCookie(Object value) {
        String encrypt = encryptionUtils.encrypt(String.valueOf(value));
        return ResponseCookie.from(rejoinKey, encrypt)
                .httpOnly(true)
                .secure(true)
                .path(DEFAULT_PATH)
                .sameSite(SAME_SITE_OPTION)
                .build();
    }

    public Long getDecodedCookieValue(String cookieValue) {
        return Long.parseLong(encryptionUtils.decrypt(cookieValue));
    }
}
