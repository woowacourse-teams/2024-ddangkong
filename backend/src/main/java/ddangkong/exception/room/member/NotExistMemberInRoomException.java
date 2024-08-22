package ddangkong.exception.room.member;

import static ddangkong.exception.ServerErrorCode.NOT_EXIST_MEMBER_IN_ROOM;

import ddangkong.exception.InternalServerException;

public class NotExistMemberInRoomException extends InternalServerException {

    public NotExistMemberInRoomException() {
        super(NOT_EXIST_MEMBER_IN_ROOM.getMessage());
    }
}
