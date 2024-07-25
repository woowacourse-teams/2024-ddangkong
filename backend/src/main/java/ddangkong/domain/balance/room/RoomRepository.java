package ddangkong.domain.balance.room;

import ddangkong.exception.BadRequestException;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

    default Room getById(Long id) {
        return findById(id)
                .orElseThrow(() -> new BadRequestException("해당 방이 존재하지 않습니다."));
    }
}
