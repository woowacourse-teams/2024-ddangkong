package ddangkong.domain.balance.option;

import ddangkong.domain.balance.content.BalanceContent;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class BalanceOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "balance_content_id", nullable = false)
    private BalanceContent balanceContent;

    public BalanceOption(String name, BalanceContent balanceContent) {
        this.name = name;
        this.balanceContent = balanceContent;
    }

    protected boolean isSameId(Long id) {
        return this.id.equals(id);
    }
}
