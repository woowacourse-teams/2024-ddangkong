package ddangkong.service.room.member;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import ddangkong.domain.room.Room;
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
    class 방_멤버_조회 {

        @Test
        void 방의_멤버를_조회한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member prin = memberService.saveMasterMember("prin", room);

            // when
            Member findMember = memberService.getRoomMember(prin.getId(), room);

            // then
            assertThat(findMember.getId()).isEqualTo(prin.getId());
        }

        @Test
        void 방에_존재하지_않은_멤버일_경우_예외가_발생한다() {
            // given
            Room room = roomRepository.save(Room.createNewRoom());
            Member prin = memberService.saveMasterMember("prin", room);
            Room otherRoom = roomRepository.save(Room.createNewRoom());

            // when & then
            assertThatThrownBy(() -> memberService.getRoomMember(prin.getId(), otherRoom))
                    .isExactlyInstanceOf(BadRequestException.class)
                    .hasMessage("방에 존재하지 않는 멤버입니다.");
        }
    }
}
