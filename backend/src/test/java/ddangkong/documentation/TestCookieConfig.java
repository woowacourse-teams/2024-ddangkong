package ddangkong.documentation;

import ddangkong.aop.cookie.EncryptionUtils;
import ddangkong.aop.cookie.RoomMemberCookieEncryptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TestCookieConfig {

    @Bean
    public RoomMemberCookieEncryptor roomMemberCookieEncryptor() {
        return new RoomMemberCookieEncryptor(encryptionUtils(), "test_cookie");
    }

    @Bean
    public EncryptionUtils encryptionUtils() {
        return new EncryptionUtils("AES", "1234567890123456");
    }
}
