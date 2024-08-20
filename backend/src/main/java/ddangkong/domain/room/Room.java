package ddangkong.domain.room;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.room.InvalidRangeTimeLimitException;
import ddangkong.exception.room.InvalidRangeTotalRoundException;
import ddangkong.exception.room.NotAllowedRoundGapException;
import ddangkong.exception.room.NotFinishedRoomException;
import ddangkong.exception.room.NotProgressedRoomException;
import ddangkong.exception.room.NotReadyRoomException;
import ddangkong.exception.room.RoundGreaterThanCurrentRoundException;
import ddangkong.exception.room.RoundLessThanStartRoundException;
import jakarta.persistence.Column;
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

    private static final int DEFAULT_TOTAL_ROUND = 5;
    private static final int MIN_TOTAL_ROUND = 3;
    private static final int MAX_TOTAL_ROUND = 10;
    private static final int MAX_MEMBER_COUNT = 12;
    private static final int MIN_TIME_LIMIT_MSEC = 10_000;
    private static final int MAX_TIME_LIMIT_MSEC = 30_000;
    private static final int START_ROUND = 1;
    private static final int ALLOWED_ROUND_GAP = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String uuid;

    @Column(nullable = false)
    private int totalRound;

    @Column(nullable = false)
    private int currentRound;

    @Column(nullable = false)
    private int timeLimit;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private RoomStatus status;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category;

    public Room(String uuid, int totalRound, int currentRound, int timeLimit, RoomStatus status, Category category) {
        this.uuid = uuid;
        this.totalRound = totalRound;
        this.currentRound = currentRound;
        this.timeLimit = timeLimit;
        this.status = status;
        this.category = category;
    }

    public static Room createNewRoom() {
        String uuid = UUID.randomUUID().toString().replace("-", "");

        return new Room(uuid, DEFAULT_TOTAL_ROUND, START_ROUND, MAX_TIME_LIMIT_MSEC, RoomStatus.READY,
                Category.EXAMPLE);
    }

    public void updateTimeLimit(int timeLimit) {
        if (timeLimit < MIN_TIME_LIMIT_MSEC || timeLimit > MAX_TIME_LIMIT_MSEC) {
            throw new InvalidRangeTimeLimitException(MIN_TIME_LIMIT_MSEC, MAX_TIME_LIMIT_MSEC, timeLimit);
        }
        this.timeLimit = timeLimit;
    }

    public void updateTotalRound(int totalRound) {
        if (totalRound < MIN_TOTAL_ROUND || totalRound > MAX_TOTAL_ROUND) {
            throw new InvalidRangeTotalRoundException(MIN_TOTAL_ROUND, MAX_TOTAL_ROUND, totalRound);
        }
        this.totalRound = totalRound;
    }

    public void updateCategory(Category category) {
        this.category = category;
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
            throw new NotAllowedRoundGapException(ALLOWED_ROUND_GAP, currentRound, round);
        }
    }

    private boolean isFinalRound() {
        return currentRound == totalRound;
    }

    public boolean isAllRoundFinished() {
        return currentRound == totalRound && status.isGameFinish();
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
}
