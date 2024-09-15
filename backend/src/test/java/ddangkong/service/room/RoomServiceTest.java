package ddangkong.service.room;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.facade.BaseServiceTest;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

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
            int timeLimit = 10_000;
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
    }

    @Test
    @Transactional
    void deleteAll_테스트() {
        Room a1 = roomRepository.save(Room.createNewRoom());
        Room a2 = roomRepository.save(Room.createNewRoom());

        roomRepository.deleteAll(List.of(a1, a2));

        Room b1 = roomRepository.save(Room.createNewRoom());
        Room b2 = roomRepository.save(Room.createNewRoom());
        roomRepository.deleteAll(List.of(b1, b2));
    }
}
