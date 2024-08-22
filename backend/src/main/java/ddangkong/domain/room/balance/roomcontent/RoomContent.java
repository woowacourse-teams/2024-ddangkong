package ddangkong.domain.room.balance.roomcontent;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
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
            throw new InternalServerException("해당 라운드의 투표 마감 시간은 이미 설정되었습니다.");
        }

        int afterSec = (timeLimit + DELAY_MSEC) / 1_000;
        voteDeadline = now.plusSeconds(afterSec);
    }

    public boolean isOverVoteDeadline(LocalDateTime now, int round) {
        validateSameRound(round);
        return now.isAfter(getVoteDeadline());
    }

    private void validateSameRound(int round) {
        if (this.round != round) {
            throw new BadRequestException("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : %d, 방 라운드 : %d"
                    .formatted(this.round, round));
        }
    }

    public LocalDateTime getVoteDeadline() {
        if (voteDeadline == null) {
            throw new BadRequestException("투표 마감 시간이 설정되지 않습니다.");
        }
        return voteDeadline;
    }
}
