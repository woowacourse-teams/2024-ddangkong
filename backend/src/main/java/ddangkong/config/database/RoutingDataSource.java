package ddangkong.config.database;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;
import org.springframework.transaction.support.TransactionSynchronizationManager;

@Slf4j
public class RoutingDataSource extends AbstractRoutingDataSource {

    private final RoutingReplicas<String> routingReplicas;

    public RoutingDataSource(List<String> routingReplicas) {
        this.routingReplicas = new RoutingReplicas(routingReplicas);
    }

    @Override
    protected Object determineCurrentLookupKey() {
        boolean isReadOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();
        if (isReadOnly) {
            log.info("Routing to Replica DB server");
            return routingReplicas.get();
        } else {
            log.info("Routing to Source DB server");
            return "source";
        }
    }
}
