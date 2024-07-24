package ddangkong.domain.balance.room;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.BaseRepositoryTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomContentRepositoryTest extends BaseRepositoryTest {

    @Autowired
    private RoomContentRepository roomContentRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Nested
    class 방의_해당_라운드_질문_조회 {

        @Test
        void 방의_해당_라운드의_질문을_조회할_수_있다() {
            // given
            Long roomId = 1L;
            Room room = roomRepository.findById(roomId).get();
            int round = 2;

            // when
            RoomContent actual = roomContentRepository.findByRoomAndRound(room, round).get();

            // then
            assertThat(actual.getId()).isEqualTo(2L);
        }
    }
}
