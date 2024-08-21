package ddangkong.domain.room.member;

import ddangkong.domain.room.Room;
import ddangkong.exception.BadRequestException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.util.Objects;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nickname;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Column(nullable = false)
    private boolean isMaster;

    private Member(String nickname, Room room, boolean isMaster) {
        this.nickname = nickname;
        this.room = room;
        this.isMaster = isMaster;
    }

    public static Member createMaster(String nickname, Room room) {
        return new Member(nickname, room, true);
    }

    public static Member createCommon(String nickname, Room room) {
        return new Member(nickname, room, false);
    }

    public void promoteToMaster() {
        if (isMaster) {
            throw new BadRequestException("해당 멤버는 이미 마스터입니다.");
        }
        isMaster = true;
    }

    public boolean isSameId(Long id) {
        return Objects.equals(this.id, id);
    }

    public boolean isCommon() {
        return !isMaster();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Member member = (Member) o;
        return Objects.equals(id, member.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
