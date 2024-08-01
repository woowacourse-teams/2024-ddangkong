package ddangkong.domain.balance.room;

import ddangkong.domain.balance.content.Category;
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

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category;

    public static Room createNewRoom() {
        return new Room(DEFAULT_TOTAL_ROUND, START_ROUND, DEFAULT_TIME_LIMIT_MSEC, RoomStatus.READY, Category.EXAMPLE);
    }

    public Room(int totalRound, int currentRound, int timeLimit, RoomStatus status, Category category) {
        this.totalRound = totalRound;
        this.currentRound = currentRound;
        this.timeLimit = timeLimit;
        this.status = status;
        this.category = category;
    }

    public void moveToNextRound() {
        if (canMoveToNextRound()) {
            currentRound++;
            return;
        }
        throw new BadRequestException("마지막 라운드입니다.");
    }

    public void updateTimeLimit(int timeLimit) {
        this.timeLimit = timeLimit;
    }

    public void updateTotalRound(int totalRound) {
        this.totalRound = totalRound;
    }

    private boolean canMoveToNextRound() {
        return currentRound < totalRound;
    }

    public boolean isGameProgress() {
        return status.isGameProgress();
    }
}
