package ddangkong.exception.room;

import static ddangkong.exception.ClientErrorCode.NOT_FOUND_ROOM;

import ddangkong.exception.BadRequestException;

public class NotFoundRoomException extends BadRequestException {

    public NotFoundRoomException() {
        super(NOT_FOUND_ROOM.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_FOUND_ROOM.name();
    }
}
