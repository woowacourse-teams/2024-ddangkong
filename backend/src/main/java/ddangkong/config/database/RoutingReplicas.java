package ddangkong.config.database;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class RoutingReplicas<T> {

    private final List<T> replicas;
    private final AtomicInteger index; //TODO: 성능 이슈 VS 동시성 이슈 비용 고려하기

    public RoutingReplicas(List<T> replicas) {
        this.replicas = replicas;
        index = new AtomicInteger(0);
    }

    public T get() {
        return replicas.get(index.getAndIncrement() % replicas.size());
    }
}
