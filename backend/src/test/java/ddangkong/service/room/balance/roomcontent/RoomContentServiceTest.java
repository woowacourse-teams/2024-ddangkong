package ddangkong.service.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import ddangkong.service.balance.option.dto.BalanceOptionResponse;
import ddangkong.service.room.balance.roomcontent.dto.RoomContentResponse;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomContentServiceTest extends BaseServiceTest {

    @Autowired
    private RoomContentService roomContentService;

    @Nested
    class 현재_방의_밸런스_게임_내용_조회 {

        private static final Long PROGRESS_ROOM_ID = 1L;
        private static final Long NOT_EXIST_ROOM_ID = -1L;
        private static final Long NOT_PROGRESSED_ROOM_ID = 2L;
        private static final Long READY_ROOM_ID = 4L;
        private static final Long FINISHED_ROOM_ID = 5L;
        private static final RoomContentResponse BALANCE_CONTENT_RESPONSE = new RoomContentResponse(
                1L,
                Category.EXAMPLE,
                5,
                2,
                30_000, // TODO 추후 sec으로 변경
                "민초 vs 반민초",
                new BalanceOptionResponse(1L, "민초"),
                new BalanceOptionResponse(2L, "반민초"));

        @Test
        void 방의_진행_중인_밸런스_게임_내용을_조회할_수_있다() {
            // when
            RoomContentResponse actual = roomContentService.getRecentRoomContent(PROGRESS_ROOM_ID);

            // then
            assertThat(actual).isEqualTo(BALANCE_CONTENT_RESPONSE);
        }

        @Test
        void 방이_없을_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomContentService.getRecentRoomContent(NOT_EXIST_ROOM_ID))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방이 존재하지 않습니다.");
        }

        @Test
        void 방의_현재_라운드의_질문이_없을_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomContentService.getRecentRoomContent(NOT_PROGRESSED_ROOM_ID))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방의 현재 진행중인 질문이 존재하지 않습니다.");
        }

        @Test
        void 방이_준비_상태인_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomContentService.getRecentRoomContent(READY_ROOM_ID))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방은 게임을 진행하고 있지 않습니다.");
        }

        @Test
        void 방이_종료_상태인_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomContentService.getRecentRoomContent(FINISHED_ROOM_ID))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방은 게임을 진행하고 있지 않습니다.");
        }
    }
}