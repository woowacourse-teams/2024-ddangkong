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

    public static RoomContent newRoomContent(Room room, BalanceContent balanceContent, int round) {
        return new RoomContent(room, balanceContent, round, null, false);
    }

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

    public void updateRoundEndedAt(LocalDateTime currentTime, int timeLimit) {
        if (roundEndedAt != null) {
            throw new BadRequestException("해당 라운드는 이미 시작했습니다.");
        }

        int afterSec = (timeLimit + DELAY_MSEC) / 1_000;
        roundEndedAt = currentTime.plusSeconds(afterSec);
    }

    public boolean isRoundOver(LocalDateTime currentTime, int round) {
        validateSameRound(round);
        validateAlreadyUsed();
        return currentTime.isAfter(getRoundEndedAt());
    }

    private void validateSameRound(int round) {
        if (this.round != round) {
            throw new BadRequestException("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : %d, 방 라운드 : %d"
                    .formatted(this.round, round));
        }
    }

    private void validateAlreadyUsed() {
        if (isUsed) {
            throw new BadRequestException("이미 사용된 컨텐츠입니다.");
        }
    }

    public void finish() {
        isUsed = true;
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
