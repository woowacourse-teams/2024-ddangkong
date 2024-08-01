package ddangkong.domain.balance.room;

import ddangkong.domain.BaseEntity;
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
public class RoomContent extends BaseEntity {

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

    public boolean isRoundOver(LocalDateTime currentTime) {
        return currentTime.isAfter(getRoundEndedAt());
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
