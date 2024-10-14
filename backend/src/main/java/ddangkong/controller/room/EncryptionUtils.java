package ddangkong.controller.room;

import ddangkong.exception.room.CipherException;
import jakarta.annotation.PostConstruct;
import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EncryptionUtils {

    @Value("${aes.algorithm}")
    private String algorithm;
    @Value("${aes.secret-key}")
    private String secretKeyString;
    private SecretKey secretKey;

    @PostConstruct
    private void init() {
        byte[] secretKeyBytes = secretKeyString.getBytes();
        secretKey = new SecretKeySpec(secretKeyBytes, 0, secretKeyBytes.length, algorithm);
    }

    public String encrypt(String plainText) { // TODO functional interface
        try {
            Cipher cipher = Cipher.getInstance(algorithm);
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            byte[] encrypted = cipher.doFinal(plainText.getBytes());
            return Base64.getEncoder().encodeToString(encrypted);
        } catch (Exception e) {
            throw new CipherException();
        }
    }

    public String decrypt(String encrypted) {
        try {
            Cipher cipher = Cipher.getInstance(algorithm);
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            byte[] decodeBytes = Base64.getDecoder().decode(encrypted);
            byte[] decryptedBytes = cipher.doFinal(decodeBytes);
            return new String(decryptedBytes);
        } catch (Exception e) {
            throw new CipherException();
        }
    }
}
