package ddangkong.aop.logging;

import static java.util.stream.Collectors.joining;

import jakarta.servlet.http.HttpServletRequest;
import java.lang.reflect.Parameter;
import java.util.UUID;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.MDC;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Slf4j
abstract class ControllerLoggingAspect {
    private static final String TRACE_ID_KEY = "traceId";

    @Pointcut("@within(org.springframework.web.bind.annotation.RestController)")
    public void allController() {
    }

    @Pointcut("@annotation(ddangkong.aop.logging.Polling)")
    public void polling() {
    }

    @Pointcut("allController() && !polling()")
    public void allControllerWithoutPolling() {
    }

    protected void logControllerRequest(JoinPoint joinPoint) {
        setTraceId();
        HttpServletRequest request = getHttpServletRequest();
        String uri = request.getRequestURI();
        String httpMethod = request.getMethod();
        String queryParameters = getQueryParameters(request);
        String body = getBody(joinPoint);

        log.info("Request Logging: {} {} body - {} parameters - {}", httpMethod, uri, body, queryParameters);
    }

    protected void logControllerResponse(JoinPoint joinPoint, Object responseBody) {
        HttpServletRequest request = getHttpServletRequest();
        String uri = request.getRequestURI();
        String httpMethod = request.getMethod();

        log.info("Response Logging: {} {} Body: {}", httpMethod, uri, responseBody);
        removeTraceId();
    }

    private HttpServletRequest getHttpServletRequest() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        return requestAttributes.getRequest();
    }

    private String getQueryParameters(HttpServletRequest request) {
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

    private String getBody(JoinPoint joinPoint) {
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

    private void setTraceId() {
        String traceId = UUID.randomUUID().toString();
        MDC.put(TRACE_ID_KEY, traceId);
    }

    private void removeTraceId() {
        MDC.remove(TRACE_ID_KEY);
    }
}
