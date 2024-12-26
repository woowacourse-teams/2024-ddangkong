package ddangkong.config;

import ddangkong.resolver.MemberIdArgumentResolver;
import java.util.List;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CookieConfig implements WebMvcConfigurer {

    private final MemberIdArgumentResolver memberIdArgumentResolver;

    public CookieConfig(MemberIdArgumentResolver memberIdArgumentResolver) {
        this.memberIdArgumentResolver = memberIdArgumentResolver;
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(memberIdArgumentResolver);
    }
}
