package ddangkong.domain.room;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.room.InvalidRoundGapException;
import ddangkong.exception.room.NotFinishedRoomException;
import ddangkong.exception.room.NotProgressedRoomException;
import ddangkong.exception.room.NotReadyRoomException;
import ddangkong.exception.room.RoundGreaterThanCurrentRoundException;
import ddangkong.exception.room.RoundLessThanStartRoundException;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.UUID;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    private static final int START_ROUND = 1;
    private static final int ALLOWED_ROUND_GAP = 1;
    private static final int MAX_MEMBER_COUNT = 12;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String uuid;

    @Column(nullable = false)
    private int currentRound;

    @Embedded
    private RoomSetting roomSetting;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private RoomStatus status;

    public Room(String uuid, int currentRound, RoomStatus status, RoomSetting roomSetting) {
        this.uuid = uuid;
        this.currentRound = currentRound;
        this.status = status;
        this.roomSetting = roomSetting;
    }

    public static Room createNewRoom() {
        String uuid = UUID.randomUUID().toString().replace("-", "");
        return new Room(uuid, START_ROUND, RoomStatus.READY, RoomSetting.createNewRoomSetting());
    }

    public void startGame() {
        if (isAlreadyStart()) {
            throw new NotReadyRoomException();
        }
        this.status = RoomStatus.PROGRESS;
    }

    public void moveToNextRound() {
        if (!isGameProgress()) {
            throw new NotProgressedRoomException();
        }
        if (isFinalRound()) {
            this.status = RoomStatus.FINISH;
            return;
        }
        currentRound++;
    }

    public boolean isAlreadyStart() {
        return status.isAlreadyStart();
    }

    public boolean isGameProgress() {
        return status.isGameProgress();
    }

    public boolean isGameReady() {
        return status.isGameReady();
    }

    public boolean isRoundFinished(int round) {
        validateRound(round);
        return currentRound != round;
    }

    private void validateRound(int round) {
        if (round < START_ROUND) {
            throw new RoundLessThanStartRoundException(START_ROUND, round);
        }
        if (round > currentRound) {
            throw new RoundGreaterThanCurrentRoundException(currentRound, round);
        }
        if (currentRound - round > ALLOWED_ROUND_GAP) {
            throw new InvalidRoundGapException(ALLOWED_ROUND_GAP, currentRound, round);
        }
    }

    private boolean isFinalRound() {
        return roomSetting.isFinalRound(currentRound);
    }

    public boolean isAllRoundFinished() {
        return roomSetting.isFinalRound(currentRound) && status.isGameFinish();
    }

    public void reset() {
        if (!isAllRoundFinished()) {
            throw new NotFinishedRoomException();
        }
        this.currentRound = START_ROUND;
        this.status = RoomStatus.READY;
    }

    public boolean isFull(long memberCountInRoom) {
        return memberCountInRoom == MAX_MEMBER_COUNT;
    }

    public void updateRoomSetting(RoomSetting roomSetting) {
        this.roomSetting.updateTimeLimit(roomSetting.getTimeLimit());
        this.roomSetting.updateTotalRound(roomSetting.getTotalRound());
        this.roomSetting.updateCategory(roomSetting.getCategory());
    }

    public int getTotalRound() {
        return roomSetting.getTotalRound();
    }

    public Category getCategory() {
        return roomSetting.getCategory();
    }

    public int getTimeLimit() {
        return roomSetting.getTimeLimit();
    }
}
