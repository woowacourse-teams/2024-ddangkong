package ddangkong.support.fixture;

import java.lang.reflect.Field;
import org.springframework.stereotype.Component;

@Component
public class FixtureSettingManager {

    public void setField(Object targetObject, String fieldName, Object newValue) {
        try {
            Field field = targetObject.getClass().getDeclaredField(fieldName);
            field.setAccessible(true);
            field.set(targetObject, newValue);
        } catch (NoSuchFieldException | IllegalAccessException e) {
            throw new RuntimeException("Failed to set field value", e);
        }
    }
}
