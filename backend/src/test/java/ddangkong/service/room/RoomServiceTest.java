package ddangkong.service.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.exception.BadRequestException;
import ddangkong.facade.BaseServiceTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;

class RoomServiceTest extends BaseServiceTest {

    @Autowired
    private RoomService roomService;

    @Nested
    class 방_설정_변경 {

        @Test
        void 방_설정_정보를_변경한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());

            int totalRound = 8;
            int timeLimit = 13_000;
            Category category = Category.IF;
            RoomSetting roomSetting = new RoomSetting(totalRound, timeLimit, category);

            // when
            roomService.updateRoomSetting(room.getId(), roomSetting);

            // then
            Room foundRoom = roomRepository.findById(room.getId()).orElseThrow();

            assertAll(
                    () -> assertThat(foundRoom.getTotalRound()).isEqualTo(totalRound),
                    () -> assertThat(foundRoom.getTimeLimit()).isEqualTo(timeLimit),
                    () -> assertThat(foundRoom.getCategory()).isEqualTo(category)
            );
        }

        @ParameterizedTest
        @ValueSource(ints = {2, 11})
        void 라운드는_3이상_10이하_여야한다(int inValidTotalRound) {
            // given
            Room room = roomRepository.save(Room.createNewRoom());

            int timeLimit = 10000;
            Category category = Category.IF;
            RoomSetting roomSetting = new RoomSetting(inValidTotalRound, timeLimit, category);

            // when & then
            assertThatThrownBy(() -> roomService.updateRoomSetting(room.getId(), roomSetting))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"
                            .formatted(3, 10, inValidTotalRound));
        }

        @ParameterizedTest
        @ValueSource(ints = {9000, 31000})
        void 시간_제한은_10000이상_30000이하_여야한다(int inValidTimeLimit) {
            // given
            Room room = roomRepository.save(Room.createNewRoom());

            int totalRound = 5;
            Category category = Category.IF;
            RoomSetting roomSetting = new RoomSetting(totalRound, inValidTimeLimit, category);

            // when & then
            assertThatThrownBy(() -> roomService.updateRoomSetting(room.getId(), roomSetting))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("시간 제한은 %dms 이상, %dms 이하만 가능합니다. requested timeLimit: %d"
                            .formatted(10000, 30000, inValidTimeLimit));
        }
    }
}
