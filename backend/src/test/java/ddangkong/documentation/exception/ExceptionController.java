package ddangkong.documentation.exception;

import ddangkong.exception.BadRequestException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
class ExceptionController {

    @PostMapping("/exception/{id}")
    void postException(@Valid @RequestBody ExceptionRequest request, @Positive @PathVariable Long id) {
        throw new BadRequestException("존재하지 않은 사용자입니다.");
    }

    record ExceptionRequest(
            @NotBlank(message = "이름은 필수입니다.")
            String name
    ) {
    }
}
