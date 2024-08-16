package ddangkong.domain.room;

import ddangkong.exception.BadRequestException;
import jakarta.persistence.LockModeType;
import jakarta.persistence.QueryHint;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

public interface RoomRepository extends JpaRepository<Room, Long> {

    default Room getById(Long id) {
        return findById(id)
                .orElseThrow(() -> new BadRequestException("해당 방이 존재하지 않습니다."));
    }

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @QueryHints(@QueryHint(name = "jakarta.persistence.lock.timeout", value = "5000"))
    @Query("SELECT r FROM Room r WHERE r.id = :id")
    Optional<Room> findByIdWithLock(Long id);
}
