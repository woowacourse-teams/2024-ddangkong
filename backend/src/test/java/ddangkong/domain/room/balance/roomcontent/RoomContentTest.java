package ddangkong.domain.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.exception.room.balance.roomcontent.MismatchRoundException;
import ddangkong.exception.room.balance.roomcontent.VoteDeadlineConfiguredException;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomContentTest {

    @Nested
    class 투표_마감_시간_설정 {

        private static final BalanceContent BALANCE_CONTENT = new BalanceContent(Category.IF, "다음 중 가고 싶은 곳은?");
        private static final LocalDateTime NOW = LocalDateTime.parse("2024-08-02T14:14:10");

        @Test
        void 투표_마감_시간을_설정한다() {
            // given
            int currentRound = 2;
            int timeLimit = 10_000;
            RoomSetting roomSetting = new RoomSetting(5, timeLimit, Category.IF);

            Room room = new Room("uuid", currentRound, RoomStatus.PROGRESS, roomSetting);
            RoomContent roomContent = new RoomContent(room, BALANCE_CONTENT, currentRound, null);
            LocalDateTime expectedVoteDeadline = LocalDateTime.parse("2024-08-02T14:14:22");

            // when
            roomContent.updateVoteDeadline(NOW, timeLimit);

            // then
            assertThat(roomContent.getVoteDeadline()).isEqualTo(expectedVoteDeadline);
        }

        @Test
        void 이미_투표_마감_시간을_설정했을_경우_예외가_발생한다() {
            // given
            int currentRound = 1;
            int timeLimit = 10_000;

            RoomSetting roomSetting = new RoomSetting(5, 10_000, Category.IF);
            Room room = new Room("uuid", currentRound, RoomStatus.PROGRESS, roomSetting);
            RoomContent roomContent = new RoomContent(room, BALANCE_CONTENT, currentRound, null);
            roomContent.updateVoteDeadline(NOW, timeLimit);

            // when & then
            assertThatThrownBy(() -> roomContent.updateVoteDeadline(NOW, timeLimit))
                    .isExactlyInstanceOf(VoteDeadlineConfiguredException.class);
        }
    }

    @Nested
    class 투표_마감_시간_지남_여부 {

        private static final Room ROOM = Room.createNewRoom();
        private static final BalanceContent BALANCE_CONTENT = new BalanceContent(Category.IF, "치킨 vs 피자");
        private static final int ROUND = 2;

        @Test
        void 투표_마감_시간보다_이전_시간이면_투표가_마감되지_않은_것이다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:01");
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, ROUND, voteDeadline);
            LocalDateTime now = LocalDateTime.parse("2024-08-03T20:00:00");

            // when & then
            assertThat(roomContent.isOverVoteDeadline(now, ROUND)).isFalse();
        }

        @Test
        void 투표_마감_시간보다_이후_시간이면_투표가_마감되지_않은_것이다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:03");
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, ROUND, voteDeadline);
            LocalDateTime now = LocalDateTime.parse("2024-08-03T20:00:04");

            // when & then
            assertThat(roomContent.isOverVoteDeadline(now, ROUND)).isTrue();
        }

        @Test
        void 라운드가_일치하지_않으면_예외가_발생한다() {
            // given
            int round = 2;
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:02");
            RoomContent roomContent = new RoomContent(ROOM, BALANCE_CONTENT, round, voteDeadline);
            LocalDateTime now = LocalDateTime.parse("2024-08-03T20:00:01");
            int invalidRound = 1;

            // when & then
            assertThatThrownBy(() -> roomContent.isOverVoteDeadline(now, invalidRound))
                    .isExactlyInstanceOf(MismatchRoundException.class);
        }
    }

    @Nested
    class 게임_대기_시간_포함_투표_마감_시간_지남_여부 {

        private static final Room ROOM = Room.createNewRoom();
        private static final BalanceContent BALANCE_CONTENT = new BalanceContent(Category.IF, "치킨 vs 피자");
        private static final int START_ROUND = 1;

        @Test
        void 첫_라운드는_투표_마감_시간에는_게임_대기_시간을_추가된다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T20:00:03");
            RoomContent roomContent = RoomContent.newRoomContent(ROOM, BALANCE_CONTENT, START_ROUND);
            int timeLimit = 3;
            LocalDateTime inTime = LocalDateTime.parse("2024-08-03T20:00:08");
            LocalDateTime overTime = LocalDateTime.parse("2024-08-03T20:00:09");

            // when
            roomContent.updateVoteDeadline(voteDeadline, timeLimit);

            // then
            assertAll(
                    () -> assertThat(roomContent.isOverVoteDeadline(inTime, START_ROUND)).isFalse(),
                    () -> assertThat(roomContent.isOverVoteDeadline(overTime, START_ROUND)).isTrue()
            );
        }
    }
}
