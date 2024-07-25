package ddangkong.domain.balance.content;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
public class Room {

    private static final int DEFAULT_TOTAL_ROUND = 5;
    private static final int DEFAULT_CURRENT_ROUND = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int totalRound = DEFAULT_TOTAL_ROUND;

    @Column(nullable = false)
    private int currentRound = DEFAULT_CURRENT_ROUND;
}
