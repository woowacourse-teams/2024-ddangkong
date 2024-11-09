package ddangkong.service.room.balance.roomvote;

import static ddangkong.support.fixture.MembersFixture.EDEN;
import static ddangkong.support.fixture.MembersFixture.KEOCHAN;
import static ddangkong.support.fixture.MembersFixture.MARU;
import static ddangkong.support.fixture.MembersFixture.POME;
import static ddangkong.support.fixture.MembersFixture.PRIN;
import static ddangkong.support.fixture.MembersFixture.SUNDAY;
import static ddangkong.support.fixture.MembersFixture.TACAN;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.exception.room.balance.roomvote.AlreadyVotedException;
import ddangkong.facade.BaseServiceTest;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomBalanceVoteServiceTest extends BaseServiceTest {

    @Autowired
    private RoomBalanceVoteService roomBalanceVoteService;

    private BalanceOption optionA;

    private BalanceOption optionB;

    private Room room;

    private Member prin;

    private Member tacan;

    private Member keochan;

    private Member eden;

    @BeforeEach
    void setUp() {
        BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));
        optionA = balanceOptionRepository.save(new BalanceOption("A", content));
        optionB = balanceOptionRepository.save(new BalanceOption("B", content));
        room = roomRepository.save(Room.createNewRoom());
        prin = memberRepository.save(PRIN.master(room));
        tacan = memberRepository.save(TACAN.common(room));
        keochan = memberRepository.save(KEOCHAN.common(room));
        eden = memberRepository.save(EDEN.common(room));

        Room otherRoom = roomRepository.save(Room.createNewRoom());
        memberRepository.save(POME.master(otherRoom));
        memberRepository.save(MARU.common(otherRoom));
        memberRepository.save(SUNDAY.common(otherRoom));
    }

    @Nested
    class 투표_생성 {

        private BalanceOptions balanceOptions;

        @BeforeEach
        void setUp() {
            balanceOptions = new BalanceOptions(List.of(optionA, optionB));
        }

        @Test
        void 투표를_생성한다() {
            // when
            RoomBalanceVote vote = roomBalanceVoteService.createVote(prin, balanceOptions, optionA.getId());

            // then
            assertAll(
                    () -> assertThat(vote.getMemberNickname()).isEqualTo(prin.getNickname()),
                    () -> assertThat(vote.getOptionId()).isEqualTo(optionA.getId())
            );
        }

        @Test
        void 같은_옵션에_중복_투표하는_경우_예외가_발생한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteService.createVote(prin, balanceOptions, optionA.getId()))
                    .isExactlyInstanceOf(AlreadyVotedException.class)
                    .hasMessageContaining("이미 투표했습니다. nickname: %s, option name: %s"
                            .formatted(prin.getNickname(), optionA.getName()));
        }

        @Test
        void 같은_컨텐츠의_다른_옵션에_이미_투표했을_경우_예외가_발생한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionB));

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteService.createVote(prin, balanceOptions, optionA.getId()))
                    .isExactlyInstanceOf(AlreadyVotedException.class)
                    .hasMessageContaining("이미 투표했습니다. nickname: %s, option name: %s"
                            .formatted(prin.getNickname(), optionB.getName()));
        }
    }

    @Nested
    class 모든_멤버_투표_완료_여부 {

        private BalanceOptions balanceOptions;

        private RoomMembers members;


        @BeforeEach
        void setUp() {
            balanceOptions = new BalanceOptions(List.of(optionA, optionB));
            members = new RoomMembers(List.of(prin, tacan, keochan, eden));
        }

        @Test
        void 모든_인원이_투표했으면_true를_반환한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(tacan, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(keochan, optionB));
            roomBalanceVoteRepository.save(new RoomBalanceVote(eden, optionB));

            // when
            boolean isAllMemberVoted = roomBalanceVoteService.isAllMemberVoted(members, balanceOptions);

            // then
            assertThat(isAllMemberVoted).isTrue();
        }

        @Test
        void 모든_인원이_투표하지_않았으면_false를_반환한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(tacan, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(keochan, optionB));

            // when
            boolean isAllMemberVoted = roomBalanceVoteService.isAllMemberVoted(members, balanceOptions);

            // then
            assertThat(isAllMemberVoted).isFalse();
        }
    }
}
