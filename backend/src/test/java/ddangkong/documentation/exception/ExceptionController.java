package ddangkong.documentation.exception;

import ddangkong.exception.BadRequestException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
class ExceptionController {

    @PostMapping("/exception/{id}")
    void postException(@Valid @RequestBody ExceptionRequest request,
                       @Positive @PathVariable Long id,
                       @NotBlank @RequestParam String teamName) {
        throw new BadRequestException("이미 존재하는 멤버입니다.");
    }

    record ExceptionRequest(
            @NotBlank(message = "멤버 이름은 필수입니다.")
            String memberName
    ) {
    }
}
