package ddangkong.exception.room;

import ddangkong.exception.BadRequestException;
import ddangkong.exception.ErrorCode;

public class NotProgressedRoomException extends BadRequestException {

    public NotProgressedRoomException() {
        super(ErrorCode.NOT_PROGRESSED_ROOM.getMessage());
    }
}
