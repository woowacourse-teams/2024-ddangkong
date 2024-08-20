package ddangkong.exception.room.balance.roomcontent;

import static ddangkong.exception.ErrorCode.MISMATCH_ROUND;

import ddangkong.exception.BadRequestException;

public class MismatchRoundException extends BadRequestException {

    public MismatchRoundException(int roomContentRound, int roomRound) {
        super(MISMATCH_ROUND.getMessage().formatted(roomContentRound, roomRound));
    }

    @Override
    public String getErrorCode() {
        return MISMATCH_ROUND.name();
    }
}
