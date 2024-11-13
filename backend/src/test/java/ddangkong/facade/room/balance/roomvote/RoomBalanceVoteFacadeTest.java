package ddangkong.facade.room.balance.roomvote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.room.balance.roomcontent.MismatchRoundException;
import ddangkong.exception.room.balance.roomvote.CanNotCheckMatchingPercentException;
import ddangkong.exception.room.balance.roomvote.VoteFinishedException;
import ddangkong.facade.BaseServiceTest;
import ddangkong.facade.balance.vote.dto.ContentTotalBalanceVoteResponse;
import ddangkong.facade.balance.vote.dto.GiveUpVoteMemberResponse;
import ddangkong.facade.balance.vote.dto.OptionTotalBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.ContentRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.OptionRoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteRequest;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomBalanceVoteResultResponse;
import ddangkong.facade.room.balance.roomvote.dto.RoomMembersVoteMatchingResponse;
import ddangkong.facade.room.balance.roomvote.dto.VoteFinishedResponse;
import ddangkong.support.annotation.FixedClock;
import java.time.LocalDateTime;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomBalanceVoteFacadeTest extends BaseServiceTest {

    @Autowired
    private RoomBalanceVoteFacade roomBalanceVoteFacade;

    @Nested
    @FixedClock(date = "2024-07-18", time = "20:00:02")
    class 투표_생성 {

        Room room;
        int currentRound;
        Member member;
        BalanceContent balanceContent;
        BalanceOption option1;
        BalanceOption option2;

        @BeforeEach
        void init() {
            currentRound = 1;
            room = roomFixture.createProgressRoom(currentRound);
            member = memberFixture.createMaster(room);

            balanceContent = balanceContentFixture.create(room.getCategory(), "Content");
            option1 = balanceOptionFixture.create("Option1", balanceContent);
            option2 = balanceOptionFixture.create("Option2", balanceContent);
        }

        @Test
        void 투표를_생성_할_수_있다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-07-18T20:00:12");
            roomContentFixture.initRoomContent(room, balanceContent, currentRound, voteDeadline);
            RoomBalanceVoteRequest request = new RoomBalanceVoteRequest(member.getId(), option1.getId());

            // when
            RoomBalanceVoteResponse actual = roomBalanceVoteFacade.createVote(request, room.getId(),
                    balanceContent.getId());

            // then
            assertThat(actual.optionId()).isEqualTo(option1.getId());
        }

        @Test
        @FixedClock(date = "2024-07-18", time = "20:00:11")
        void 투표_마감_시간_이후에_투표하면_예외를_던진다() {
            // given
            roomContentFixture.initRoomContent(room, balanceContent, currentRound,
                    LocalDateTime.of(2024, 7, 18, 20, 00, 10));
            RoomBalanceVoteRequest request = new RoomBalanceVoteRequest(member.getId(), option1.getId());

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteFacade.createVote(request, room.getId(),
                    balanceContent.getId())).isExactlyInstanceOf(VoteFinishedException.class);
        }

        @Test
        void 중복_투표_시_예외를_던진다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-07-18T20:00:12");
            roomContentFixture.initRoomContent(room, balanceContent, currentRound, voteDeadline);
            roomBalanceVoteFixture.create(member, option1);
            RoomBalanceVoteRequest request = new RoomBalanceVoteRequest(member.getId(), option1.getId());

            // when & then
            assertThatThrownBy(
                    () -> roomBalanceVoteFacade.createVote(request, room.getId(),
                            balanceContent.getId())).isExactlyInstanceOf(
                    VoteFinishedException.class);
        }

        @Test
        void 현재_라운드와_다른_라운드_컨텐츠에_투표하면_예외를_던진다() {
            // given
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-07-18T20:00:12");

            BalanceContent beforeBalanceContent = balanceContentFixture.create(Category.FOOD, "Content");
            BalanceOption beforeContentOption = balanceOptionFixture.create("Option1", beforeBalanceContent);
            balanceOptionFixture.create("Option2", beforeBalanceContent);
            roomContentFixture.initRoomContent(room, beforeBalanceContent, 2, voteDeadline);

            RoomBalanceVoteRequest request = new RoomBalanceVoteRequest(member.getId(), beforeContentOption.getId());

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteFacade.createVote(request, room.getId(),
                    beforeBalanceContent.getId())).isExactlyInstanceOf(MismatchRoundException.class)
                    .hasMessage("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : 2, 방 라운드 : 1");
        }
    }

    @Nested
    class 투표_결과_조회 {

        @Test
        void 투표_결과를_조회한다() {
            // given
            int currentRound = 1;
            Room room = roomFixture.createProgressRoom(currentRound);
            Member member1 = memberFixture.createMaster("member1", room);
            Member member2 = memberFixture.createCommon("member2", room);
            Member member3 = memberFixture.createCommon("member3", room);
            Member member4 = memberFixture.createCommon("member4", room);
            Member giveUpMember = memberFixture.createCommon("member5", room);

            BalanceContent balanceContent = balanceContentFixture.create(Category.IF, "Content");
            BalanceOption option1 = balanceOptionFixture.create("Option1", balanceContent);
            BalanceOption option2 = balanceOptionFixture.create("Option2", balanceContent);
            roomContentFixture.initRoomContent(room, balanceContent, currentRound, LocalDateTime.now().minusSeconds(1));

            roomBalanceVoteFixture.create(member1, option1);
            roomBalanceVoteFixture.create(member2, option1);
            roomBalanceVoteFixture.create(member3, option1);
            roomBalanceVoteFixture.create(member4, option2);

            RoomBalanceVoteResultResponse expected = new RoomBalanceVoteResultResponse(
                    new ContentRoomBalanceVoteResponse(
                            new OptionRoomBalanceVoteResponse(option1.getId(), option1.getName(),
                                    List.of(member1.getNickname(), member2.getNickname(), member3.getNickname()), 3,
                                    75), new OptionRoomBalanceVoteResponse(option2.getId(), option2.getName(),
                            List.of(member4.getNickname()), 1, 25),
                            new GiveUpVoteMemberResponse(List.of(giveUpMember.getNickname()), 1)),
                    new ContentTotalBalanceVoteResponse(
                            new OptionTotalBalanceVoteResponse(option1.getId(), option1.getName(), 0),
                            new OptionTotalBalanceVoteResponse(option2.getId(), option2.getName(), 0)));

            // when
            RoomBalanceVoteResultResponse actual = roomBalanceVoteFacade.getAllVoteResult(1L, 1L);

            // then
            assertThat(actual).isEqualTo(expected);
        }

        @Test
        void 진행중인_주제가_아닌것의_투표_결과를_요청하면_예외를_발생시킨다() { // todo: 테스트명 수정, 테스트 더 추가
            // given
            int beforeRound = 1;
            int currentRound = 2;
            Room room = roomFixture.createProgressRoom(currentRound);
            memberFixture.createMaster("member1", room);

            BalanceContent beforeBalanceContent = balanceContentFixture.create(room.getCategory(), "Content1");
            balanceOptionFixture.create("Option1", beforeBalanceContent);
            balanceOptionFixture.create("Option2", beforeBalanceContent);
            roomContentFixture.initRoomContent(room, beforeBalanceContent, beforeRound,
                    LocalDateTime.now().minusSeconds(1));

            BalanceContent currentBalanceContent = balanceContentFixture.create(room.getCategory(), "Content2");
            balanceOptionFixture.create("Option3", currentBalanceContent);
            balanceOptionFixture.create("Option4", currentBalanceContent);
            roomContentFixture.initRoomContent(room, currentBalanceContent, currentRound,
                    LocalDateTime.now().plusDays(1));

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteFacade.getAllVoteResult(room.getId(),
                    beforeBalanceContent.getId())).isExactlyInstanceOf(MismatchRoundException.class)
                    .hasMessageContaining("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : 1, 방 라운드 : 2");
        }
    }

    @Nested
    @FixedClock(date = "2024-08-03", time = "11:00:00")
    class 투표_종료_여부_조회 {

        private Room room;
        private Member master;
        private Member member1;
        private BalanceContent balanceContent;
        private BalanceOption option1;
        private BalanceOption option2;

        @BeforeEach
        void init() {
            int currentRound = 1;
            room = roomFixture.createProgressRoom(currentRound);
            master = memberFixture.createMaster("master", room);
            member1 = memberFixture.createCommon("member1", room);

            balanceContent = balanceContentFixture.create(room.getCategory(), "Content");
            option1 = balanceOptionFixture.create("Option1", balanceContent);
            option2 = balanceOptionFixture.create("Option2", balanceContent);

        }

        @Test
        @FixedClock(date = "2024-08-03", time = "11:00:19")
        void 투표_마감_시간이_지나지_않았지만_방의_모든_멤버가_컨텐츠에_투표했으면_투표가_종료된_것이다() {
            // given
            int round = 1;
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T11:00:20");
            roomContentFixture.initRoomContent(room, balanceContent, round, voteDeadline);
            roomBalanceVoteFixture.create(master, option1);
            roomBalanceVoteFixture.create(member1, option2);

            // when
            VoteFinishedResponse actual = roomBalanceVoteFacade.getVoteFinished(room.getId(), balanceContent.getId());

            // then
            assertAll(
                    () -> assertThat(actual.isFinished()).isTrue(),
                    () -> assertThat(actual.master().memberId()).isEqualTo(master.getId())
            );
        }

        @Test
        @FixedClock(date = "2024-08-03", time = "11:00:21")
        void 방의_모든_멤버가_투표하지_않았지만_투표_마감_시간이_지났으면_투표가_종료된_것이다() {
            // given
            int round = 1;
            LocalDateTime voteDeadline = LocalDateTime.parse("2024-08-03T11:00:20");
            roomContentFixture.initRoomContent(room, balanceContent, round, voteDeadline);

            // when
            VoteFinishedResponse actual = roomBalanceVoteFacade.getVoteFinished(room.getId(), balanceContent.getId());

            // then
            assertAll(
                    () -> assertThat(actual.isFinished()).isTrue(),
                    () -> assertThat(actual.master().memberId()).isEqualTo(master.getId())
            );
        }

        @Test
        void 투표_마감_시간이_지나지_않고_방의_모든_멤버가_투표하지_않았으면_투표가_종료되지_않은_것이다() {
            // given
            int round = 1;
            LocalDateTime notFinishedTime = LocalDateTime.parse("2024-08-03T11:00:09");
            roomContentFixture.initRoomContent(room, balanceContent, round, notFinishedTime);
            roomBalanceVoteFixture.create(master, option1);

            // when
            VoteFinishedResponse actual = roomBalanceVoteFacade.getVoteFinished(room.getId(), balanceContent.getId());

            // then
            assertAll(
                    () -> assertThat(actual.isFinished()).isFalse(),
                    () -> assertThat(actual.master().memberId()).isEqualTo(master.getId())
            );
        }

        @Test
        void 방의_현재_라운드와_다른_방_컨텐츠의_투표_종료_여부를_조회하면_예외가_발생한다() {
            // given
            int round = 2;
            LocalDateTime notFinishedTime = LocalDateTime.parse("2024-08-03T11:00:09");
            roomContentFixture.initRoomContent(room, balanceContent, round, notFinishedTime);

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteFacade.getVoteFinished(room.getId(), balanceContent.getId()))
                    .isExactlyInstanceOf(MismatchRoundException.class)
                    .hasMessageContaining("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : 2, 방 라운드 : 1");
        }
    }

    @Nested
    class 투표_매칭도_조회 {

        private Member member1;
        private Member member2;
        private Member member3;
        private Room room;
        private List<RoomContent> roomContents;

        @BeforeEach
        void init() {
            room = roomFixture.createFinishedRoom();
            roomContents = roomContentFixture.initRoomContents(room);
            balanceOptionFixture.initOptions(roomContents);

            member1 = memberFixture.createMaster("member1", room);
            member2 = memberFixture.createCommon("member2", room);
            member3 = memberFixture.createCommon("member3", room);
        }

        @Test
        void 종료된_방에서_특정_멤버에_대한_다른_멤버들의_투표_매칭도를_조회한다() {
            // given
            for (RoomContent roomContent : roomContents) {
                List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(
                        roomContent.getBalanceContent());
                roomBalanceVoteFixture.create(member1, balanceOptions.get(0));
                roomBalanceVoteFixture.create(member2, balanceOptions.get(0));
                roomBalanceVoteFixture.create(member3, balanceOptions.get(1));
            }

            // when
            RoomMembersVoteMatchingResponse actual = roomBalanceVoteFacade.getRoomMembersVoteMatching(room.getId(),
                    member1.getId());

            // then
            assertAll(() -> assertThat(actual.existMatching()).isTrue(),
                    () -> assertThat(actual.matchedMembers()).hasSize(2),
                    () -> assertThat(actual.matchedMembers().get(0).memberId()).isEqualTo(member2.getId()),
                    () -> assertThat(actual.matchedMembers().get(0).rank()).isEqualTo(1),
                    () -> assertThat(actual.matchedMembers().get(0).matchingPercent()).isEqualTo(100),
                    () -> assertThat(actual.matchedMembers().get(1).memberId()).isEqualTo(member3.getId()),
                    () -> assertThat(actual.matchedMembers().get(1).matchingPercent()).isEqualTo(0),
                    () -> assertThat(actual.matchedMembers().get(1).rank()).isEqualTo(2));
        }

        @Test
        void 게임이_종료되지_않은_방은_매칭도_조회가_불가능하다() {
            // given
            Room notFinishedRoom = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(notFinishedRoom);

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteFacade.getRoomMembersVoteMatching(notFinishedRoom.getId(),
                    member1.getId())).isExactlyInstanceOf(CanNotCheckMatchingPercentException.class);
        }

        @Test
        void 매칭된_사람이_없으면_매칭_여부가_false이다() {
            // given
            for (RoomContent roomContent : roomContents) {
                List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(
                        roomContent.getBalanceContent());
                roomBalanceVoteFixture.create(member1, balanceOptions.get(0));
                roomBalanceVoteFixture.create(member2, balanceOptions.get(0));
                roomBalanceVoteFixture.create(member3, balanceOptions.get(1));
            }

            // when
            RoomMembersVoteMatchingResponse actual = roomBalanceVoteFacade.getRoomMembersVoteMatching(room.getId(),
                    member3.getId());

            // then
            assertAll(() -> assertThat(actual.existMatching()).isFalse(),
                    () -> assertThat(actual.matchedMembers()).hasSize(2));
        }

        @Test
        void 매칭_퍼센트가_같은_사람들은_랭킹이_동일하다() {
            // given
            for (RoomContent roomContent : roomContents) {
                List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(
                        roomContent.getBalanceContent());
                roomBalanceVoteFixture.create(member1, balanceOptions.get(0));
                roomBalanceVoteFixture.create(member2, balanceOptions.get(0));
                roomBalanceVoteFixture.create(member3, balanceOptions.get(0));
            }

            // when
            RoomMembersVoteMatchingResponse actual = roomBalanceVoteFacade.getRoomMembersVoteMatching(room.getId(),
                    member1.getId());

            // then
            assertAll(() -> assertThat(actual.existMatching()).isTrue(),
                    () -> assertThat(actual.matchedMembers()).hasSize(2),
                    () -> assertThat(actual.matchedMembers().get(0).rank()).isEqualTo(1),
                    () -> assertThat(actual.matchedMembers().get(0).matchingPercent()).isEqualTo(100),
                    () -> assertThat(actual.matchedMembers().get(1).rank()).isEqualTo(1),
                    () -> assertThat(actual.matchedMembers().get(1).matchingPercent()).isEqualTo(100));
        }
    }
}
