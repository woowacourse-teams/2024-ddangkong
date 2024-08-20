package ddangkong.exception.room;

import static ddangkong.exception.ErrorCode.NOT_FINISHED_ROOM;

import ddangkong.exception.BadRequestException;

public class NotFinishedRoomException extends BadRequestException {

    public NotFinishedRoomException() {
        super(NOT_FINISHED_ROOM.getMessage());
    }
}
