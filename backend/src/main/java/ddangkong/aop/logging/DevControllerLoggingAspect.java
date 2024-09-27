package ddangkong.aop.logging;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Profile({"dev", "local"})
public class DevControllerLoggingAspect extends ControllerLoggingAspect {

    @Before("allController()")
    public void logControllerRequest(JoinPoint joinPoint) {
        super.logControllerRequest(joinPoint);
    }

    @AfterReturning(pointcut = "allController()", returning = "responseBody")
    protected void logControllerResponse(JoinPoint joinPoint, Object responseBody) {
        super.logControllerResponse(joinPoint, responseBody);
    }
}
