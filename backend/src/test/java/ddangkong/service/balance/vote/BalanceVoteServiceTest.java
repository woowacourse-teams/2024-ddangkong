package ddangkong.service.balance.vote;

import static ddangkong.support.fixture.MemberFixture.EDEN;
import static ddangkong.support.fixture.MemberFixture.KEOCHAN;
import static ddangkong.support.fixture.MemberFixture.PRIN;
import static ddangkong.support.fixture.MemberFixture.TACAN;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.controller.balance.content.dto.BalanceContentGroupResponse;
import ddangkong.controller.balance.content.dto.BalanceContentTotalResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionGroupResponse;
import ddangkong.controller.balance.option.dto.BalanceOptionTotalResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteRequest;
import ddangkong.controller.balance.vote.dto.BalanceVoteResponse;
import ddangkong.controller.balance.vote.dto.BalanceVoteResultResponse;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.room.Room;
import ddangkong.domain.balance.room.RoomContent;
import ddangkong.domain.balance.vote.BalanceVote;
import ddangkong.domain.member.Member;
import ddangkong.exception.BadRequestException;
import ddangkong.service.BaseServiceTest;
import ddangkong.service.balance.vote.dto.VoteFinishedResponse;
import ddangkong.support.annotation.FixedClock;
import java.time.LocalDateTime;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class BalanceVoteServiceTest extends BaseServiceTest {

    @Autowired
    private BalanceVoteService balanceVoteService;

    private BalanceContent content;

    private BalanceOption optionA;

    private BalanceOption optionB;

    private Room room;

    private Member prin;

    private Member tacan;

    private Member keochan;

    private Member eden;

    @BeforeEach
    void setUp() {
        content = balanceContentRepository.save(new BalanceContent(Category.EXAMPLE, "A vs B"));
        optionA = balanceOptionRepository.save(new BalanceOption("A", content));
        optionB = balanceOptionRepository.save(new BalanceOption("B", content));
        room = roomRepository.save(Room.createNewRoom());
        prin = memberRepository.save(PRIN.master(room));
        tacan = memberRepository.save(TACAN.common(room));
        keochan = memberRepository.save(KEOCHAN.common(room));
        eden = memberRepository.save(EDEN.common(room));
    }

    @Nested
    @FixedClock(date = "2024-07-18", time = "20:00:02")
    class 투표_생성 {

        private static final LocalDateTime ROUND_ENDED_AT = LocalDateTime.parse("2024-07-18T20:00:10");

        @BeforeEach
        void setUp() {
            roomContentRepository.save(new RoomContent(room, content, 1, ROUND_ENDED_AT, false));
        }

        @Test
        void 투표를_생성_할_수_있다() {
            // given
            BalanceVoteRequest request = new BalanceVoteRequest(tacan.getId(), optionA.getId());

            // when
            BalanceVoteResponse actual = balanceVoteService.createBalanceVote(request, room.getId(), content.getId());

            // then
            assertThat(actual.optionId()).isEqualTo(optionA.getId());
        }

        @Test
        @FixedClock(date = "2024-07-18", time = "20:00:11")
        void 투표_시간이_지난_이후_투표_시_예외를_던진다() {
            // given
            BalanceVoteRequest request = new BalanceVoteRequest(tacan.getId(), optionA.getId());

            // when & then
            assertThatThrownBy(() -> balanceVoteService.createBalanceVote(request, room.getId(), content.getId()))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("이미 종료된 라운드에는 투표할 수 없습니다.");
        }

        @Test
        void 방의_현재_라운드와_다른_방_컨텐츠의_투표하면_예외를_던진다() {
            // given
            BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.EXAMPLE, "C vs D"));
            BalanceOption optionC = balanceOptionRepository.save(new BalanceOption("C", content));
            balanceOptionRepository.save(new BalanceOption("D", content));
            int round = 2;
            roomContentRepository.save(new RoomContent(room, content, round, ROUND_ENDED_AT, false));

            BalanceVoteRequest request = new BalanceVoteRequest(tacan.getId(), optionC.getId());

            // when & then
            assertThatThrownBy(() -> balanceVoteService.createBalanceVote(request, room.getId(), content.getId()))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : 2, 방 라운드 : 1");
        }

        @Test
        void 질문에_해당하는_선택지가_아닌_경우_예외를_던진다() {
            // given
            Long invalidOptionId = 3L;
            BalanceVoteRequest request = new BalanceVoteRequest(tacan.getId(), invalidOptionId);

            // when & then
            assertThatThrownBy(() -> balanceVoteService.createBalanceVote(request, room.getId(), content.getId()))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 질문의 선택지가 존재하지 않습니다.");
        }

        @Test
        void 방에_있지_않은_멤버인_경우_예외를_던진다() {
            // given
            Long invalidMemberId = 5L;
            BalanceVoteRequest request = new BalanceVoteRequest(invalidMemberId, optionA.getId());

            // when & then
            assertThatThrownBy(() -> balanceVoteService.createBalanceVote(request, room.getId(), content.getId()))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("해당 방의 멤버가 존재하지 않습니다.");
        }
    }

    @Nested
    class 투표_결과_조회 {

        @Test
        void 투표_결과를_조회한다() {
            // given
            BalanceVoteResultResponse expected = new BalanceVoteResultResponse(
                    new BalanceContentGroupResponse(
                            new BalanceOptionGroupResponse(1L,
                                    "민초",
                                    List.of("mohamedeu al katan", "deundeun", "rupi"),
                                    3, 75),
                            new BalanceOptionGroupResponse(2L,
                                    "반민초",
                                    List.of("rapper lee"), 1, 25)
                    ),
                    new BalanceContentTotalResponse(
                            new BalanceOptionTotalResponse(1L, "민초", 50),
                            new BalanceOptionTotalResponse(2L, "반민초", 50)
                    )
            );

            // when
            BalanceVoteResultResponse actual = balanceVoteService.getBalanceVoteResult(1L, 1L);

            // then
            assertThat(actual).isEqualTo(expected);
        }

        @Test
        void 진행중인_주제가_아닌것의_투표_결과를_요청하면_예외를_발생시킨다() { // todo: 테스트명 수정, 테스트 더 추가
            // when & then
            assertThatThrownBy(() -> balanceVoteService.getBalanceVoteResult(1L, 2L))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessageContaining("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : 1, 방 라운드 : 2");
        }
    }

    @Nested
    @FixedClock(date = "2024-08-03", time = "11:00:00")
    class 투표_종료_여부_조회 {

        private static final LocalDateTime ROUND_ENDED_AT = LocalDateTime.parse("2024-08-03T11:00:10");
        private static final boolean IS_USED = false;

        @Test
        @FixedClock(date = "2024-08-03", time = "11:00:19")
        void 투표_제한_시간이_끝나지_않았지만_방의_모든_멤버가_컨텐츠에_투표했으면_모두_투표한_것이다() {
            // given
            int round = 1;
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-08-03T11:00:20");
            roomContentRepository.save(new RoomContent(room, content, round, roundEndedAt, IS_USED));
            balanceVoteRepository.save(new BalanceVote(optionA, prin));
            balanceVoteRepository.save(new BalanceVote(optionA, tacan));
            balanceVoteRepository.save(new BalanceVote(optionB, keochan));
            balanceVoteRepository.save(new BalanceVote(optionB, eden));

            // when
            VoteFinishedResponse actual = balanceVoteService.getAllVoteFinished(room.getId(), content.getId());

            // then
            assertThat(actual.isFinished()).isTrue();
        }

        @Test
        @FixedClock(date = "2024-08-03", time = "11:00:21")
        void 방의_모든_멤버가_투표하지_않았지만_컨텐츠의_투표_제한_시간이_지나면_모두_투표한_것이다() {
            // given
            int roomContentRound = 1;
            LocalDateTime roundEndedAt = LocalDateTime.parse("2024-08-03T11:00:20");
            roomContentRepository.save(new RoomContent(room, content, roomContentRound, roundEndedAt, IS_USED));

            // when
            VoteFinishedResponse actual = balanceVoteService.getAllVoteFinished(room.getId(), content.getId());

            // then
            assertThat(actual.isFinished()).isTrue();
        }

        @Test
        void 투표_제한_시간이_끝나지_않고_방의_모든_멤버가_투표하지_않았으면_모두_투표하지_않은_것이다() {
            // given
            int round = 1;
            roomContentRepository.save(new RoomContent(room, content, round, ROUND_ENDED_AT, IS_USED));
            balanceVoteRepository.save(new BalanceVote(optionA, prin));
            balanceVoteRepository.save(new BalanceVote(optionA, tacan));
            balanceVoteRepository.save(new BalanceVote(optionB, eden));

            // when
            VoteFinishedResponse actual = balanceVoteService.getAllVoteFinished(room.getId(), content.getId());

            // then
            assertThat(actual.isFinished()).isFalse();
        }

        @Test
        void 방에_존재하지_않은_방_컨텐츠의_투표_여부를_조회하면_예외가_발생한다() {
            // when & then
            assertThatThrownBy(() -> balanceVoteService.getAllVoteFinished(room.getId(), content.getId()))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("방에 존재하지 않은 컨텐츠입니다.");
        }

        @Test
        void 방의_현재_라운드와_다른_방_컨텐츠의_투표_여부를_조회하면_예외가_발생한다() {
            // given
            int round = 2;
            roomContentRepository.save(new RoomContent(room, content, round, ROUND_ENDED_AT, IS_USED));

            // when & then
            assertThatThrownBy(() -> balanceVoteService.getAllVoteFinished(room.getId(), content.getId()))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : 2, 방 라운드 : 1");
        }

        @Test
        void 이미_사용된_방_컨텐츠의_투표_여부를_조회하면_예외가_발생한다() {
            // given
            int round = 1;
            boolean isUsed = true;
            roomContentRepository.save(new RoomContent(room, content, round, ROUND_ENDED_AT, isUsed));

            // when & then
            assertThatThrownBy(() -> balanceVoteService.getAllVoteFinished(room.getId(), content.getId()))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessageContaining("이미 사용된 컨텐츠입니다.");
        }
    }
}
