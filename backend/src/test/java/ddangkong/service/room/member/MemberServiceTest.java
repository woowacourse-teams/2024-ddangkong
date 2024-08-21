package ddangkong.service.room.member;

import static ddangkong.support.fixture.MemberFixture.EDEN;
import static ddangkong.support.fixture.MemberFixture.KEOCHAN;
import static ddangkong.support.fixture.MemberFixture.PRIN;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertTrue;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomSetting;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.BadRequestException;
import ddangkong.facade.BaseServiceTest;
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
            Room room = roomRepository.save(Room.createNewRoom());

            // when
            Member prin = memberService.saveMasterMember("prin", room);

            // then
            assertAll(
                    () -> assertThat(prin.getNickname()).isEqualTo("prin"),
                    () -> assertThat(prin.isMaster()).isTrue()
            );
        }

        @Test
        void 이미_방장이_존재하는_방에_방장을_생성하면_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.master(room));

            // when & then
            assertThatThrownBy(() -> memberService.saveMasterMember("eden", room))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("이미 방장이 존재합니다.");
        }

        @Test
        void 방에_멤버가_존재하는_상태에서_방장을_생성하면_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.common(room));

            // when & then
            assertThatThrownBy(() -> memberService.saveMasterMember("eden", room))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("방에 멤버가 존재하면 방장을 생성할 수 없습니다. 현재 멤버 수: 1");
        }
    }

    @Nested
    class 일반_멤버_생성 {

        private static final int MAX_MEMBER_COUNT = 12;

        @Test
        void 일반_멤버를_생성한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.master(room));

            // when
            Member eden = memberService.saveCommonMember("eden", room);

            // then
            assertAll(
                    () -> assertThat(eden.getNickname()).isEqualTo("eden"),
                    () -> assertThat(eden.isMaster()).isFalse()
            );
        }

        @Test
        void 진행_상태인_방이면_일반_멤버를_생성할_수_없다() {
            // given

            RoomStatus roomStatus = RoomStatus.PROGRESS;
            RoomSetting roomSetting = new RoomSetting(5, 10_000, Category.IF);

            Room room = roomRepository.save(new Room("uuid", 2, roomStatus, roomSetting));
            memberRepository.save(PRIN.master(room));

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("eden", room))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("이미 시작한 방에는 멤버를 생성할 수 없습니다.");
        }

        @Test
        void 방장이_존재하지_않는_방에_일반_멤버를_생성하면_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("prin", room))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("방장이 존재하지 않습니다.");
        }

        @Test
        void 방의_인원이_가득찬_방에_일반_멤버를_생성하면_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.master(room));
            for (int i = 0; i < MAX_MEMBER_COUNT - 1; i++) {
                memberRepository.save(EDEN.common(room, i));
            }

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("tacan", room))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("방의 최대 인원 수가 가득 찼습니다. 현재 멤버 수: 12");
        }
    }

    @Nested
    class 방_멤버_조회 {

        @Test
        void 방의_멤버를_조회한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member prin = memberRepository.save(PRIN.master(room));

            // when
            Member findMember = memberService.getRoomMember(prin.getId(), room);

            // then
            assertThat(findMember.getId()).isEqualTo(prin.getId());
        }

        @Test
        void 방에_존재하지_않은_멤버일_경우_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member prin = memberRepository.save(PRIN.master(room));
            Room otherRoom = roomRepository.save(Room.createNewRoom());

            // when & then
            assertThatThrownBy(() -> memberService.getRoomMember(prin.getId(), otherRoom))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("방에 존재하지 않는 멤버입니다.");
        }
    }

    @Nested
    class 방장_넘겨주기 {

        @Test
        void 방장을_임의의_일반_멤버에게_넘겨준다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.master(room));
            Member common1 = memberRepository.save(KEOCHAN.common(room));
            Member common2 = memberRepository.save(EDEN.common(room));

            // when
            memberService.promoteOtherMember(room);

            // then
            Member foundCommon1 = memberRepository.findById(common1.getId()).get();
            Member foundCommon2 = memberRepository.findById(common2.getId()).get();
            assertTrue(foundCommon1.isMaster() || foundCommon2.isMaster());
        }

        @Test
        void 해당_방에_일반_멤버가_없다면_예외를_던진다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.master(room));

            // when & then
            assertThatThrownBy(() -> memberService.promoteOtherMember(room))
                    .isInstanceOf(BadRequestException.class)
                    .hasMessage("방에 일반 멤버가 존재하지 않습니다.");
        }
    }

    @Nested
    class 방의_멤버_삭제 {

        @Test
        void 해당_방에_있는_멤버를_모두_삭제한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member master = memberRepository.save(PRIN.master(room));
            Member common = memberRepository.save(KEOCHAN.common(room));

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
