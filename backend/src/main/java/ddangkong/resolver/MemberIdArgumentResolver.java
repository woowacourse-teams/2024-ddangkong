package ddangkong.resolver;

import ddangkong.aop.cookie.MemberId;
import ddangkong.controller.room.RoomMemberCookieEncryptor;
import ddangkong.exception.room.NotFoundCookieException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

@Component
public class MemberIdArgumentResolver implements HandlerMethodArgumentResolver {

    private final RoomMemberCookieEncryptor roomMemberCookieEncryptor;

    private final String cookieKey;

    public MemberIdArgumentResolver(RoomMemberCookieEncryptor roomMemberCookieEncryptor, @Value("${cookie.rejoin-key}") String cookieKey) {
        this.roomMemberCookieEncryptor = roomMemberCookieEncryptor;
        this.cookieKey = cookieKey;
    }

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean isLongType = parameter.getParameterType().equals(Long.class);
        boolean hasParameterAnnotation = parameter.hasParameterAnnotation(MemberId.class);
        return isLongType && hasParameterAnnotation;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest, WebDataBinderFactory binderFactory) {
        HttpServletRequest request = webRequest.getNativeRequest(HttpServletRequest.class);
        Cookie cookie = Arrays.stream(request.getCookies())
                .filter(curCookie -> curCookie.getName().equals(cookieKey))
                .findAny()
                .orElseThrow(NotFoundCookieException::new);

        String cookieValue = cookie.getValue();
        return roomMemberCookieEncryptor.getDecodedCookieValue(cookieValue);
    }
}
