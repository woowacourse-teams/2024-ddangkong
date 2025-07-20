package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.INVALID_IMAGE_URL;

import ddangkong.exception.BadRequestException;

public class InvalidImageUrlException extends BadRequestException {

    public InvalidImageUrlException() {
        super(INVALID_IMAGE_URL.getMessage());
    }

    @Override
    public String getErrorCode() {
        return INVALID_IMAGE_URL.name();
    }
}
