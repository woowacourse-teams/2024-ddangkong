package ddangkong.domain.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.exception.room.balance.roomcontent.AlreadyRoundStartedException;
import ddangkong.exception.room.balance.roomcontent.EmptyRoundEndedAtException;
import ddangkong.exception.room.balance.roomcontent.MismatchRoundException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class RoomContent {

    private static final int DELAY_MSEC = 2_000; // TODO SEC로 변경

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "balance_content_id")
    private BalanceContent balanceContent;

    @Column(nullable = false)
    private int round;

    private LocalDateTime roundEndedAt;

    public static RoomContent newRoomContent(Room room, BalanceContent balanceContent, int round) {
        return new RoomContent(room, balanceContent, round, null);
    }

    public RoomContent(Room room, BalanceContent balanceContent, int round, LocalDateTime roundEndedAt) {
        this.room = room;
        this.balanceContent = balanceContent;
        this.round = round;
        this.roundEndedAt = roundEndedAt;
    }

    public void updateRoundEndedAt(LocalDateTime currentTime, int timeLimit) {
        if (roundEndedAt != null) {
            throw new AlreadyRoundStartedException();
        }

        int afterSec = (timeLimit + DELAY_MSEC) / 1_000;
        roundEndedAt = currentTime.plusSeconds(afterSec);
    }

    public boolean isRoundOver(LocalDateTime currentTime, int round) {
        validateSameRound(round);
        return currentTime.isAfter(getRoundEndedAt());
    }

    private void validateSameRound(int round) {
        if (this.round != round) {
            throw new MismatchRoundException(this.round, round);
        }
    }

    public LocalDateTime getRoundEndedAt() {
        if (roundEndedAt == null) {
            throw new EmptyRoundEndedAtException();
        }
        return roundEndedAt;
    }
}
