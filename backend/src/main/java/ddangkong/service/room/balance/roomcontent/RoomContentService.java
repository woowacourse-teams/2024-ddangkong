package ddangkong.service.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomcontent.RoomContentRepository;
import ddangkong.exception.room.balance.roomcontent.NotFoundCurrentRoundRoomContentException;
import ddangkong.exception.room.balance.roomcontent.NotFoundRoomContentException;
import java.time.Clock;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.IntStream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomContentService {

    private final Clock clock;

    private final RoomContentRepository roomContentRepository;

    @Transactional
    public void prepareRoomContents(Room room, List<BalanceContent> balanceContents) {
        List<RoomContent> roomContents = IntStream.range(0, balanceContents.size())
                .mapToObj(index -> RoomContent.newRoomContent(room, balanceContents.get(index), index + 1))
                .toList();

        RoomContent firstRoomContent = roomContents.get(0);
        startRound(firstRoomContent, room.getTimeLimit());
        roomContentRepository.saveAll(roomContents);
    }

    @Transactional
    public void progressNextRoomContent(Room room) {
        RoomContent roomContent = getCurrentRoundRoomContent(room);
        startRound(roomContent, room.getTimeLimit());
    }

    private void startRound(RoomContent roomContent, int timeLimit) {
        LocalDateTime now = LocalDateTime.now(clock);
        roomContent.updateVoteDeadline(now, timeLimit);
    }

    @Transactional
    public void deleteRoomContents(Room room) {
        List<RoomContent> roomContents = roomContentRepository.findAllByRoom(room);
        roomContentRepository.deleteAllInBatch(roomContents);
    }

    @Transactional(readOnly = true)
    public RoomContent getCurrentRoundRoomContent(Room room) {
        return roomContentRepository.findByRoomAndRound(room, room.getCurrentRound())
                .orElseThrow(() -> new NotFoundCurrentRoundRoomContentException(room.getCurrentRound()));
    }

    @Transactional(readOnly = true)
    public boolean isOverVoteDeadline(Room room, BalanceContent balanceContent) {
        RoomContent roomContent = roomContentRepository.findByRoomAndBalanceContent(room, balanceContent)
                .orElseThrow(NotFoundRoomContentException::new);
        LocalDateTime now = LocalDateTime.now(clock);
        return roomContent.isOverVoteDeadline(now, room.getCurrentRound());
    }
}
