package ddangkong.service.room.balance.roomvote;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.Category;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.balance.roomcontent.RoomContent;
import ddangkong.domain.room.balance.roomvote.RoomBalanceVote;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.room.NotFinishedRoomException;
import ddangkong.facade.BaseServiceTest;
import ddangkong.support.fixture.MemberFixture;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class RoomMigratorTest extends BaseServiceTest {

    @Autowired
    private RoomMigrator roomMigrator;

    private BalanceOption optionA;

    private BalanceOption optionB;

    private Room finishedRoom;

    private Member prin;

    private Member keochan;

    private Member maru;

    private Member pome;

    @BeforeEach
    void setUp() {
        BalanceContent content = balanceContentRepository.save(new BalanceContent(Category.IF, "A vs B"));
        optionA = balanceOptionRepository.save(new BalanceOption("A", content));
        optionB = balanceOptionRepository.save(new BalanceOption("B", content));
        finishedRoom = roomRepository.save(new Room("uuid", 5, RoomStatus.FINISH, RoomSetting.createNewRoomSetting()));
        prin = memberRepository.save(MemberFixture.PRIN.master(finishedRoom));
        keochan = memberRepository.save(MemberFixture.KEOCHAN.common(finishedRoom));
        maru = memberRepository.save(MemberFixture.MARU.common(finishedRoom));
        pome = memberRepository.save(MemberFixture.POME.common(finishedRoom));
    }

    @Nested
    class 만료된_방_정보_마이그레이션 {

        @Test
        void 입력받은_방에_대한_컨텐츠_멤버_방_정보를_삭제하고_방투표를_전체투표로_마이그레이션한다() {
            // given
            BalanceContent balanceContent = balanceContentRepository.save(new BalanceContent(Category.IF, "컨텐츠"));
            RoomContent roomContent = RoomContent.newRoomContent(finishedRoom, balanceContent, 1);
            roomContentRepository.save(roomContent);
            roomBalanceVoteRepository.save(new RoomBalanceVote(maru, optionA));

            // when
            roomMigrator.migrateExpiredRooms(List.of(finishedRoom));

            // then
            Optional<Room> migratedRoom = roomRepository.findById(finishedRoom.getId());
            List<RoomContent> migratedRoomContents = roomContentRepository.findAllByRoom(finishedRoom);
            List<Member> migratedMembers = memberRepository.findAllByRoom(finishedRoom);
            List<RoomBalanceVote> migratedRoomVotes = roomBalanceVoteRepository.findByMember(maru);
            long migratedTotalVotes = totalBalanceVoteRepository.countByBalanceOption(optionA);

            assertThat(migratedRoom).isEmpty();
            assertThat(migratedRoomContents).hasSize(0);
            assertThat(migratedMembers).hasSize(0);
            assertThat(migratedRoomVotes).hasSize(0);
            assertThat(migratedTotalVotes).isEqualTo(1);
        }
    }

    @Nested
    class 종료된_방_투표_마이그레이션 {

        @Test
        void 방_투표_정보를_전체_투표_정보로_마이그레이션한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(keochan, optionA));
            roomBalanceVoteRepository.save(new RoomBalanceVote(maru, optionB));
            roomBalanceVoteRepository.save(new RoomBalanceVote(pome, optionB));

            // when
            roomMigrator.migrateFinishedRoom(finishedRoom);

            // then
            assertAll(
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(optionA)).isEqualTo(2),
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(optionB)).isEqualTo(2)
            );
        }

        @Test
        void 방이_종료되지_않았다면_마이그레이션에_실패한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());

            //when & then
            assertThatThrownBy(() -> roomMigrator.migrateFinishedRoom(room))
                    .isExactlyInstanceOf(NotFinishedRoomException.class);
        }
    }

    @Nested
    class 멤버_투표_마이그레이션 {

        @Test
        void 멤버_투표_삭제_후_전체_투표를_저장한다() {
            // given
            roomBalanceVoteRepository.save(new RoomBalanceVote(prin, optionA));

            // when
            roomMigrator.migrateMemberVotes(prin);

            // then
            assertAll(
                    () -> assertThat(roomBalanceVoteRepository.findByMember(prin)).isEmpty(),
                    () -> assertThat(totalBalanceVoteRepository.countByBalanceOption(optionA)).isEqualTo(1)
            );
        }
    }
}
