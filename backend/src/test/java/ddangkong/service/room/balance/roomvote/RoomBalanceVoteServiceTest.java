package ddangkong.service.room.balance.roomvote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
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

    @Nested
    class 투표_생성 {

        private BalanceOptions balanceOptions;
        private Room room;
        private Member member;
        private BalanceContent balanceContent;
        private BalanceOption option1;
        private BalanceOption option2;

        @BeforeEach
        void setUp() {
            room = roomFixture.createNotStartedRoom();
            member = memberFixture.createMaster(room);

            balanceContent = balanceContentFixture.create(room.getCategory());
            option1 = balanceOptionFixture.create(balanceContent);
            option2 = balanceOptionFixture.create(balanceContent);
            balanceOptions = new BalanceOptions(List.of(option1, option2));
        }


        @Test
        void 투표를_생성한다() {
            // when
            RoomBalanceVote vote = roomBalanceVoteService.createVote(member, balanceOptions, option1.getId());

            // then
            assertAll(() -> assertThat(vote.getMemberNickname()).isEqualTo(member.getNickname()),
                    () -> assertThat(vote.getOptionId()).isEqualTo(option1.getId()));
        }

        @Test
        void 같은_옵션에_중복_투표하는_경우_예외가_발생한다() {
            // given
            roomBalanceVoteFixture.create(member, option1);

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteService.createVote(member, balanceOptions,
                    option1.getId())).isExactlyInstanceOf(AlreadyVotedException.class).hasMessageContaining(
                    "이미 투표했습니다. nickname: %s, option name: %s".formatted(member.getNickname(), option1.getName()));
        }

        @Test
        void 같은_컨텐츠의_다른_옵션에_이미_투표했을_경우_예외가_발생한다() {
            // given
            roomBalanceVoteFixture.create(member, option1);

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteService.createVote(member, balanceOptions,
                    option2.getId())).isExactlyInstanceOf(AlreadyVotedException.class).hasMessageContaining(
                    "이미 투표했습니다. nickname: %s, option name: %s".formatted(member.getNickname(), option1.getName()));
        }
    }
}
