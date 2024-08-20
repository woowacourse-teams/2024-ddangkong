package ddangkong.exception.room.balance.roomcontent;

import static ddangkong.exception.ErrorCode.NOT_FOUND_ROOM_CONTENT;

import ddangkong.exception.BadRequestException;

public class NotFoundRoomContentException extends BadRequestException {

    public NotFoundRoomContentException() {
        super(NOT_FOUND_ROOM_CONTENT.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_FOUND_ROOM_CONTENT.name();
    }
}
