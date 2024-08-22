package ddangkong.exception.room.balance.roomcontent;

import static ddangkong.exception.ServerErrorCode.NOT_FOUND_CURRENT_ROUND_ROOM_CONTENT;

import ddangkong.exception.InternalServerException;

public class NotFoundCurrentRoundRoomContentException extends InternalServerException {

    public NotFoundCurrentRoundRoomContentException(int currentRound) {
        super(NOT_FOUND_CURRENT_ROUND_ROOM_CONTENT.getMessage().formatted(currentRound));
    }
}
