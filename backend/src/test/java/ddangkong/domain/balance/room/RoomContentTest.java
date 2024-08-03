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
            RoomContent roomContent = RoomContent.createNewRoom(room, BALANCE_CONTENT, currentRound);
            int expectedAfterSec = (timeLimit + 2_000) / 1_000;
            LocalDateTime expectedRoundEnded = CURRENT_TIME.plusSeconds(expectedAfterSec);

            // when
            roomContent.startRound(CURRENT_TIME);

            // then
            assertThat(roomContent.getRoundEndedAt()).isEqualTo(expectedRoundEnded);
        }

        @Test
        void 이미_라운드가_시작되었다면_예외를_던진다() {
            // given
            int currentRound = 1;
            Room room = new Room(5, currentRound, 10_000, RoomStatus.PROGRESS, Category.EXAMPLE);
            RoomContent roomContent = RoomContent.createNewRoom(room, BALANCE_CONTENT, currentRound);
            roomContent.startRound(CURRENT_TIME);

            // when & then
            assertThatThrownBy(() -> roomContent.startRound(CURRENT_TIME))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 라운드는 이미 시작했습니다.");
        }

        @Test
        void 방의_진행_라운드와_일치하지_않으면_예외를_던진다() {
            // given
            int roomRound = 1;
            int roomContentRound = 2;
            Room room = new Room(5, roomRound, 10_000, RoomStatus.PROGRESS, Category.EXAMPLE);
            RoomContent roomContent = RoomContent.createNewRoom(room, BALANCE_CONTENT, roomContentRound);

            // when & then
            assertThatThrownBy(() -> roomContent.startRound(CURRENT_TIME))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("방이 해당 라운드가 아닙니다. roomRound : 1, contentRound : 2");
        }
    }
}
