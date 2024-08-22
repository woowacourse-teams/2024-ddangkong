package ddangkong.exception.room.member;

import static ddangkong.exception.ClientErrorCode.NOT_ROOM_MEMBER;

import ddangkong.exception.BadRequestException;

public class NotRoomMemberException extends BadRequestException {

    public NotRoomMemberException() {
        super(NOT_ROOM_MEMBER.getMessage());
    }

    @Override
    public String getErrorCode() {
        return NOT_ROOM_MEMBER.name();
    }
}
