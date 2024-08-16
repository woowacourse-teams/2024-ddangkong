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

    public Room(int totalRound, int currentRound, int timeLimit, RoomStatus status, Category category) {
        this.totalRound = totalRound;
        this.currentRound = currentRound;
        this.timeLimit = timeLimit;
        this.status = status;
        this.category = category;
    }

    public static Room createNewRoom() {
        return new Room(DEFAULT_TOTAL_ROUND, START_ROUND, MAX_TIME_LIMIT_MSEC, RoomStatus.READY, Category.EXAMPLE);
    }

    public void updateTimeLimit(int timeLimit) {
        if (timeLimit < MIN_TIME_LIMIT_MSEC || timeLimit > MAX_TIME_LIMIT_MSEC) {
            throw new BadRequestException("시간 제한은 %dms 이상, %dms 이하만 가능합니다. requested timeLimit: %d"
                    .formatted(MIN_TIME_LIMIT_MSEC, MAX_TIME_LIMIT_MSEC, timeLimit));
        }
        this.timeLimit = timeLimit;
    }

    public void updateTotalRound(int totalRound) {
        if (totalRound < MIN_TOTAL_ROUND || totalRound > MAX_TOTAL_ROUND) {
            throw new BadRequestException("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                    .formatted(MIN_TOTAL_ROUND, MAX_TOTAL_ROUND, totalRound));
        }
        this.totalRound = totalRound;
    }

    public void updateCategory(Category category) {
        this.category = category;
    }

    public void startGame() {
        if (status.isAlreadyStart()) {
            throw new BadRequestException("이미 게임이 시작했습니다.");
        }
        status = RoomStatus.PROGRESS;
    }

    public void moveToNextRound() {
        if (!isGameProgress()) {
            throw new BadRequestException("게임이 진행 중이 아닙니다.");
        }
        if (isFinalRound()) {
            status = RoomStatus.FINISH;
            return;
        }
        currentRound++;
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
            throw new BadRequestException("startRound보다 크거나 같아야 합니다. startRound : %d, round : %d"
                    .formatted(START_ROUND, round)
            );
        }
        if (round > currentRound) {
            throw new BadRequestException("currentRound보다 작거나 같아야 합니다. currentRound : %d, round : %d"
                    .formatted(currentRound, round)
            );
        }
        if (currentRound - round > ALLOWED_ROUND_GAP) {
            throw new BadRequestException("currentRound과 round의 차이는 %d이하여야 합니다. currentRound : %d, round : %d"
                    .formatted(ALLOWED_ROUND_GAP, currentRound, round)
            );
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
            throw new BadRequestException("방이 종료되지 않았습니다.");
        }
        this.currentRound = START_ROUND;
        this.status = RoomStatus.READY;
    }

    public boolean isOverMaximumMember(long memberCountInRoom) {
        return memberCountInRoom == MAX_MEMBER_COUNT;
    }
}
