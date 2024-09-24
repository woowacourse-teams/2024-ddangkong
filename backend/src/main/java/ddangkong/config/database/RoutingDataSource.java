package ddangkong.config.database;

import java.util.List;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;
import org.springframework.transaction.support.TransactionSynchronizationManager;

public class RoutingDataSource extends AbstractRoutingDataSource {

    private final RoutingReplicas<String> routingReplicas;

    public RoutingDataSource(List<String> routingReplicas) {
        this.routingReplicas = new RoutingReplicas(routingReplicas);
    }

    @Override
    protected Object determineCurrentLookupKey() {
        boolean isReadOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();
        if (isReadOnly) {
            return routingReplicas.get();
        } else {
            return "source";
        }
    }
}
