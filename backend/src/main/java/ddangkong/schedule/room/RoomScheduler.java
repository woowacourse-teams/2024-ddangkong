package ddangkong.schedule.room;

import ddangkong.facade.room.RoomFacade;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@RequiredArgsConstructor
public class RoomScheduler {

    private static final int DELAYED_HOURS = 2;

    private final RoomFacade roomFacade;

    @Scheduled(cron = "0 0/20 * * * *")
    public void deleteDelayedRooms() {
        LocalDateTime modifiedStandard = LocalDateTime.now().minusHours(DELAYED_HOURS);
        roomFacade.findRoomIdsBefore(modifiedStandard)
                .stream()
                .forEach(roomFacade::deleteRoom);
    }
}