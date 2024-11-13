package ddangkong.support.fixture;

import java.time.LocalDateTime;
import org.springframework.test.util.ReflectionTestUtils;

public class EntityFixtureUtils {

    private static final String LAST_MODIFIED_AT_FIELD = "lastModifiedAt";
    private static final String ID_FIELD = "id";

    private EntityFixtureUtils() {
    }

    public static <T> void setId(T entity, Long id) {
        ReflectionTestUtils.setField(entity, ID_FIELD, id);
    }

    public static <T> void setLastModifiedAt(T entity, LocalDateTime lastModifiedAt) {
        ReflectionTestUtils.setField(entity, LAST_MODIFIED_AT_FIELD, lastModifiedAt);
    }
}
