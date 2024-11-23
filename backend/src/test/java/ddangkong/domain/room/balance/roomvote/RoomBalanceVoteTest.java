package ddangkong.domain.room.balance.roomvote;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.support.fixture.EntityFixtureUtils;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomBalanceVoteTest {

    @Nested
    class 투표_한_사람_확인 {

        private static final BalanceContent CONTENT = new BalanceContent(Category.IF, "질문?");
        private static final BalanceOption OPTION = new BalanceOption("선택지", CONTENT);
        private static final Room ROOM = Room.createNewRoom();

        @Test
        void 투표한_사람인지_확인_할_수_있다() {
            Member member = Member.createCommon("일반 유저", ROOM);
            EntityFixtureUtils.setId(member, 1L);
            RoomBalanceVote vote = new RoomBalanceVote(member, OPTION);

            boolean actual = vote.isOwner(member);

            assertThat(actual).isTrue();
        }

        @Test
        void 투표한_사람이_아닌지_확인_할_수_있다() {
            Member member = Member.createCommon("일반 유저", ROOM);
            EntityFixtureUtils.setId(member, 1L);
            Member otherMember = Member.createCommon("일반 유저2", ROOM);
            EntityFixtureUtils.setId(otherMember, 2L);
            RoomBalanceVote vote = new RoomBalanceVote(member, OPTION);

            boolean actual = vote.isOwner(otherMember);

            assertThat(actual).isFalse();
        }
    }
}
