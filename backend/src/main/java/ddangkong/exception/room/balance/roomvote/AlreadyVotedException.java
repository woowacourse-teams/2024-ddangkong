package ddangkong.exception.room.balance.roomvote;

import static ddangkong.exception.ErrorCode.ALREADY_VOTED;

import ddangkong.exception.BadRequestException;

public class AlreadyVotedException extends BadRequestException {

    public AlreadyVotedException(String nickname, String optionName) {
        super(ALREADY_VOTED.getMessage().formatted(nickname, optionName));
    }
}
