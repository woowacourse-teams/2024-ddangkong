package ddangkong.domain.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.junit.jupiter.params.provider.EnumSource.Mode;
import org.junit.jupiter.params.provider.ValueSource;

class RoomTest {

    @Nested
    class 게임_시작 {

        @Test
        void 게임이_준비_상태일_떄_게임을_시작할_수_있다() {
            // given
            Room room = Room.createNewRoom();

            // when
            room.startGame();

            // then
            assertThat(room.isGameProgress()).isTrue();
        }

        @ParameterizedTest
        @EnumSource(mode = Mode.EXCLUDE, names = {"READY"})
        void 게임이_이미_시작했다면_예외를_던진다(RoomStatus status) {
            // given
            RoomSetting roomSetting = new RoomSetting(5, 10_000, Category.EXAMPLE);
            Room room = new Room("uuid", 1, status, roomSetting);

            // when & then
            assertThatThrownBy(room::startGame)
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("이미 게임이 시작했습니다.");
        }
    }

    @Nested
    class 다음_라운드로_이동 {

        @Test
        void 다음_라운드로_이동할_수_있다() {
            // given
            int totalRound = 5;
            int currentRound = 1;
            int timeLimit = 10_000;
            RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, Category.EXAMPLE);
            Room room = new Room("uuid", currentRound, RoomStatus.PROGRESS, roomSetting);
            int expectedRound = currentRound + 1;

            // when
            room.moveToNextRound();

            // then
            assertThat(room.getCurrentRound()).isEqualTo(expectedRound);
        }

        @Test
        void 마지막_라운드_일_경우_게임을_종료한다() {
            // given
            int totalRound = 5;
            int currentRound = 5;
            int timeLimit = 10_000;
            RoomStatus status = RoomStatus.PROGRESS;
            RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, Category.EXAMPLE);
            Room room = new Room("uuid", currentRound, status, roomSetting);

            // when
            room.moveToNextRound();

            // then
            assertAll(
                    () -> assertThat(room.getCurrentRound()).isEqualTo(totalRound),
                    () -> assertThat(room.getStatus()).isEqualTo(RoomStatus.FINISH)
            );
        }

        @ParameterizedTest
        @EnumSource(mode = Mode.EXCLUDE, names = "PROGRESS")
        void 게임이_진행_중이_아닐_경우_예외를_던진다(RoomStatus status) {
            // given
            int totalRound = 5;
            int currentRound = 5;
            int timeLimit = 10_000;
            RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, Category.EXAMPLE);
            Room room = new Room("uuid", currentRound, status, roomSetting);

            // when & then
            assertThatThrownBy(room::moveToNextRound)
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("게임이 진행 중이 아닙니다.");
        }
    }

    @Nested
    class 방_설정_변경 {

        @ParameterizedTest
        @ValueSource(ints = {2, 11})
        void 라운드는_3이상_10이하_여야한다(int notValidTotalRound) {
            // given
            Room room = Room.createNewRoom();

            // when & then
            assertThatThrownBy(() -> room.updateTotalRound(notValidTotalRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                            .formatted(3, 10, notValidTotalRound));
        }

        @ParameterizedTest
        @ValueSource(ints = {4000, 16000})
        void 시간_제한은_5000이상_15000이하_여야한다(int notValidTimeLimit) {
            // given
            Room room = Room.createNewRoom();

            // when & then
            assertThatThrownBy(() -> room.updateTimeLimit(notValidTimeLimit))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("시간 제한은 %dms / %dms / %dms 만 가능합니다. requested timeLimit: %d"
                            .formatted(5000, 10000, 15000, notValidTimeLimit));
        }
    }

    @Nested
    class 라운드_종료 {

        private static final int TOTAL_ROUND = 5;
        private static final int TIME_LIMIT = 10_000;
        private static final RoomStatus STATUS = RoomStatus.PROGRESS;
        private static final Category CATEGORY = Category.EXAMPLE;

        @Test
        void 라운드가_방의_현재_라운드보다_작으면_라운드는_종료된_것이다() {
            // given
            int currentRound = 2;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", currentRound, STATUS, roomSetting);
            int round = 1;

            // when & then
            assertThat(room.isRoundFinished(round)).isTrue();
        }

        @Test
        void 라운드가_방의_현재_라운드와_같으면_라운드는_종료되지_않은_것이다() {
            // given
            int currentRound = 2;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", currentRound, STATUS, roomSetting);
            int round = 2;

            // when & then
            assertThat(room.isRoundFinished(round)).isFalse();
        }

        @Test
        void 라운드가_방의_시작_라운드보다_작으면_예외가_발생한다() {
            // given
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", 1, STATUS, roomSetting);
            int invalidRound = 0;

            // when & then
            assertThatThrownBy(() -> room.isRoundFinished(invalidRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("startRound보다 크거나 같아야 합니다. startRound : 1, round : 0");
        }

        @Test
        void 라운드가_방의_현재_라운드보다_크면_예외가_발생한다() {
            // given
            int currentRound = 1;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", currentRound, STATUS, roomSetting);
            int invalidRound = 2;

            // when & then
            assertThatThrownBy(() -> room.isRoundFinished(invalidRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("currentRound보다 작거나 같아야 합니다. currentRound : 1, round : 2");
        }

        @Test
        void 라운드가_방의_현재_라운드보다_2이상_작으면_예외가_발생한다() {
            // given
            int currentRound = 4;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", currentRound, STATUS, roomSetting);
            int invalidRound = 2;

            // when & then
            assertThatThrownBy(() -> room.isRoundFinished(invalidRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("currentRound과 round의 차이는 1이하여야 합니다. currentRound : 4, round : 2");
        }

        @Test
        void 현재_라운드와_전체_라운드가_같고_방_상태가_FINISH이면_방의_전체_라운드가_종료된_것이다() {
            // given
            RoomStatus status = RoomStatus.FINISH;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", 5, status, roomSetting);

            // when & then
            assertThat(room.isAllRoundFinished()).isTrue();
        }

        @Test
        void 현재_라운드와_전체_라운드가_다르면_방의_전체_라운드가_종료되지_않은_것이다() {
            // given
            int currentRound = 3;
            int totalRound = 5;
            RoomSetting roomSetting = new RoomSetting(totalRound, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", currentRound, STATUS, roomSetting);

            // when & then
            assertThat(room.isAllRoundFinished()).isFalse();
        }

        @ParameterizedTest
        @EnumSource(mode = Mode.EXCLUDE, names = {"FINISH"})
        void 방_상태가_FINISH가_아니면_현재_라운드가_전체_라운드와_같아도_전체_라운드는_종료되지_않은_것이다(RoomStatus status) {
            // given
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", 5, status, roomSetting);

            // when & then
            assertThat(room.isAllRoundFinished()).isFalse();
        }
    }

    @Nested
    class 방_초기화 {
        private static final int TOTAL_ROUND = 5;
        private static final int TIME_LIMIT = 10_000;
        private static final Category CATEGORY = Category.EXAMPLE;

        @Test
        void 방을_초기_상태로_초기화한다() {
            // given
            int currentRound = 5;
            RoomStatus status = RoomStatus.FINISH;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", currentRound, status, roomSetting);

            // when
            room.reset();

            // then
            assertAll(
                    () -> assertThat(room.getCurrentRound()).isEqualTo(1),
                    () -> assertThat(room.getStatus()).isEqualTo(RoomStatus.READY)
            );
        }

        @Test
        void 현재_라운드와_전체_라운드가_같지_않을_경우_예외가_발생한다() {
            // given
            int invalidCurrentRound = 4;
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", invalidCurrentRound, RoomStatus.FINISH, roomSetting);

            // when & then
            assertThatThrownBy(room::reset)
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("방이 종료되지 않았습니다");
        }

        @ParameterizedTest
        @EnumSource(mode = Mode.EXCLUDE, names = {"FINISH"})
        void 방_상태가_FINISH가_아닐_경우_예외가_발생한다(RoomStatus status) {
            // given
            RoomSetting roomSetting = new RoomSetting(TOTAL_ROUND, TIME_LIMIT, CATEGORY);
            Room room = new Room("uuid", 5, status, roomSetting);

            // when & then
            assertThatThrownBy(room::reset)
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("방이 종료되지 않았습니다");
        }
    }
}
