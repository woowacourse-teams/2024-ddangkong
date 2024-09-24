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
    @ConfigurationProperties(prefix = "spring.datasource.master")
    public DataSource masterDataSource() {
        return DataSourceBuilder.create()
                .build();
    }

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.slave1")
    public DataSource slave1DataSource() {
        return DataSourceBuilder.create()
                .build();
    }

    @Bean
    public DataSource routingDataSource(
            DataSource masterDataSource,
            DataSource slave1DataSource
    ) {
        Map<Object, Object> dataSources = new HashMap<>();
        dataSources.put("master", masterDataSource);
        dataSources.put("slave1", slave1DataSource);

        RoutingDataSource routingDataSource = new RoutingDataSource(List.of("slave1"));
        routingDataSource.setDefaultTargetDataSource(dataSources.get("master"));
        routingDataSource.setTargetDataSources(dataSources);

        return routingDataSource;
    }

    @Primary
    @Bean
    public DataSource dataSource() {
        return new LazyConnectionDataSourceProxy(routingDataSource(masterDataSource(), slave1DataSource()));
    }
}
