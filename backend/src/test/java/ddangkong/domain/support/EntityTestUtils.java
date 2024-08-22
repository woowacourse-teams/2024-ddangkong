package ddangkong.domain.support;

import java.time.LocalDateTime;
import org.springframework.test.util.ReflectionTestUtils;

public class EntityTestUtils {

    private EntityTestUtils() {
    }

    public static <T> void setId(T entity, Long id) {
        ReflectionTestUtils.setField(entity, "id", id);
    }

    public static <T> void setLastModifiedAt(T entity, LocalDateTime lastModifiedAt) {
        ReflectionTestUtils.setField(entity, "lastModifiedAt", lastModifiedAt);
    }
}
