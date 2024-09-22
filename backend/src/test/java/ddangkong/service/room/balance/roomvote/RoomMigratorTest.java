package ddangkong.service.room.balance.roomvote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.facade.BaseServiceTest;
import ddangkong.support.fixture.MemberFixture;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomMigratorTest extends BaseServiceTest {

    @Autowired
    private RoomMigrator roomMigrator;

    private BalanceOption optionA;

    private BalanceOption optionB;

    private Room room;

    private Member prin;

    private Member keochan;

    private Member maru;

    private Member pome;

    @BeforeEach
    void setUp() {
        BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));
        optionA = balanceOptionRepository.save(new BalanceOption("A", content));
        optionB = balanceOptionRepository.save(new BalanceOption("B", content));
        room = roomRepository.save(Room.createNewRoom());
        prin = memberRepository.save(MemberFixture.PRIN.master(room));
        keochan = memberRepository.save(MemberFixture.KEOCHAN.common(room));
        maru = memberRepository.save(MemberFixture.MARU.common(room));
        pome = memberRepository.save(MemberFixture.POME.common(room));
    }

    @Nested
    class 방_투표_마이그레이션 {

        @Test
        void 방_투표_정보를_전체_투표_정보로_마이그레이션한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(keochan, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(maru, optionB));
            roomBalanceVoteRepository.save(new RoomBalanceVote(pome, optionB));

            // when
            roomMigrator.migrateFinishedRoom(room);

            // then
            assertAll(
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(optionA)).isEqualTo(2),
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(optionB)).isEqualTo(2)
            );
        }
    }

    @Nested
    class 멤버_투표_마이그레이션 {

        @Test
        void 멤버_투표_삭제_후_전체_투표를_저장한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));

            // when
            roomMigrator.migrateRoomVoteToTotalVote(prin);

            // then
            assertAll(
                    () -> assertThat(roomBalanceVoteRepository.findByMember(prin)).isEmpty(),
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(optionA)).isEqualTo(1)
            );
        }
    }
}
