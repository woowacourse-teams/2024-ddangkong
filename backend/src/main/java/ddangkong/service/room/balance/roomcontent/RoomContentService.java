package ddangkong.service.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomcontent.RoomContentRepository;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
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
    public void readyRoomContents(Room room, List<BalanceContent> balanceContents) {
        List<RoomContent> roomContents = IntStream.range(0, balanceContents.size())
                .mapToObj(index -> RoomContent.newRoomContent(room, balanceContents.get(index), index + 1))
                .toList();
        startRound(roomContents.get(0), room.getTimeLimit());
        roomContentRepository.saveAll(roomContents);
    }

    @Transactional
    public void progressNextRoomContent(Room room) {
        RoomContent roomContent = getCurrentRoundRoomContent(room);
        startRound(roomContent, room.getTimeLimit());
    }

    private void startRound(RoomContent roomContent, int timeLimit) {
        LocalDateTime now = LocalDateTime.now(clock);
        roomContent.updateRoundEndedAt(now, timeLimit);
    }

    @Transactional
    public void deleteRoomContents(Room room) {
        List<RoomContent> roomContents = roomContentRepository.findAllByRoom(room);
        roomContentRepository.deleteAllInBatch(roomContents);

        if (room.getTotalRound() != roomContents.size()) {
            log.error("방의 총 라운드와 방 컨텐츠 개수가 일치하지 않습니다. roomId: {}, totalRound: {}, roomContent 개수: {}",
                    room.getId(), room.getTotalRound(), roomContents.size());
        }
    }

    @Transactional(readOnly = true)
    public RoomContent getCurrentRoundRoomContent(Room room) {
        return roomContentRepository.findByRoomAndRound(room, room.getCurrentRound())
                .orElseThrow(() -> new InternalServerException(
                        "해당 방의 현재 라운드의 컨텐츠가 존재하지 않습니다. currentRound: %d"
                                .formatted(room.getCurrentRound())));
    }

    @Transactional(readOnly = true)
    public boolean isRoundFinished(Room room, BalanceContent balanceContent) {
        RoomContent roomContent = roomContentRepository.findByRoomAndBalanceContent(room, balanceContent)
                .orElseThrow(() -> new BadRequestException("방에 존재하지 않는 컨텐츠입니다."));
        LocalDateTime now = LocalDateTime.now(clock);
        return roomContent.isRoundOver(now, room.getCurrentRound());
    }
}
