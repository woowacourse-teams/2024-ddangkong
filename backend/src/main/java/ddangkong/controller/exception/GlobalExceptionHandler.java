package ddangkong.controller.exception;

import jakarta.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    private static final String SERVER_ERROR_MESSAGE = "서버 오류가 발생했습니다. 관리자에게 문의하세요.";

    @ExceptionHandler
    public ErrorResponse handleBindingException(BindException e) {
        log.warn(e.getMessage());

        return new ErrorResponse(e.getBindingResult());
    }

    @ExceptionHandler
    public ErrorResponse handleConstraintViolationException(ConstraintViolationException e) {
        log.warn(e.getMessage());

        return new ErrorResponse(e.getConstraintViolations());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleBusinessLogicException(BusinessLogicException e) {
        log.warn(e.getMessage());

        return new ErrorResponse(e.getMessage());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleViolateDataException(ViolateDataException e) {
        log.error(e.getMessage());

        return new ErrorResponse(SERVER_ERROR_MESSAGE);
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleException(Exception e) {
        log.error(e.getMessage());

        return new ErrorResponse(SERVER_ERROR_MESSAGE);
    }
}
