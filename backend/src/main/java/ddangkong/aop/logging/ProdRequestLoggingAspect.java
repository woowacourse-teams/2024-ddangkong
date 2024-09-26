package ddangkong.aop.logging;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Profile("prod")
public class ProdRequestLoggingAspect extends RequestLoggingAspect {
    @Before("allControllerWithoutPolling()")
    public void logController(JoinPoint joinPoint) {
        super.logController(joinPoint);
    }
}
