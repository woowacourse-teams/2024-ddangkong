package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomContentTest {

    private static final Room ROOM = Room.createNewRoom();
    private static final BalanceContent BALANCE_CONTENT = new BalanceContent(Category.EXAMPLE, "치킨 vs 피자");

    @Nested
    class 컨텐츠_사용_여부 {

        private static final int ROUND = 1;
        private static final LocalDateTime ROUND_ENDED_AT = LocalDateTime.parse("2024-08-03T20:00:02");

        @Test
        void 사용된_컨텐츠면_예외가_발생한다() {
            // given
            boolean isUsed = true;
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, ROUND, ROUND_ENDED_AT, isUsed);

            // when & then
            assertThatThrownBy(roomContent::validateAlreadyUsed)
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("이미 사용된 컨텐츠입니다.");
        }

        @Test
        void 사용된_컨텐츠가_아니면_예외가_발생하지_않는다() {
            // given
            boolean isUsed = false;
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, ROUND, ROUND_ENDED_AT, isUsed);

            // when & then
            assertThatCode(roomContent::validateAlreadyUsed).doesNotThrowAnyException();
        }
    }

    @Nested
    class 라운드_일치_여부 {

        private static final LocalDateTime ROUND_ENDED_AT = LocalDateTime.parse("2024-08-03T20:00:02");
        private static final boolean IS_USED = false;

        @Test
        void 라운드가_일치하지_않으면_예외가_발생한다() {
            // given
            int round = 2;
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, round, ROUND_ENDED_AT, IS_USED);
            int invalidRound = 1;

            // when & then
            assertThatThrownBy(() -> roomContent.validateSameRound(invalidRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("라운드가 일치하지 않습니다.");
        }

        @Test
        void 라운드가_일치하면_예외가_발생하지_않는다() {
            // given
            int round = 1;
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, round, ROUND_ENDED_AT, IS_USED);

            // when & then
            assertThatCode(() -> roomContent.validateSameRound(round)).doesNotThrowAnyException();
        }
    }
}
