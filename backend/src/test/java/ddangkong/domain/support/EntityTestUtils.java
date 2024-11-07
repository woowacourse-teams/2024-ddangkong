package ddangkong.domain.support;

import org.springframework.test.util.ReflectionTestUtils;

public class EntityTestUtils {

    private EntityTestUtils() {
    }

    public static <T> void setId(T entity, Long id) {
        ReflectionTestUtils.setField(entity, "id", id);
    }
}
