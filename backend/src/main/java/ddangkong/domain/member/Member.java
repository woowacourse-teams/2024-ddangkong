package ddangkong.domain.member;

import ddangkong.domain.balance.room.Room;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
}
