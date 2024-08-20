package ddangkong.facade.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.balance.content.Category;
import ddangkong.exception.room.NotProgressedRoomException;
import ddangkong.exception.room.balance.roomcontent.NotFoundCurrentRoundRoomContentException;
import ddangkong.facade.BaseServiceTest;
import ddangkong.facade.balance.option.dto.BalanceOptionResponse;
import ddangkong.facade.room.balance.roomcontent.dto.RoomContentResponse;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomContentFacadeTest extends BaseServiceTest {

    @Autowired
    private RoomContentFacade roomContentFacade;

    @Nested
    class 현재_방의_밸런스_게임_내용_조회 {

        private static final Long PROGRESS_ROOM_ID = 1L;
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
            RoomContentResponse actual = roomContentFacade.getRecentRoomContent(PROGRESS_ROOM_ID);

            // then
            assertThat(actual).isEqualTo(BALANCE_CONTENT_RESPONSE);
        }

        @Test
        void 방의_현재_라운드의_질문이_없을_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomContentFacade.getRecentRoomContent(NOT_PROGRESSED_ROOM_ID))
                    .isExactlyInstanceOf(NotFoundCurrentRoundRoomContentException.class)
                    .hasMessage("해당 방의 현재 라운드의 컨텐츠가 존재하지 않습니다. currentRound: 1");
        }

        @Test
        void 방이_준비_상태인_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomContentFacade.getRecentRoomContent(READY_ROOM_ID))
                    .isExactlyInstanceOf(NotProgressedRoomException.class);
        }

        @Test
        void 방이_종료_상태인_경우_예외를_던진다() {
            // when & then
            assertThatThrownBy(() -> roomContentFacade.getRecentRoomContent(FINISHED_ROOM_ID))
                    .isExactlyInstanceOf(NotProgressedRoomException.class);
        }
    }
}
