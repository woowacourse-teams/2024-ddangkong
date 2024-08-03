package ddangkong.support.config;

import java.time.Clock;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

@TestConfiguration
public class TestClockConfig {

    @Primary
    @Bean
    public Clock testClock() {
        String dateTimeString = "2024-07-18 20:00:02.000";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        LocalDateTime customDateTime = LocalDateTime.parse(dateTimeString, formatter);
        ZonedDateTime customZonedDateTime = customDateTime.atZone(ZoneId.of("Asia/Seoul"));
        Instant customInstant = customZonedDateTime.toInstant();
        return Clock.fixed(customInstant, ZoneId.of("Asia/Seoul"));
    }
}
