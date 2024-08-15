package ddangkong.domain.room.balance.roomvote;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.member.Member;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"member_id", "balance_option_id"}))
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class RoomBalanceVote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "balance_option_id", nullable = false)
    private BalanceOption balanceOption;

    public RoomBalanceVote(Member member, BalanceOption balanceOption) {
        this.member = member;
        this.balanceOption = balanceOption;
    }
}
