package ddangkong.support.extension;


import static org.mockito.Mockito.when;

import ddangkong.support.annotation.FixedClock;
import java.time.Clock;
import java.time.Instant;
import java.time.ZoneOffset;
import java.util.regex.Pattern;
import org.junit.jupiter.api.extension.BeforeEachCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

public class FixedClockExtension implements BeforeEachCallback {

    private static final Pattern DATE_PATTERN = Pattern.compile("\\d{4}-\\d{2}-\\d{2}");
    private static final Pattern TIME_PATTERN = Pattern.compile("\\d{2}:\\d{2}:\\d{2}");

    @Override
    public void beforeEach(ExtensionContext context) {
        Clock clock = SpringExtension.getApplicationContext(context).getBean(Clock.class);
        FixedClock fixedClockAnnotation = getFixedClockAnnotation(context);

        String date = getDate(fixedClockAnnotation);
        String time = getTime(fixedClockAnnotation);
        when(clock.instant()).thenReturn(Instant.parse("%sT%sZ".formatted(date, time)));
        when(clock.getZone()).thenReturn(ZoneOffset.UTC);
    }

    private FixedClock getFixedClockAnnotation(ExtensionContext context) {
        FixedClock fixedClockAnnotation = context.getRequiredTestMethod().getDeclaredAnnotation(FixedClock.class);
        if (fixedClockAnnotation == null) {
            fixedClockAnnotation = context.getRequiredTestClass().getDeclaredAnnotation(FixedClock.class);
        }
        return fixedClockAnnotation;
    }

    private String getDate(FixedClock fixedClockAnnotation) {
        String date = fixedClockAnnotation.date();
        if (!DATE_PATTERN.matcher(date).matches()) {
            throw new IllegalArgumentException("yyyy-MM-dd의 date 포맷이어야 합니다. invalid date: %s".formatted(date));
        }
        return date;
    }

    private String getTime(FixedClock fixedClockAnnotation) {
        String time = fixedClockAnnotation.time();
        if (!TIME_PATTERN.matcher(time).matches()) {
            throw new IllegalArgumentException("HH:mm:ss의 time 포맷이어야 합니다. invalid time: %s".formatted(time));
        }
        return time;
    }
}
