package ddangkong.controller.room;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

@Component
public class RoomMemberCookieEncryptor {

    private static final String DEFAULT_PATH = "/api/balances/rooms";
    private static final String NONE = "None";
    private static final String LAX = "Lax";
    private static final String LOCALHOST = "http://localhost";

    private final EncryptionUtils encryptionUtils;

    private final String rejoinKey;

    public RoomMemberCookieEncryptor(EncryptionUtils encryptionUtils, @Value("${cookie.rejoin-key}") String rejoinKey) {
        this.encryptionUtils = encryptionUtils;
        this.rejoinKey = rejoinKey;
    }

    public ResponseCookie getEncodedCookie(Object value, String requestURI) {
        String encrypt = encryptionUtils.encrypt(String.valueOf(value));
        return ResponseCookie.from(rejoinKey, encrypt)
                .httpOnly(true)
                .secure(true)
                .path(DEFAULT_PATH)
                .sameSite(getSameSiteOption(requestURI))
                .build();
    }

    private String getSameSiteOption(String uri) {
        if (uri.startsWith(LOCALHOST)) {
            return NONE;
        }
        return LAX;
    }

    public Long getDecodedCookieValue(String cookieValue) {
        return Long.parseLong(encryptionUtils.decrypt(cookieValue));
    }
}
