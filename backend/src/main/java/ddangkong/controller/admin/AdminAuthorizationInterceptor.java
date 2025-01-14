package ddangkong.controller.admin;

import ddangkong.exception.admin.NotExistAdminSessionException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

@Component
public class AdminAuthorizationInterceptor implements HandlerInterceptor {

    private final String sessionKey;

    public AdminAuthorizationInterceptor(@Value("${admin.session-key}") String sessionKey) {
        this.sessionKey = sessionKey;
    }

    @Override
    public boolean preHandle(@NotNull HttpServletRequest request,
                             @NotNull HttpServletResponse response,
                             @NotNull Object handler) {
        if (isPreflightRequest(request)) {
            return true;
        }
        if (hasAdminAuthAnnotation(handler)) {
            authorizeAdmin(request);
        }
        return true;
    }

    private boolean isPreflightRequest(HttpServletRequest request) {
        return HttpMethod.OPTIONS.name().equals(request.getMethod());
    }

    private boolean hasAdminAuthAnnotation(Object handler) {
        if (handler instanceof ResourceHttpRequestHandler) {
            return false;
        }

        HandlerMethod handlerMethod = (HandlerMethod) handler;
        return handlerMethod.getMethodAnnotation(AdminAuth.class) != null ||
                handlerMethod.getBeanType().getAnnotation(AdminAuth.class) != null;
    }

    private void authorizeAdmin(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute(sessionKey) == null) {
            throw new NotExistAdminSessionException();
        }
    }
}
