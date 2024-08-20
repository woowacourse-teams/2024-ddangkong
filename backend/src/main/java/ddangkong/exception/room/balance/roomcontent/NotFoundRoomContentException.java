package ddangkong.exception.room.balance.roomcontent;

import ddangkong.exception.BadRequestException;
import ddangkong.exception.ErrorCode;

public class NotFoundRoomContentException extends BadRequestException {

    public NotFoundRoomContentException() {
        super(ErrorCode.NOT_FOUND_ROOM_CONTENT.getMessage());
    }
}
