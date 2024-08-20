package ddangkong.service.room.member;

import static ddangkong.support.fixture.MemberFixture.EDEN;
import static ddangkong.support.fixture.MemberFixture.PRIN;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

import ddangkong.domain.balance.content.Category;
import ddangkong.domain.room.Room;
import ddangkong.domain.room.RoomStatus;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.room.NotReadyRoomException;
import ddangkong.exception.room.member.AlreadyExistMasterException;
import ddangkong.exception.room.member.ExceedMaxMemberCountException;
import ddangkong.exception.room.member.InvalidMasterCreationException;
import ddangkong.exception.room.member.NotExistMasterException;
import ddangkong.exception.room.member.NotRoomMemberException;
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
                    .isExactlyInstanceOf(AlreadyExistMasterException.class);
        }

        @Test
        void 방에_멤버가_존재하는_상태에서_방장을_생성하면_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            memberRepository.save(PRIN.common(room));

            // when & then
            assertThatThrownBy(() -> memberService.saveMasterMember("eden", room))
                    .isExactlyInstanceOf(InvalidMasterCreationException.class)
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
            Room room = roomRepository.save(new Room("uuid", 5, 2, 30, roomStatus, Category.EXAMPLE));
            memberRepository.save(PRIN.master(room));

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("eden", room))
                    .isExactlyInstanceOf(NotReadyRoomException.class);
        }

        @Test
        void 방장이_존재하지_않는_방에_일반_멤버를_생성하면_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());

            // when & then
            assertThatThrownBy(() -> memberService.saveCommonMember("prin", room))
                    .isExactlyInstanceOf(NotExistMasterException.class);
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
                    .isExactlyInstanceOf(ExceedMaxMemberCountException.class)
                    .hasMessage("방의 최대 인원을 초과했습니다. 현재 멤버 수: 12");
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
                    .isExactlyInstanceOf(NotRoomMemberException.class);
        }
    }
}
