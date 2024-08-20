package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.NOT_PROGRESSED_ROOM;

import ddangkong.exception.BadRequestException;

public class NotProgressedRoomException extends BadRequestException {

    public NotProgressedRoomException() {
        super(NOT_PROGRESSED_ROOM.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_PROGRESSED_ROOM.name();
    }
}
