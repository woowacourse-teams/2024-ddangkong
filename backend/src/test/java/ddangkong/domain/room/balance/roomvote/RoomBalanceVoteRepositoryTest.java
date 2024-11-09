package ddangkong.domain.room.balance.roomvote;

import static ddangkong.support.fixture.MembersFixture.PRIN;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.BaseRepositoryTest;
import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;

class RoomBalanceVoteRepositoryTest extends BaseRepositoryTest {

    @Autowired
    private RoomBalanceVoteRepository roomBalanceVoteRepository;

    @Nested
    class 유니크_제약조건 {

        @Test
        void 같은_멤버가_같은_옵션에_투표하면_예외가_발생한다() {
            // given
            Room room = save(Room.createNewRoom());
            Member prin = save(PRIN.master(room));
            BalanceContent content = save(new BalanceContent(Category.IF, "A vs B"));
            BalanceOption optionA = save(new BalanceOption("A", content));

            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));

            // when & then
            assertThatThrownBy(() -> roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA)))
                    .isExactlyInstanceOf(DataIntegrityViolationException.class);
        }
    }
}
