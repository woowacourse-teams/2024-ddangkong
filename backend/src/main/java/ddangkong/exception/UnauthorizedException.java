package ddangkong.exception;

public abstract class UnauthorizedException extends RuntimeException {

    public UnauthorizedException(String message) {
        super(message);
    }

    public abstract String getErrorCode();
}
