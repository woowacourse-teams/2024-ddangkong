package ddangkong.config.sql;

import ddangkong.config.sql.type.DataSourceType;
import java.util.List;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;
import org.springframework.transaction.support.TransactionSynchronizationManager;

public class RoutingDataSource extends AbstractRoutingDataSource {

    private final RoutingReplicas<DataSourceType> routingReplicas;

    public RoutingDataSource(List<DataSourceType> routingReplicas) {
        this.routingReplicas = new RoutingReplicas<>(routingReplicas);
    }

    @Override
    protected Object determineCurrentLookupKey() {
        boolean isReadOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();
        if (isReadOnly) {
            return routingReplicas.get();
        } else {
            return DataSourceType.SOURCE;
        }
    }
}
