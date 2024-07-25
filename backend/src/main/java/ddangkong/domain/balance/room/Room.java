package ddangkong.domain.balance.room;

import ddangkong.exception.BadRequestException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Entity
@Getter
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
}
