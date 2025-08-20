package ddangkong.aop.cookie;

import ddangkong.facade.room.dto.RoomJoinResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Slf4j
@Aspect
@Component
public class RoomMemberCookieAspect {

    private final RoomMemberCookieEncryptor roomMemberCookieEncryptor;

    public RoomMemberCookieAspect(RoomMemberCookieEncryptor roomMemberCookieEncryptor) {
        this.roomMemberCookieEncryptor = roomMemberCookieEncryptor;
    }

    @Pointcut("@annotation(ddangkong.aop.cookie.IssueCookie)")
    public void issueCookie() {
    }

    @Pointcut("@annotation(ddangkong.aop.cookie.DeleteCookie)")
    public void deleteCookie() {
    }

    @AfterReturning(value = "issueCookie()", returning = "roomJoinResponse")
    public void handleIssueCookie(RoomJoinResponse roomJoinResponse) {
        HttpServletRequest request = getHttpServletRequest();
        HttpServletResponse response = getHttpServletResponse();
        String origin = request.getHeader(HttpHeaders.ORIGIN);

        ResponseCookie encodedCookie = roomMemberCookieEncryptor.getEncodedCookie(roomJoinResponse.member().memberId(), origin);
        response.addHeader(HttpHeaders.SET_COOKIE, encodedCookie.toString());
    }

    @After("deleteCookie()")
    public void handleDeleteCookie() {
        HttpServletRequest request = getHttpServletRequest();
        HttpServletResponse response = getHttpServletResponse();
        String origin = request.getHeader(HttpHeaders.ORIGIN);

        ResponseCookie deleteCookie = roomMemberCookieEncryptor.deleteCookie(origin);
        response.addHeader(HttpHeaders.SET_COOKIE, deleteCookie.toString());
    }

    private HttpServletRequest getHttpServletRequest() {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        return servletRequestAttributes.getRequest();
    }

    private HttpServletResponse getHttpServletResponse() {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        return servletRequestAttributes.getResponse();
    }
}
