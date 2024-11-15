package ddangkong.support.fixture;

import org.springframework.test.util.ReflectionTestUtils;

public class EntityFixtureUtils {

    private static final String ID_FIELD = "id";

    private EntityFixtureUtils() {
    }

    public static <T> void setId(T entity, Long id) {
        ReflectionTestUtils.setField(entity, ID_FIELD, id);
    }
}
