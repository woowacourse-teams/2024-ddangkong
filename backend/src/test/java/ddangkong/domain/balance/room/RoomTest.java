package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;

class RoomTest {

    @Nested
    class 다음_라운드로_이동 {

        @Test
        void 다음_라운드로_이동할_수_있다() {
            // given
            Room room = Room.createNewRoom();
            int currentRound = room.getCurrentRound();
            int expectedRound = currentRound + 1;

            // when
            room.moveToNextRound();

            // then
            assertThat(room.getCurrentRound()).isEqualTo(expectedRound);
        }

        @Test
        void 마지막_라운드_일_경우_예외를_던진다() {
            // given
            int totalRound = 5;
            int currentRound = 5;
            int timeLimit = 30000;
            Room room = new Room(totalRound, currentRound, timeLimit, RoomStatus.PROGRESS);

            // when & then
            assertThatThrownBy(room::moveToNextRound)
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("마지막 라운드입니다.");
        }
    }

    @Nested
    class 라운드_종료 {

        private static final int TOTAL_ROUND = 5;
        private static final int TIME_LIMIT = 30;
        private static final RoomStatus STATUS = RoomStatus.PROGRESS;

        @Test
        void 나의_라운드가_방의_현재_라운드보다_작으면_나의_라운드는_종료된_것이다() {
            // given
            int currentRound = 2;
            Room room = new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, STATUS);
            int myRound = 1;

            // when
            boolean actual = room.isMyRoundFinished(myRound);

            // then
            assertThat(actual).isTrue();
        }

        @Test
        void 나의_라운드와_방의_현재_라운드와_같으면_나의_라운드는_종료되지_않은_것이다() {
            // given
            int currentRound = 2;
            Room room = new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, STATUS);
            int myRound = 2;

            // when
            boolean actual = room.isMyRoundFinished(myRound);

            // then
            assertThat(actual).isFalse();
        }

        @Test
        void 나의_라운드가_방의_시작_라운드보다_작으면_예외가_발생한다() {
            // given
            Room room = new Room(TOTAL_ROUND, 1, TIME_LIMIT, STATUS);
            int invalidMyRound = 0;

            // when & then
            assertThatThrownBy(() -> room.isMyRoundFinished(invalidMyRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("startRound보다 크거나 같아야 합니다. startRound : 1, round : 0");
        }

        @Test
        void 나의_라운드가_방의_현재_라운드보다_크면_예외가_발생한다() {
            // given
            int currentRound = 1;
            Room room = new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, STATUS);
            int invalidMyRound = 2;

            // when & then
            assertThatThrownBy(() -> room.isMyRoundFinished(invalidMyRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("currentRound보다 작거나 같아야 합니다. currentRound : 1, round : 2");
        }

        @Test
        void 나의_라운드가_방의_현재_라운드보다_2이상_작으면_예외가_발생한다() {
            // given
            int currentRound = 4;
            Room room = new Room(TOTAL_ROUND, currentRound, TIME_LIMIT, STATUS);
            int invalidMyRound = 2;

            // when & then
            assertThatThrownBy(() -> room.isMyRoundFinished(invalidMyRound))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("currentRound과 round의 차이는 1이하여야 합니다. currentRound : 4, round : 2");
        }

        @Test
        void 현재_라운드와_전체_라운드가_같고_방_상태가_FINISH이면_방의_전체_라운드가_종료된_것이다() {
            // given
            RoomStatus status = RoomStatus.FINISH;
            Room room = new Room(TOTAL_ROUND, 5, TIME_LIMIT, status);

            // when
            boolean actual = room.isAllRoundFinished();

            // then
            assertThat(actual).isTrue();
        }

        @Test
        void 현재_라운드와_전체_라운드가_다르면_방의_전체_라운드가_종료되지_않은_것이다() {
            // given
            int currentRound = 3;
            int totalRound = 5;
            Room room = new Room(totalRound, currentRound, TIME_LIMIT, STATUS);

            // when
            boolean actual = room.isAllRoundFinished();

            // then
            assertThat(actual).isFalse();
        }

        @ParameterizedTest
        @EnumSource(value = RoomStatus.class, names = {"READY", "PROGRESS"})
        void 방_상태가_FINISH가_아니면_방의_전체_라운드가_종료되지_않은_것이다(RoomStatus status) {
            // given
            Room room = new Room(TOTAL_ROUND, 5, TIME_LIMIT, status);

            // when
            boolean actual = room.isAllRoundFinished();

            // then
            assertThat(actual).isFalse();
        }
    }
}
