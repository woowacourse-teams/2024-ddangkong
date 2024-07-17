package ddangkong.controller.exception;

import static com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Path;
import java.util.List;
import java.util.Set;
import org.springframework.validation.BindingResult;

public record ErrorResponse(
        String message,
        @JsonInclude(Include.NON_NULL)
        List<FieldError> fieldErrors,
        @JsonInclude(Include.NON_NULL)
        List<ConstraintViolationError> violationErrors
) {

    public ErrorResponse(String message) {
        this(message, null, null);
    }

    public ErrorResponse(BindingResult bindingResult) {
        this("입력이 잘못되었습니다.", FieldError.from(bindingResult), null);
    }

    public ErrorResponse(Set<ConstraintViolation<?>> constraintViolations) {
        this("입력이 잘못되었습니다.", null, ConstraintViolationError.from(constraintViolations));
    }

    private record FieldError(String field, Object rejectedValue, String reason) {

        private static List<FieldError> from(BindingResult bindingResult) {
            return bindingResult.getFieldErrors().stream()
                    .map(error -> new FieldError(
                            error.getField(),
                            error.getRejectedValue(),
                            error.getDefaultMessage())
                    )
                    .toList();
        }
    }

    private record ConstraintViolationError(String field, Object rejectedValue, String reason) {

        private static final int FIELD_POSITION = 1;

        private static List<ConstraintViolationError> from(Set<ConstraintViolation<?>> constraintViolations) {
            return constraintViolations.stream()
                    .map(constraintViolation -> new ConstraintViolationError(
                            getField(constraintViolation.getPropertyPath()),
                            constraintViolation.getInvalidValue().toString(),
                            constraintViolation.getMessage()))
                    .toList();
        }

        private static String getField(Path propertyPath) {
            return propertyPath.toString().split("\\.")[FIELD_POSITION];
        }
    }
}
