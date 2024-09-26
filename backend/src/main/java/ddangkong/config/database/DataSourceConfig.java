package ddangkong.config.database;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.LazyConnectionDataSourceProxy;

@Profile("prod")
@Configuration
public class DataSourceConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.source")
    public DataSource sourceDataSource() {
        return DataSourceBuilder.create()
                .build();
    }

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.replica1")
    public DataSource replica1DataSource() {
        return DataSourceBuilder.create()
                .build();
    }

    @Bean
    public DataSource routingDataSource(
            DataSource sourceDataSource,
            DataSource replica1DataSource
    ) {
        Map<Object, Object> dataSources = new HashMap<>();
        dataSources.put("source", sourceDataSource);
        dataSources.put("replica1", replica1DataSource);

        RoutingDataSource routingDataSource = new RoutingDataSource(List.of("replica1"));
        routingDataSource.setDefaultTargetDataSource(dataSources.get("source"));
        routingDataSource.setTargetDataSources(dataSources);

        return routingDataSource;
    }

    @Primary
    @Bean
    public DataSource dataSource() {
        return new LazyConnectionDataSourceProxy(routingDataSource(sourceDataSource(), replica1DataSource()));
    }
}
