package ddangkong.domain.balance.vote;

import static org.assertj.core.api.Assertions.assertThat;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.support.fixture.EntityFixtureUtils;
import java.util.List;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class TotalBalanceVotesTest {

    @Nested
    class 투표_수_세기 {

        private static final BalanceContent DEFAULT_CONTENT = new BalanceContent(Category.IF, "질문이다");

        @Test
        void 해당_옵션의_투표_수를_셀_수_있다() {
            // given
            BalanceOption option1 = new BalanceOption("선택지1", DEFAULT_CONTENT);
            EntityFixtureUtils.setId(option1, 1L);
            BalanceOption option2 = new BalanceOption("선택지2", DEFAULT_CONTENT);
            EntityFixtureUtils.setId(option2, 2L);

            TotalBalanceVote vote1 = new TotalBalanceVote(option1);
            TotalBalanceVote vote2 = new TotalBalanceVote(option2);
            TotalBalanceVote vote3 = new TotalBalanceVote(option2);
            TotalBalanceVotes votes = new TotalBalanceVotes(List.of(vote1, vote2, vote3));

            // when
            int actual = votes.countVotes(option2);

            // then
            assertThat(actual).isEqualTo(2);
        }

        @Test
        void 해당_옵션의_투표가_없을_경우_0표를_반환한다() {
            // given
            BalanceOption option1 = new BalanceOption("선택지1", DEFAULT_CONTENT);
            EntityFixtureUtils.setId(option1, 1L);
            BalanceOption option2 = new BalanceOption("선택지2", DEFAULT_CONTENT);
            EntityFixtureUtils.setId(option2, 2L);

            TotalBalanceVote vote1 = new TotalBalanceVote(option2);
            TotalBalanceVote vote2 = new TotalBalanceVote(option2);
            TotalBalanceVote vote3 = new TotalBalanceVote(option2);
            TotalBalanceVotes votes = new TotalBalanceVotes(List.of(vote1, vote2, vote3));

            // when
            int actual = votes.countVotes(option1);

            // then
            assertThat(actual).isZero();
        }
    }
}
