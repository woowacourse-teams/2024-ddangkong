package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.exception.BadRequestException;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import org.junit.jupiter.params.provider.EnumSource.Mode;

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
            Room room = new Room(5, 1, 30_000, status);

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
}
