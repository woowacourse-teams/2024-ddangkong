package ddangkong.domain.room.member;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.room.Room;
import ddangkong.exception.room.member.InvalidMasterCountException;
import ddangkong.exception.room.member.NotExistCommonMemberException;
import ddangkong.exception.room.member.NotRoomMemberException;
import ddangkong.support.fixture.EntityFixtureUtils;
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
            EntityFixtureUtils.setId(room, 1L);
        }

        @Test
        void 방_멤버들_객체를_생성한다() {
            // given
            Member master = Member.createMaster("master", room);
            Member member1 = Member.createCommon("common", room);
            List<Member> members = List.of(master, member1);

            // when
            RoomMembers roomMembers = new RoomMembers(members);

            // then
            assertThat(roomMembers.getMembers()).hasSize(2);
        }

        @Test
        void 방장이_여러명인_경우_예외를_발생한다() {
            // given
            Member master1 = Member.createMaster("master1", room);
            Member master2 = Member.createMaster("master2", room);
            List<Member> members = List.of(master1, master2);

            // when & then
            assertThatThrownBy(() -> new RoomMembers(members))
                    .isExactlyInstanceOf(InvalidMasterCountException.class)
                    .hasMessageContaining("방장이 1명이 아닙니다. 현재 방장 수: 2, roomId: 1");
        }

        @Test
        void 방장이_없는_경우_예외가_발생한다() {
            // given
            Member member1 = Member.createCommon("common1", room);
            Member member2 = Member.createCommon("common2", room);
            List<Member> members = List.of(member1, member2);

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
            Member master = Member.createMaster("master", room);
            Member member1 = Member.createCommon("common1", room);
            List<Member> members = List.of(master, member1);
            RoomMembers roomMembers = new RoomMembers(members);

            // when
            Member findMaster = roomMembers.getMaster();

            // then
            assertThat(findMaster.getNickname()).isEqualTo(master.getNickname());
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
            Member master = Member.createMaster("master", room);
            EntityFixtureUtils.setId(master, 1L);
            Member member1 = Member.createCommon("common1", room);
            EntityFixtureUtils.setId(member1, 2L);
            Member member2 = Member.createCommon("common2", room);
            EntityFixtureUtils.setId(member2, 3L);
            List<Member> members = List.of(master, member1, member2);
            RoomMembers roomMembers = new RoomMembers(members);

            // when
            Member commonMember = roomMembers.getAnyCommonMember();

            // then
            assertThat(commonMember.getNickname()).isIn(member1.getNickname(), member2.getNickname());
        }

        @Test
        void 일반_멤버가_없다면_예외를_발생시킨다() {
            // given
            Member master = Member.createMaster("master", room);
            EntityFixtureUtils.setId(master, 1L);
            List<Member> members = List.of(master);
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
            Member master = Member.createMaster("master", room);
            EntityFixtureUtils.setId(master, 1L);
            Member member1 = Member.createCommon("common1", room);
            EntityFixtureUtils.setId(member1, 2L);
            Member member2 = Member.createCommon("common2", room);
            EntityFixtureUtils.setId(member2, 3L);
            List<Member> members = List.of(master, member1, member2);
            RoomMembers roomMembers = new RoomMembers(members);

            // when
            Member findMember = roomMembers.getMember(member1.getId());

            // then
            assertThat(findMember.getNickname()).isEqualTo(member1.getNickname());
        }

        @Test
        void 존재하지_않는_멤버를_조회하면_예외가_발생한다() {
            // given
            Member master = Member.createMaster("master", room);
            EntityFixtureUtils.setId(master, 1L);
            Member member1 = Member.createCommon("common1", room);
            EntityFixtureUtils.setId(member1, 2L);
            List<Member> members = List.of(master, member1);
            RoomMembers roomMembers = new RoomMembers(members);

            // when & then
            assertThatThrownBy(() -> roomMembers.getMember(100L))
                    .isExactlyInstanceOf(NotRoomMemberException.class);
        }
    }
}
