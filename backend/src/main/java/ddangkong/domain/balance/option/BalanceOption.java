package ddangkong.domain.balance.option;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.exception.balance.option.BlankBalanceOptionException;
import ddangkong.exception.balance.option.LongBalanceOptionException;
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

    private static final int MAX_NAME_LENGTH = 16;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "balance_content_id", nullable = false)
    private BalanceContent balanceContent;

    public BalanceOption(String name, BalanceContent balanceContent) {
        validateName(name);

        this.name = name;
        this.balanceContent = balanceContent;
    }

    private void validateName(String name) {
        if (name.isBlank()) {
            throw new BlankBalanceOptionException();
        }
        if (name.length() > MAX_NAME_LENGTH) {
            throw new LongBalanceOptionException(MAX_NAME_LENGTH);
        }
    }

    protected boolean isSameId(Long id) {
        return this.id.equals(id);
    }

    public boolean isContain(BalanceContent content) {
        return this.balanceContent.getId().equals(content.getId());
    }

    public void updateName(String name) {
        validateName(name);
        this.name = name;
    }
}
