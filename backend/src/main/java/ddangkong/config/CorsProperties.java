package ddangkong.config;

import java.util.List;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "cors")
@Component
@Getter
@Setter
public class CorsProperties {

    private List<String> origin;

    public String[] getOrigins() {
        return origin.toArray(String[]::new);
    }
}
