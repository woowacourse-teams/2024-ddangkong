package ddangkong.domain.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.BaseRepositoryTest;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import java.time.LocalDateTime;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomContentRepositoryTest extends BaseRepositoryTest {

    @Autowired
    private RoomContentRepository roomContentRepository;

    @Nested
    class 방의_해당_라운드_질문_조회 {

        private static final LocalDateTime ROUND_ENDED_AT = LocalDateTime.parse("2021-08-03T00:00:00");

        private Room room;

        private BalanceContent balanceContent;

        @BeforeEach
        void setUp() {
            room = save(Room.createNewRoom());
            balanceContent = save(new BalanceContent(Category.EXAMPLE, "A vs B"));
        }

        @Test
        void 방의_현재_라운드에_해당하는_룸_컨텐츠를_조회할_수_있다() {
            // given
            int round = 1;
            RoomContent roomContent = new RoomContent(room, balanceContent, round, ROUND_ENDED_AT);
            roomContentRepository.save(roomContent);

            // when
            RoomContent actual = roomContentRepository.findByRoomAndRound(room, room.getCurrentRound()).orElseThrow();

            // then
            assertThat(actual.getId()).isEqualTo(1L);
        }
    }
}
