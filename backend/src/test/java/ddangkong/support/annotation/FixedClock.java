package ddangkong.support.annotation;

import ddangkong.support.extension.FixedClockExtension;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.junit.jupiter.api.extension.ExtendWith;

@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@ExtendWith(FixedClockExtension.class)
public @interface FixedClock {

    String date();

    String time();
}
