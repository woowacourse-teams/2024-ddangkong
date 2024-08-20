package ddangkong.facade.room.dto;

public record RoomStatusResponse(
        boolean isReady,
        boolean isActivated
) {
}
