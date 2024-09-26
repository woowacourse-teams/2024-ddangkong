package ddangkong.domain.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.exception.room.balance.roomcontent.EmptyVoteDeadlineException;
import ddangkong.exception.room.balance.roomcontent.MismatchRoundException;
import ddangkong.exception.room.balance.roomcontent.VoteDeadlineConfiguredException;
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
    private static final int GAME_WAITING_MSEC = 3_000; // TODO SEC로 변경
    private static final int FIRST_ROUND = 1;
    private static final int MSEC = 1_000;

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

    private LocalDateTime voteDeadline;

    public static RoomContent newRoomContent(Room room, BalanceContent balanceContent, int round) {
        return new RoomContent(room, balanceContent, round, null);
    }

    public RoomContent(Room room, BalanceContent balanceContent, int round, LocalDateTime voteDeadline) {
        this.room = room;
        this.balanceContent = balanceContent;
        this.round = round;
        this.voteDeadline = voteDeadline;
    }

    public void updateVoteDeadline(LocalDateTime now, int timeLimit) {
        if (voteDeadline != null) {
            throw new VoteDeadlineConfiguredException();
        }

        int afterSec = (timeLimit + DELAY_MSEC) / MSEC;
        if (round == FIRST_ROUND) {
            afterSec += GAME_WAITING_MSEC / MSEC;
        }

        voteDeadline = now.plusSeconds(afterSec);
    }

    public boolean isOverVoteDeadline(LocalDateTime now, int round) {
        validateSameRound(round);
        return now.isAfter(getVoteDeadline());
    }

    private void validateSameRound(int round) {
        if (this.round != round) {
            throw new MismatchRoundException(this.round, round);
        }
    }

    public LocalDateTime getVoteDeadline() {
        if (voteDeadline == null) {
            throw new EmptyVoteDeadlineException();
        }
        return voteDeadline;
    }
}
