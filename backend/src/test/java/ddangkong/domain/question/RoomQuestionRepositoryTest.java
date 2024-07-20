package ddangkong.domain.question;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.BaseRepositoryTest;
import ddangkong.domain.room.RoomQuestion;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomQuestionRepositoryTest extends BaseRepositoryTest {

    @Autowired
    private RoomQuestionRepository roomQuestionRepository;

    @Nested
    class 방의_최신_질문_조회 {

        @Test
        void 방의_가장_최신의_질문을_조회할_수_있다() {
            RoomQuestion actual = roomQuestionRepository.findTopByRoomIdOrderByCreatedAtDesc(1L).get();

            assertThat(actual.getId()).isEqualTo(2L);
        }
    }
}
