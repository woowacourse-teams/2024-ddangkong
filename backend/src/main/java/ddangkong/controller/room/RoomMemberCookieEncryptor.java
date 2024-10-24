package ddangkong.controller.room;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.server.Cookie.SameSite;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

@Component
public class RoomMemberCookieEncryptor {

    private static final String DEFAULT_PATH = "/api/balances/rooms";
    private static final String LOCALHOST = "http://localhost";

    private final EncryptionUtils encryptionUtils;

    private final String rejoinKey;

    public RoomMemberCookieEncryptor(EncryptionUtils encryptionUtils, @Value("${cookie.rejoin-key}") String rejoinKey) {
        this.encryptionUtils = encryptionUtils;
        this.rejoinKey = rejoinKey;
    }

    public ResponseCookie getEncodedCookie(Object value, String origin) {
        String encrypt = encryptionUtils.encrypt(String.valueOf(value));
        return ResponseCookie.from(rejoinKey, encrypt)
                .httpOnly(true)
                .secure(true)
                .path(DEFAULT_PATH)
                .sameSite(getSameSiteOption(origin))
                .build();
    }

    public ResponseCookie deleteCookie(String origin) {
        return ResponseCookie.from(rejoinKey, null)
                .httpOnly(true)
                .secure(true)
                .path(DEFAULT_PATH)
                .sameSite(getSameSiteOption(origin))
                .maxAge(0)
                .build();
    }

    private String getSameSiteOption(String origin) {
        if (origin != null && origin.startsWith(LOCALHOST)) {
            return SameSite.NONE.attributeValue();
        }
        return SameSite.LAX.attributeValue();
    }

    public Long getDecodedCookieValue(String cookieValue) {
        return Long.parseLong(encryptionUtils.decrypt(cookieValue));
    }
}
