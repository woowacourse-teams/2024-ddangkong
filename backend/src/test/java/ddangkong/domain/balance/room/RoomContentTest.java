package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomContentTest {

    @Nested
    class 라운드_시작 {

        private static final BalanceContent BALANCE_CONTENT = new BalanceContent(Category.EXAMPLE, "다음 중 가고 싶은 곳은?");
        private static final LocalDateTime CURRENT_TIME = LocalDateTime.of(2024, 8, 2, 14, 14, 10);

        @Test
        void 라운드를_시작할_때_종료_시각을_기록한다() {
            // given
            int currentRound = 1;
            int timeLimit = 10_000;
            Room room = new Room(5, currentRound, timeLimit, RoomStatus.PROGRESS, Category.EXAMPLE);
            RoomContent roomContent = new RoomContent(room, BALANCE_CONTENT, currentRound, null, false);
            int expectedAfterSec = (timeLimit + 2_000) / 1_000;
            LocalDateTime expectedRoundEnded = CURRENT_TIME.plusSeconds(expectedAfterSec);

            // when
            roomContent.updateRoundEndedAt(CURRENT_TIME, timeLimit);

            // then
            assertThat(roomContent.getRoundEndedAt()).isEqualTo(expectedRoundEnded);
        }

        @Test
        void 이미_라운드가_시작되었다면_예외를_던진다() {
            // given
            int currentRound = 1;
            Room room = new Room(5, currentRound, 10_000, RoomStatus.PROGRESS, Category.EXAMPLE);
            RoomContent roomContent = new RoomContent(room, BALANCE_CONTENT, currentRound, null, false);
            roomContent.updateRoundEndedAt(CURRENT_TIME, 10_000);

            // when & then
            assertThatThrownBy(() -> roomContent.updateRoundEndedAt(CURRENT_TIME, 10_000))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 라운드는 이미 시작했습니다.");
        }
    }

    @Nested
    class 라운드_종료_여부 {

        private static final Room ROOM = Room.createNewRoom();
        private static final BalanceContent BALANCE_CONTENT = new BalanceContent(Category.EXAMPLE, "치킨 vs 피자");
        private static final int ROUND = 1;
        private static final LocalDateTime ROUND_ENDED_AT = LocalDateTime.parse("2024-08-03T20:00:02");
        private static final boolean IS_USED = false;

        @Test
        void 라운드_종료_시간보다_이전_시간이면_라운드가_종료되지_않은_것이다() {
            // given
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-08-03T20:00:02");
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, ROUND, roundEndedAt, IS_USED);
            LocalDateTime now = LocalDateTime.parse("2024-08-03T20:00:01");

            // when & then
            assertThat(roomContent.isRoundOver(now, ROUND)).isFalse();
        }

        @Test
        void 라운드_종료_시간보다_이후_시간이면_라운드가_종료되지_않은_것이다() {
            // given
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-08-03T20:00:02");
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, ROUND, roundEndedAt, IS_USED);
            LocalDateTime now = LocalDateTime.parse("2024-08-03T20:00:03");

            // when & then
            assertThat(roomContent.isRoundOver(now, ROUND)).isTrue();
        }

        @Test
        void 사용된_컨텐츠면_예외가_발생한다() {
            // given
            boolean isUsed = true;
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, ROUND, ROUND_ENDED_AT, isUsed);
            LocalDateTime now = LocalDateTime.parse("2024-08-03T20:00:01");

            // when & then
            assertThatThrownBy(() -> roomContent.isRoundOver(now, ROUND))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("이미 사용된 컨텐츠입니다.");
        }

        @Test
        void 라운드가_일치하지_않으면_예외가_발생한다() {
            // given
            int round = 2;
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, round, ROUND_ENDED_AT, IS_USED);
            int invalidRound = 1;
            LocalDateTime now = LocalDateTime.parse("2024-08-03T20:00:01");

            // when & then
            assertThatThrownBy(() -> roomContent.isRoundOver(now, invalidRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("라운드가 일치하지 않습니다.");
        }
    }
}
