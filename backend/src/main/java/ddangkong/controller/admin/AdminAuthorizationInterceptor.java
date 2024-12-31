package ddangkong.controller.admin;

import ddangkong.exception.admin.NotExistAdminSessionException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
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
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (hasAnnotation(handler, AdminAuth.class)) {
            authorizeAdmin(request);
        }
        return true;
    }

    private boolean hasAnnotation(Object handler, Class<AdminAuth> authClass) {
        if (handler instanceof ResourceHttpRequestHandler) {
            return false;
        }

        HandlerMethod handlerMethod = (HandlerMethod) handler;
        return handlerMethod.getMethodAnnotation(authClass) != null ||
                handlerMethod.getBeanType().getAnnotation(authClass) != null;
    }

    private void authorizeAdmin(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute(sessionKey) == null) {
            throw new NotExistAdminSessionException();
        }
    }
}
