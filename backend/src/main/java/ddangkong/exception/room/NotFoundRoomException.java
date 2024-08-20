package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.NOT_FOUND_ROOM;

import ddangkong.exception.BadRequestException;

public class NotFoundRoomException extends BadRequestException {

    public NotFoundRoomException() {
        super(NOT_FOUND_ROOM.getMessage());
    }
}
