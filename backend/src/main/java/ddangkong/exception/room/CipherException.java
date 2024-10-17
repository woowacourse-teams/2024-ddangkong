package ddangkong.exception.room;

import ddangkong.exception.InternalServerException;
import ddangkong.exception.ServerErrorCode;

public class CipherException extends InternalServerException {
    public CipherException() {
        super(ServerErrorCode.CIPHER_EXCEPTION.getMessage());
    }
}
