package ddangkong.controller.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.controller.BaseControllerTest;
import ddangkong.exception.room.InvalidCookieException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class EncryptionUtilsTest extends BaseControllerTest {

    @Autowired
    private EncryptionUtils encryptionUtils;

    @Nested
    class 암호화_테스트 {

        @Test
        void 값을_인코딩_할_수_있다() {
            // given
            String value = "ThisIsMySecretKe";

            // when
            String encrypt = encryptionUtils.encrypt(value);

            // then
            assertThat(encrypt).isNotEqualTo(value);
        }

        @Test
        void 값을_디코딩_할_수_있다() {
            // given
            String value = "ThisIsMySecretKe";
            String encoded = "GoyXxFK7Tzpwbe9IW9cfegUBh6DN5amHLLqwkatz5VM=";

            // when
            String encrypt = encryptionUtils.decrypt(encoded);

            // then
            assertThat(encrypt).isEqualTo(value);
        }

        @Test
        void 값을_디코딩_하지_못하는_경우_예외가_발생한다() {
            // given
            String value = "ThisIsMySecretKe";
            String encoded = "YWFhYWFhYWFhYWFhYWFhYQ==";

            // when
            assertThatThrownBy(() -> encryptionUtils.decrypt(encoded))
                    .isExactlyInstanceOf(InvalidCookieException.class);
        }
    }
}


