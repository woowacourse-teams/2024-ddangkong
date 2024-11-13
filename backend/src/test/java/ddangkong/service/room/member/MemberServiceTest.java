package ddangkong.service.room.member;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertTrue;

import ddangkong.domain.room.Room;
import ddangkong.domain.room.member.Member;
import ddangkong.domain.room.member.RoomMembers;
import ddangkong.exception.room.NotReadyRoomException;
import ddangkong.exception.room.member.AlreadyExistMasterException;
import ddangkong.exception.room.member.ExceedMaxMemberCountException;
import ddangkong.exception.room.member.InvalidMasterCreationException;
import ddangkong.exception.room.member.NotExistCommonMemberException;
import ddangkong.exception.room.member.NotExistMasterException;
import ddangkong.exception.room.member.NotRoomMemberException;
import ddangkong.facade.BaseServiceTest;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class MemberServiceTest extends BaseServiceTest {

    @Autowired
    private MemberService memberService;

    @Nested
    class 방장_멤버_생성 {

        @Test
        void 방장을_생성한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            String masterNickname = "master";

            // when
            Member master = memberFixture.createMaster(masterNickname, room);

            // then
            assertAll(
                    () -> assertThat(master.getNickname()).isEqualTo(masterNickname),
                    () -> assertThat(master.isMaster()).isTrue()
            );
        }

        @Test
        void 이미_방장이_존재하는_방에_방장을_생성하면_예외가_발생한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);

            // when & then
            assertThatThrownBy(() -> memberService.saveMasterMember("anotherMaster", room))
                    .isExactlyInstanceOf(AlreadyExistMasterException.class);
        }

        @Test
        void 방에_멤버가_존재하는_상태에서_방장을_생성하면_예외가_발생한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createCommon("member", room);

            // when & then
            assertThatThrownBy(() -> memberService.saveMasterMember("master", room))
                    .isExactlyInstanceOf(InvalidMasterCreationException.class)
                    .hasMessage("방에 멤버가 존재하면 방장을 생성할 수 없습니다. 현재 멤버 수: 1");
        }
    }

    @Nested
    class 일반_멤버_생성 {

        @Test
        void 일반_멤버를_생성한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);

            // when
            String commonMemberNickname = "commonMember";
            Member eden = memberService.saveCommonMember(commonMemberNickname, room);

            // then
            assertAll(
                    () -> assertThat(eden.getNickname()).isEqualTo(commonMemberNickname),
                    () -> assertThat(eden.isMaster()).isFalse()
            );
        }

        @Test
        void 진행_상태인_방이면_일반_멤버를_생성할_수_없다() {
            // given
            Room progressRoom = roomFixture.createProgressRoom(1);
            memberFixture.createMaster(progressRoom);

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("newMember", progressRoom))
                    .isExactlyInstanceOf(NotReadyRoomException.class);
        }

        @Test
        void 방장이_존재하지_않는_방에_일반_멤버를_생성하면_예외가_발생한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("newMember", room))
                    .isExactlyInstanceOf(NotExistMasterException.class);
        }

        @Test
        void 방의_인원이_가득찬_방에_일반_멤버를_생성하면_예외가_발생한다() {
            // given
            final int maxMemberCount = 12;

            Room room = roomFixture.createNotStartedRoom();
            memberFixture.createMaster(room);
            memberFixture.createCommons(room, maxMemberCount - 1);

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("newMember", room))
                    .isExactlyInstanceOf(ExceedMaxMemberCountException.class)
                    .hasMessage("방의 최대 인원을 초과했습니다. 현재 멤버 수: 12");
        }
    }

    @Nested
    class 방_멤버_조회 {

        @Test
        void 방의_멤버를_조회한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            Member member = memberFixture.createMaster(room);

            // when
            Member findMember = memberService.getRoomMember(member.getId(), room);

            // then
            assertThat(findMember.getId()).isEqualTo(member.getId());
        }

        @Test
        void 방에_존재하지_않은_멤버일_경우_예외가_발생한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            Member member = memberFixture.createMaster(room);
            Room otherRoom = roomFixture.createNotStartedRoom();

            // when & then
            assertThatThrownBy(() -> memberService.getRoomMember(member.getId(), otherRoom))
                    .isExactlyInstanceOf(NotRoomMemberException.class);
        }
    }

    @Nested
    class 방장_넘겨주기 {

        private Room room;
        private Member master;
        private Member common1;
        private Member common2;

        @BeforeEach
        void init() {
            room = roomFixture.createNotStartedRoom();
            master = memberFixture.createMaster(room);
            common1 = memberFixture.createCommon("common1", room);
            common2 = memberFixture.createCommon("common2", room);
        }

        @Test
        void 임의의_일반_멤버에게_방장_권한을_준다() {
            // given
            List<Member> members = List.of(master, common1, common2);
            RoomMembers roomMembers = new RoomMembers(members);

            // when
            memberService.promoteOtherMember(roomMembers);

            // then
            assertTrue((common1.isMaster() && common2.isCommon()) || (common1.isCommon() && common2.isMaster()));
        }

        @Test
        void 해당_방에_일반_멤버가_없다면_예외를_던진다() {
            // given
            List<Member> members = List.of(master);
            RoomMembers roomMembers = new RoomMembers(members);

            // when & then
            assertThatThrownBy(() -> memberService.promoteOtherMember(roomMembers))
                    .isInstanceOf(NotExistCommonMemberException.class);
        }
    }

    @Nested
    class 방의_멤버_삭제 {

        @Test
        void 해당_방에_있는_멤버를_모두_삭제한다() {
            // given
            Room room = roomFixture.createNotStartedRoom();
            Member master = memberFixture.createMaster(room);
            Member common = memberFixture.createCommon("common", room);

            // when
            memberService.deleteMember(room);

            // then
            assertAll(
                    () -> assertThat(memberRepository.findById(master.getId())).isEmpty(),
                    () -> assertThat(memberRepository.findById(common.getId())).isEmpty()
            );
        }
    }
}
