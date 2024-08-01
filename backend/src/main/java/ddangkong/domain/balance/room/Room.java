package ddangkong.domain.balance.room;

import ddangkong.exception.BadRequestException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    private static final int DEFAULT_TOTAL_ROUND = 5;
    private static final int DEFAULT_TIME_LIMIT_MSEC = 30_000;
    private static final int START_ROUND = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int totalRound;

    @Column(nullable = false)
    private int currentRound;

    @Column(nullable = false)
    private int timeLimit;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private RoomStatus status;

    public static Room createNewRoom() {
        return new Room(DEFAULT_TOTAL_ROUND, START_ROUND, DEFAULT_TIME_LIMIT_MSEC, RoomStatus.READY);
    }

    public Room(int totalRound, int currentRound, int timeLimit, RoomStatus status) {
        this.totalRound = totalRound;
        this.currentRound = currentRound;
        this.timeLimit = timeLimit;
        this.status = status;
    }

    public void moveToNextRound() {
        if (canMoveToNextRound()) {
            currentRound++;
            return;
        }
        throw new BadRequestException("마지막 라운드입니다.");
    }

    private boolean canMoveToNextRound() {
        return currentRound < totalRound;
    }

    public boolean isGameProgress() {
        return status.isGameProgress();
    }

    public boolean isMyRoundFinished(int myRound) {
        validateGreaterThanOrEqualToStartRound(myRound);
        validateLessThanOrEqualToCurrentRound(myRound);
        return currentRound != myRound;
    }

    private void validateGreaterThanOrEqualToStartRound(int round) {
        if (round < START_ROUND) {
            throw new BadRequestException("startRound보다 크거나 같아야 합니다. startRound : %d, round : %d"
                    .formatted(START_ROUND, round)
            );
        }
    }

    private void validateLessThanOrEqualToCurrentRound(int round) {
        if (currentRound < round) {
            throw new BadRequestException("currentRound보다 작거나 같아야 합니다. currentRound : %d, round : %d"
                    .formatted(currentRound, round)
            );
        }
    }

    public boolean isAllRoundFinished() {
        return currentRound == totalRound && status.isGameFinish();
    }
}
