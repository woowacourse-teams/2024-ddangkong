package ddangkong.service.room.balance.roomvote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.facade.BaseServiceTest;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomMigratorTest extends BaseServiceTest {

    @Autowired
    private RoomMigrator roomMigrator;

    private BalanceContent balanceContent;
    private BalanceOption option1;
    private BalanceOption option2;
    private Room finishedRoom;
    private Member member1;
    private Member member2;
    private Member member3;

    @BeforeEach
    void setUp() {
        finishedRoom = roomFixture.createFinishedRoom();
        balanceContent = balanceContentFixture.create(finishedRoom.getCategory(), "Content");
        option1 = balanceOptionFixture.create("Option1", balanceContent);
        option2 = balanceOptionFixture.create("Option2", balanceContent);

        member1 = memberFixture.createMaster(finishedRoom);
        member2 = memberFixture.createCommon(1, finishedRoom);
        member3 = memberFixture.createCommon(2, finishedRoom);
    }

    @Nested
    class 여러개의_방_정보_마이그레이션 {

        @Test
        void 입력받은_방에_대한_컨텐츠_멤버_방_정보를_삭제하고_방투표를_전체투표로_마이그레이션한다() {
            // given
            roomContentFixture.initRoomContent(finishedRoom, balanceContent, 1);
            roomBalanceVoteFixture.create(member1, option1);
            roomBalanceVoteFixture.create(member2, option1);
            roomBalanceVoteFixture.create(member3, option1);

            // when
            roomMigrator.migrateRooms(List.of(finishedRoom));

            // then
            Optional<Room> migratedRoom = roomRepository.findById(finishedRoom.getId());
            List<RoomContent> migratedRoomContents = roomContentRepository.findAllByRoom(finishedRoom);
            List<Member> migratedMembers = memberRepository.findAllByRoom(finishedRoom);
            List<RoomBalanceVote> migratedRoomVotes = roomBalanceVoteRepository.findByMember(member3);
            long migratedTotalVotes = totalBalanceVoteRepository.countByBalanceOption(option1);

            assertThat(migratedRoom).isEmpty();
            assertThat(migratedRoomContents).hasSize(0);
            assertThat(migratedMembers).hasSize(0);
            assertThat(migratedRoomVotes).hasSize(0);
            assertThat(migratedTotalVotes).isEqualTo(3);
        }
    }

    @Nested
    class 방_투표_마이그레이션 {

        @Test
        void 방_투표_정보를_전체_투표_정보로_마이그레이션한다() {
            // given
            roomContentFixture.initRoomContent(finishedRoom, balanceContent, 1);
            roomBalanceVoteFixture.create(member1, option1);
            roomBalanceVoteFixture.create(member2, option1);
            roomBalanceVoteFixture.create(member3, option2);

            // when
            roomMigrator.migrateRoom(finishedRoom);

            // then
            assertAll(
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(option1)).isEqualTo(2),
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(option2)).isEqualTo(1)
            );
        }
    }

    @Nested
    class 멤버_투표_마이그레이션 {

        @Test
        void 멤버_투표_삭제_후_전체_투표를_저장한다() {
            // given
            roomBalanceVoteFixture.create(member1, option1);

            // when
            roomMigrator.migrateMemberVotes(member1);

            // then
            assertAll(
                    () -> assertThat(roomBalanceVoteRepository.findByMember(member1)).isEmpty(),
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(option1)).isEqualTo(1)
            );
        }
    }
}
