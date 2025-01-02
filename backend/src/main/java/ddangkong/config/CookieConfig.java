package ddangkong.config;

import ddangkong.resolver.RoomMemberArgumentResolver;
import java.util.List;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CookieConfig implements WebMvcConfigurer {

    private final RoomMemberArgumentResolver roomMemberArgumentResolver;

    public CookieConfig(RoomMemberArgumentResolver roomMemberArgumentResolver) {
        this.roomMemberArgumentResolver = roomMemberArgumentResolver;
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(roomMemberArgumentResolver);
    }
}
