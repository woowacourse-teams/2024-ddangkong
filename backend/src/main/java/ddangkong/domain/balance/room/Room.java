package ddangkong.domain.balance.room;

import ddangkong.exception.BadRequestException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor // TODO protected로 변경
public class Room {

    private static final int DEFAULT_TOTAL_ROUND = 5;
    private static final int START_ROUND = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int totalRound = DEFAULT_TOTAL_ROUND;

    @Column(nullable = false)
    private int currentRound = START_ROUND;

    public Room(int totalRound, int currentRound) {
        this.totalRound = totalRound;
        this.currentRound = currentRound;
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

    public boolean isMyRoundFinished(int myRound) {
        if (myRound < START_ROUND) {
            throw new BadRequestException("나의 라운드는 %d보다 크거나 같아야 합니다. myRound : %d"
                    .formatted(START_ROUND, myRound)
            );
        }
        if (currentRound < myRound) {
            throw new BadRequestException("방의 currentRound보다 작거나 같아야 합니다. currentRound : %d, myRound : %d"
                    .formatted(currentRound, myRound)
            );
        }
        return currentRound != myRound;
    }

    public boolean isAllRoundFinished() {
        // TODO: room의 status가 종료인지 여부 리턴
        return currentRound == totalRound;
    }
}
