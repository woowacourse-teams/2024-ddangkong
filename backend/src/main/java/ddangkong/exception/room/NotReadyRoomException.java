package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.NOT_READY_ROOM;

import ddangkong.exception.BadRequestException;

public class NotReadyRoomException extends BadRequestException {

    public NotReadyRoomException() {
        super(NOT_READY_ROOM.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_READY_ROOM.name();
    }
}
