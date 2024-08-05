package ddangkong.domain.balance.room;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;
import java.util.Objects;
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

    @Column(nullable = false)
    private boolean isUsed;

    public RoomContent(Room room,
                       BalanceContent balanceContent,
                       int round,
                       LocalDateTime roundEndedAt,
                       boolean isUsed) {
        this.room = room;
        this.balanceContent = balanceContent;
        this.round = round;
        this.roundEndedAt = roundEndedAt;
        this.isUsed = isUsed;
    }

    public void startRound(LocalDateTime currentTime) {
        if (roundEndedAt != null) {
            throw new BadRequestException("해당 라운드는 이미 시작했습니다.");
        }
        if (room.isGameProgress() && isDifferentToRoomRound()) {
            throw new BadRequestException("방이 해당 라운드가 아닙니다. roomRound : %d, contentRound : %d"
                    .formatted(room.getCurrentRound(), round));
        }

        int afterSec = (room.getTimeLimit() + DELAY_MSEC) / 1_000;
        roundEndedAt = currentTime.plusSeconds(afterSec);
    }

    private boolean isDifferentToRoomRound() {
        return round != room.getCurrentRound();
    }

    public boolean isRoundOver(LocalDateTime currentTime) {
        return currentTime.isAfter(getRoundEndedAt());
    }

    public boolean isNotSameContentId(Long contentId) {
        return !Objects.equals(getContentId(), contentId);
    }

    public Long getContentId() {
        return balanceContent.getId();
    }

    public Category getContentCategory() {
        return balanceContent.getCategory();
    }

    public String getContentName() {
        return balanceContent.getName();
    }

    public int getTotalRound() {
        return room.getTotalRound();
    }

    public LocalDateTime getRoundEndedAt() {
        if (roundEndedAt == null) {
            throw new BadRequestException("라운드 종료 시간이 설정되지 않습니다.");
        }
        return roundEndedAt;
    }
}
