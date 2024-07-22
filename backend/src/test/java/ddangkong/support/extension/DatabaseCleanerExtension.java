package ddangkong.support.extension;

import jakarta.persistence.EntityManager;
import java.util.List;
import org.junit.jupiter.api.extension.BeforeEachCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.support.TransactionTemplate;

public class DatabaseCleanerExtension implements BeforeEachCallback {

    @Override
    public void beforeEach(ExtensionContext extensionContext) {
        ApplicationContext context = SpringExtension.getApplicationContext(extensionContext);
        cleanup(context);
    }

    private void cleanup(ApplicationContext context) {
        EntityManager em = context.getBean(EntityManager.class);
        TransactionTemplate transactionTemplate = context.getBean(TransactionTemplate.class);

        transactionTemplate.execute(action -> {
            em.clear();
            truncateTables(em);
            return null;
        });
    }

    private void truncateTables(EntityManager em) {
        em.createNativeQuery("SET REFERENTIAL_INTEGRITY FALSE").executeUpdate();
        for (String tableName : findTableNames(em)) {
            em.createNativeQuery("TRUNCATE TABLE %s RESTART IDENTITY".formatted(tableName)).executeUpdate();
        }
        em.createNativeQuery("SET REFERENTIAL_INTEGRITY TRUE").executeUpdate();
    }

    @SuppressWarnings("unchecked")
    private List<String> findTableNames(EntityManager em) {
        String tableSelectQuery = """
                SELECT TABLE_NAME
                FROM INFORMATION_SCHEMA.TABLES
                WHERE TABLE_SCHEMA = 'PUBLIC'
                """;
        return em.createNativeQuery(tableSelectQuery).getResultList();
    }
}
