package ddangkong.documentation.exception.snippet;

import java.io.IOException;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.restdocs.operation.Operation;
import org.springframework.restdocs.payload.AbstractFieldsSnippet;
import org.springframework.restdocs.payload.FieldDescriptor;

public class ErrorCodeResponseFieldsSnippet extends AbstractFieldsSnippet {

    public ErrorCodeResponseFieldsSnippet(List<FieldDescriptor> descriptors) {
        super("error-code-response", descriptors, null, false);
    }

    @Override
    protected MediaType getContentType(Operation operation) {
        return operation.getResponse().getHeaders().getContentType();
    }

    @Override
    protected byte[] getContent(Operation operation) throws IOException {
        return operation.getResponse().getContent();
    }
}
