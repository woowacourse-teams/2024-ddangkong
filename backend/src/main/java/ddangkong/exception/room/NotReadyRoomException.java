package ddangkong.exception.room;

import ddangkong.exception.BadRequestException;
import ddangkong.exception.ErrorCode;

public class NotReadyRoomException extends BadRequestException {

    public NotReadyRoomException() {
        super(ErrorCode.NOT_READY_ROOM.getMessage());
    }
}
