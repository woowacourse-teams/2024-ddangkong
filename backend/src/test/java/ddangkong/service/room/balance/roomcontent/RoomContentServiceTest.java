package ddangkong.service.room.balance.roomcontent;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.exception.room.balance.roomcontent.EmptyVoteDeadlineException;
import ddangkong.facade.BaseServiceTest;
import ddangkong.support.annotation.FixedClock;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomContentServiceTest extends BaseServiceTest {

    @Autowired
    private RoomContentService roomContentService;

    @Nested
    class 방_컨텐츠들_준비 {

        @Test
        void 컨텐츠_개수만큼_방_컨텐츠를_생성하고_첫_번째_방_컨텐츠의_투표를_시작한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            List<BalanceContent> balanceContents = balanceContentFixture.createContents(room.getCategory(),
                    room.getTotalRound());

            // when
            roomContentService.prepareRoomContents(room, balanceContents);

            // then
            List<RoomContent> roomContents = roomContentRepository.findAllByRoom(room);
            roomContents.sort(Comparator.comparingInt(RoomContent::getRound));
            assertAll(
                    () -> assertThat(roomContents).hasSize(room.getTotalRound()),
                    () -> assertThat(roomContents.get(0).getVoteDeadline()).isNotNull(),
                    () -> assertThatThrownBy(() -> roomContents.get(1).getVoteDeadline())
                            .isExactlyInstanceOf(EmptyVoteDeadlineException.class)
            );
        }
    }

    @Nested
    class 다음_방_컨텐츠_진행 {

        @Test
        void 다음_방_컨텐츠를_진행한다() {
            // given
            int currentRound = 2;
            Room room = roomFixture.createProgressRoom(currentRound);
            roomContentFixture.initRoomContents(room);

            // when
            roomContentService.progressNextRoomContent(room);

            // then
            RoomContent roomContent = roomContentRepository.findByRoomAndRound(room, currentRound).orElseThrow();
            assertThat(roomContent.getVoteDeadline()).isNotNull();
        }
    }

    @Nested
    class 방_컨텐츠_삭제 {

        @Test
        void 모든_방_컨텐츠를_삭제한다() {
            // given
            Room room = roomFixture.createFinishedRoom();
            roomContentFixture.initRoomContents(room);
            List<RoomContent> roomContents = roomContentRepository.findAllByRoom(room);

            // when
            roomContentService.deleteRoomContents(room);

            // then
            List<RoomContent> afterDeleteRoomContents = roomContentRepository.findAllByRoom(room);
            assertThat(roomContents).hasSize(room.getTotalRound());
            assertThat(afterDeleteRoomContents).hasSize(0);
        }
    }

    @Nested
    class 현재_라운드의_방_컨텐츠_조회 {

        @Test
        void 현재_라운드의_방_컨텐츠를_조회한다() {
            // given
            int currentRound = 1;
            Room room = roomFixture.createProgressRoom(1);
            roomContentFixture.initRoomContents(room);

            // when
            RoomContent roomContent = roomContentService.getCurrentRoundRoomContent(room);

            // then
            assertThat(roomContent.getRound()).isEqualTo(currentRound);
        }
    }

    @Nested
    @FixedClock(date = "2024-08-17", time = "16:20:15")
    class 투표_마감_여부_조회 {

        @Test
        void 현재_시간이_현재_라운드_방_컨텐츠의_투표_마감_시간보다_이후이면_해당_라운드의_투표는_마감된_것이다() {
            // given
            int currentRound = 1;
            Room room = roomFixture.createProgressRoom(currentRound);
            LocalDateTime voteFinishedTime = LocalDateTime.parse("2024-08-17T16:20:14");

            BalanceContent balanceContent = balanceContentFixture.create(room.getCategory(), "Content");
            roomContentFixture.initRoomContent(room, balanceContent, currentRound, voteFinishedTime);

            // when
            boolean isOverVoteDeadline = roomContentService.isOverVoteDeadline(room, balanceContent);

            // then
            assertThat(isOverVoteDeadline).isTrue();
        }

        @Test
        void 현재_시간이_현재_라운드_방_컨텐츠의_투표_마감_시간보다_이전이면_해당_라운드의_투표는_마감되지_않은_것이다() {
            // given
            int currentRound = 1;
            Room room = roomFixture.createProgressRoom(currentRound);
            LocalDateTime voteFinishedTime = LocalDateTime.parse("2024-08-17T16:20:20");

            BalanceContent balanceContent = balanceContentFixture.create(room.getCategory(), "Content");
            roomContentFixture.initRoomContent(room, balanceContent, currentRound, voteFinishedTime);

            // when
            boolean isOverVoteDeadline = roomContentService.isOverVoteDeadline(room, balanceContent);

            // then
            assertThat(isOverVoteDeadline).isFalse();
        }
    }
}
