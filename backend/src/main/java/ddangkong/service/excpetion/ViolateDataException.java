package ddangkong.service.excpetion;

public class ViolateDataException extends RuntimeException {

    public ViolateDataException(String message) {
        super(message);
    }
}
