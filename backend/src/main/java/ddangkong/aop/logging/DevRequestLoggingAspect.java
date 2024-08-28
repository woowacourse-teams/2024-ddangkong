package ddangkong.aop.logging;


import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
@Profile({"dev", "local"})
public class DevRequestLoggingAspect extends RequestLoggingAspect {
    @Before("allController()")
    public void logController(JoinPoint joinPoint) {
        logRequest(joinPoint);
    }
}
