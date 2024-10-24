package ddangkong.controller.room;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.controller.BaseControllerTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;

class RoomMemberCookieEncryptorTest extends BaseControllerTest {

    @Autowired
    private RoomMemberCookieEncryptor roomMemberCookieEncryptor;

    @Nested
    class 방_멤버_쿠키_암호화 {
        
        @Test
        void 로컬_환경인_경우_SameSite는_None_이다() {
            // given
            String value = "ThisIsMySecretKe";
            String origin = "http://localhost:3306/api";
           
            // when
            ResponseCookie encodedCookie = roomMemberCookieEncryptor.getEncodedCookie(value, origin);

            // then
            assertThat(encodedCookie.getSameSite()).isEqualTo("None");
        }

        @Test
        void 로컬_환경이_아닌_경우_SameSite는_Lax_이다() {
            // given
            String value = "ThisIsMySecretKe";
            String origin = "ddangkong.kr";

            // when
            ResponseCookie encodedCookie = roomMemberCookieEncryptor.getEncodedCookie(value, origin);

            // then
            assertThat(encodedCookie.getSameSite()).isEqualTo("Lax");
        }
    }
}
