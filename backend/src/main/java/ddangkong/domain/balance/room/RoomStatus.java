package ddangkong.domain.balance.room;

public enum RoomStatus {
    READY,
    PROGRESS,
    FINISH,
    ;

    public boolean isAlreadyStart() {
        return this != READY;
    }

    public boolean isGameProgress() {
        return this == PROGRESS;
    }

    public boolean isGameFinish() {
        return this == FINISH;
    }
}
