package ddangkong.documentation.exception;

import ddangkong.exception.ClientErrorCode;
import ddangkong.exception.balance.content.NotFoundBalanceContentException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
class ExceptionController {

    @PostMapping("/exception/{id}")
    void postException(@Valid @RequestBody ExceptionRequest request,
                       @Positive @PathVariable Long id,
                       @NotBlank @RequestParam String teamName) {
        throw new NotFoundBalanceContentException();
    }

    @GetMapping("/exception/errorCode")
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    Map<String, String> getErrorCode() {
        return Arrays.stream(ClientErrorCode.values())
                .collect(Collectors.toMap(ClientErrorCode::name, ClientErrorCode::getMessage));
    }

    record ExceptionRequest(
            @NotBlank(message = "멤버 이름은 필수입니다.")
            String memberName
    ) {
    }
}
