package ddangkong.facade.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.room.Room;
import ddangkong.exception.room.NotProgressedRoomException;
import ddangkong.exception.room.balance.roomcontent.NotFoundCurrentRoundRoomContentException;
import ddangkong.facade.BaseServiceTest;
import ddangkong.facade.room.balance.roomcontent.dto.RoomContentResponse;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomContentFacadeTest extends BaseServiceTest {

    @Autowired
    private RoomContentFacade roomContentFacade;

    @Nested
    class 현재_방의_밸런스_게임_내용_조회 {

        @Test
        void 방의_진행_중인_밸런스_게임_내용을_조회할_수_있다() {
            // given
            Room progressRoom = roomFixture.createProgressRoom(1);
            roomContentFixture.initRoomContents(progressRoom);

            // when
            RoomContentResponse actual = roomContentFacade.getRecentRoomContent(progressRoom.getId());

            // then
            assertThat(actual.currentRound()).isEqualTo(1);
        }

        @Test
        void 방의_현재_라운드의_질문이_없을_경우_예외를_던진다() {
            // given
            Room progressRoom = roomFixture.createProgressRoom();

            // when & then
            assertThatThrownBy(() -> roomContentFacade.getRecentRoomContent(progressRoom.getId()))
                    .isExactlyInstanceOf(NotFoundCurrentRoundRoomContentException.class)
                    .hasMessage("해당 방의 현재 라운드의 컨텐츠가 존재하지 않습니다. currentRound: 1");
        }

        @Test
        void 방이_준비_상태인_경우_예외를_던진다() {
            // given
            Room notStartedRoom = roomFixture.createNotStartedRoom();

            // when & then
            assertThatThrownBy(() -> roomContentFacade.getRecentRoomContent(notStartedRoom.getId()))
                    .isExactlyInstanceOf(NotProgressedRoomException.class);
        }

        @Test
        void 방이_종료_상태인_경우_예외를_던진다() {
            // given
            Room finishedRoom = roomFixture.createFinishedRoom();

            // when & then
            assertThatThrownBy(() -> roomContentFacade.getRecentRoomContent(finishedRoom.getId()))
                    .isExactlyInstanceOf(NotProgressedRoomException.class);
        }
    }
}
