package ddangkong.aop.logging;

import static java.util.stream.Collectors.joining;

import jakarta.servlet.http.HttpServletRequest;
import java.lang.reflect.Parameter;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Aspect
@Component
abstract class RequestLoggingAspect {

    @Pointcut("execution(* ddangkong.controller..*Controller.*(..))")
    public void allController() {
    }

    @Pointcut("@annotation(ddangkong.aop.logging.Polling)")
    public void polling() {
    }

    @Pointcut("allController() && !polling()")
    public void allControllerWithoutPolling() {
    }

    protected HttpServletRequest getHttpServletRequest() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        return requestAttributes.getRequest();
    }

    protected String getQueryParameters(HttpServletRequest request) {
        String queryParameters = request.getParameterMap()
                .entrySet()
                .stream()
                .map(entry -> "%s = %s".formatted(entry.getKey(), entry.getValue()[0]))
                .collect(joining(", "));

        if (queryParameters.isEmpty()) {
            return null;
        }
        return queryParameters;
    }

    protected String getBody(JoinPoint joinPoint) {
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        Parameter[] parameters = methodSignature.getMethod().getParameters();
        Object[] args = joinPoint.getArgs();
        for (int i = 0; i < parameters.length; i++) {
            Parameter param = parameters[i];
            Object arg = args[i];
            if (param.isAnnotationPresent(RequestBody.class)) {
                return arg.toString();
            }
        }
        return null;
    }
}
