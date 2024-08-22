package ddangkong.domain.room.member;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.room.Room;
import ddangkong.domain.support.EntityTestUtils;
import ddangkong.exception.room.member.InvalidMasterCountException;
import ddangkong.exception.room.member.NotExistCommonMemberException;
import ddangkong.exception.room.member.NotRoomMemberException;
import ddangkong.support.fixture.MemberFixture;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class RoomMembersTest {

    @Nested
    class 방_멤버들_객체_생성 {

        private Room room;

        @BeforeEach
        void setUp() {
            room = Room.createNewRoom();
            EntityTestUtils.setId(room, 1L);
        }

        @Test
        void 방_멤버들_객체를_생성한다() {
            // given
            Member prin = MemberFixture.PRIN.master(room);
            Member eden = MemberFixture.EDEN.common(room);
            Member keochan = MemberFixture.KEOCHAN.common(room);
            Member tacan = MemberFixture.TACAN.common(room);
            List<Member> members = List.of(prin, eden, keochan, tacan);

            // when
            RoomMembers roomMembers = new RoomMembers(members);

            // then
            assertThat(roomMembers.getMembers()).hasSize(4);
        }

        @Test
        void 방장이_여러명인_경우_예외를_발생한다() {
            // given
            Member prin = MemberFixture.PRIN.master(room);
            Member eden = MemberFixture.EDEN.master(room);
            Member keochan = MemberFixture.KEOCHAN.common(room);
            Member tacan = MemberFixture.TACAN.common(room);
            List<Member> members = List.of(prin, eden, keochan, tacan);

            // when & then
            assertThatThrownBy(() -> new RoomMembers(members))
                    .isExactlyInstanceOf(InvalidMasterCountException.class)
                    .hasMessageContaining("방장이 1명이 아닙니다. 현재 방장 수: 2, roomId: 1");
        }

        @Test
        void 방장이_없는_경우_예외가_발생한다() {
            // given
            Member prin = MemberFixture.PRIN.common(room);
            Member eden = MemberFixture.EDEN.common(room);
            Member keochan = MemberFixture.KEOCHAN.common(room);
            Member tacan = MemberFixture.TACAN.common(room);
            List<Member> members = List.of(prin, eden, keochan, tacan);

            // when & then
            assertThatThrownBy(() -> new RoomMembers(members))
                    .isExactlyInstanceOf(InvalidMasterCountException.class)
                    .hasMessageContaining("방장이 1명이 아닙니다. 현재 방장 수: 0, roomId: 1");
        }
    }

    @Nested
    class 방장_조회 {

        private Room room;

        @BeforeEach
        void setUp() {
            room = Room.createNewRoom();
        }

        @Test
        void 방장을_조회한다() {
            // given
            Member prin = MemberFixture.PRIN.master(room);
            Member eden = MemberFixture.EDEN.common(room);
            Member keochan = MemberFixture.KEOCHAN.common(room);
            Member tacan = MemberFixture.TACAN.common(room);
            List<Member> members = List.of(prin, eden, keochan, tacan);
            RoomMembers roomMembers = new RoomMembers(members);

            // when
            Member master = roomMembers.getMaster();

            // then
            assertThat(master.getNickname()).isEqualTo(prin.getNickname());
        }
    }

    @Nested
    class 임의의_일반_멤버_조회 {

        private Room room;

        @BeforeEach
        void setUp() {
            room = Room.createNewRoom();
        }

        @Test
        void 임의의_일반_멤버를_조회할_수_있다() {
            // given
            Member prin = MemberFixture.PRIN.master(room);
            EntityTestUtils.setId(prin, 1L);
            Member eden = MemberFixture.EDEN.common(room);
            EntityTestUtils.setId(eden, 2L);
            Member takan = MemberFixture.TACAN.common(room);
            EntityTestUtils.setId(eden, 3L);
            List<Member> members = List.of(prin, eden, takan);
            RoomMembers roomMembers = new RoomMembers(members);

            // when
            Member commonMember = roomMembers.getAnyCommonMember();

            // then
            assertThat(commonMember.getNickname()).isIn(eden.getNickname(), takan.getNickname());
        }

        @Test
        void 일반_멤버가_없다면_예외를_발생시킨다() {
            // given
            Member prin = MemberFixture.PRIN.master(room);
            EntityTestUtils.setId(prin, 1L);
            List<Member> members = List.of(prin);
            RoomMembers roomMembers = new RoomMembers(members);

            // when & then
            assertThatThrownBy(() -> roomMembers.getAnyCommonMember())
                    .isExactlyInstanceOf(NotExistCommonMemberException.class);
        }
    }

    @Nested
    class 특정_멤버_조회 {

        private Room room;

        @BeforeEach
        void setUp() {
            room = Room.createNewRoom();
        }

        @Test
        void 특정_멤버를_조회한다() {
            // given
            Member prin = MemberFixture.PRIN.master(room);
            EntityTestUtils.setId(prin, 1L);
            Member eden = MemberFixture.EDEN.common(room);
            EntityTestUtils.setId(eden, 2L);
            List<Member> members = List.of(prin, eden);
            RoomMembers roomMembers = new RoomMembers(members);

            // when
            Member member = roomMembers.getMember(eden.getId());

            // then
            assertThat(member.getNickname()).isEqualTo(eden.getNickname());
        }

        @Test
        void 존재하지_않는_멤버를_조회하면_예외가_발생한다() {
            // given
            Member keochan = MemberFixture.KEOCHAN.master(room);
            EntityTestUtils.setId(keochan, 1L);
            Member tacan = MemberFixture.TACAN.common(room);
            EntityTestUtils.setId(tacan, 2L);
            List<Member> members = List.of(keochan, tacan);
            RoomMembers roomMembers = new RoomMembers(members);

            // when & then
            assertThatThrownBy(() -> roomMembers.getMember(100L))
                    .isExactlyInstanceOf(NotRoomMemberException.class);
        }
    }
}
