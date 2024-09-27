package ddangkong.aop.logging;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Profile("prod")
public class ProdControllerLoggingAspect extends ControllerLoggingAspect {

    @Before("allControllerWithoutPolling()")
    public void logControllerRequest(JoinPoint joinPoint) {
        super.logControllerRequest(joinPoint);
    }
}
