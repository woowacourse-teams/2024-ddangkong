package ddangkong.domain.balance.content;

import ddangkong.exception.balance.content.BlankBalanceContentException;
import ddangkong.exception.balance.content.LongBalanceContentException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class BalanceContent {

    private static final int MAX_NAME_LENGTH = 30;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20, columnDefinition = "VARCHAR(20)")
    private Category category;

    @Column(nullable = false)
    private String name;

    public BalanceContent(Category category, String name) {
        validateName(name);

        this.category = category;
        this.name = name;
    }

    private void validateName(String name) {
        if (name.isBlank()) {
            throw new BlankBalanceContentException();
        }
        if (name.length() > MAX_NAME_LENGTH) {
            throw new LongBalanceContentException(MAX_NAME_LENGTH);
        }
    }

    public void updateName(String name) {
        validateName(name);
        this.name = name;
    }
}
