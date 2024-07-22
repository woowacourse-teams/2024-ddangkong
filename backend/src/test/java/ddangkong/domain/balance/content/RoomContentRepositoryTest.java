package ddangkong.domain.balance.content;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.BaseRepositoryTest;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomContentRepositoryTest extends BaseRepositoryTest {

    @Autowired
    private RoomContentRepository roomContentRepository;

    @Nested
    class 방의_최신_질문_조회 {

        @Test
        void 방의_가장_최신의_질문을_조회할_수_있다() {
            // given
            Long recentContentId = 1L;

            // when
            RoomContent actual = roomContentRepository.findTopByRoomIdOrderByCreatedAtDesc(recentContentId).get();

            // then
            assertThat(actual.getId()).isEqualTo(2L);
        }
    }
}
