package ddangkong.service.balance.room.dto;

import ddangkong.domain.balance.room.Room;

public record RoundFinishedResponse(
        boolean isFinished
) {

    public static RoundFinishedResponse allRoundFinished() {
        return new RoundFinishedResponse(true);
    }

    public static RoundFinishedResponse myRoundFinished(Room room, int myRound) {
        return new RoundFinishedResponse(room.isMyRoundFinished(myRound));
    }
}
