package ddangkong.domain.balance.room;

public enum RoomStatus {
    READY(false),
    PROGRESS(true),
    FINISH(false),
    ;

    private final boolean isGameProgress;

    RoomStatus(boolean isGameProgress) {
        this.isGameProgress = isGameProgress;
    }

    public boolean isGameProgress() {
        return isGameProgress;
    }
}
