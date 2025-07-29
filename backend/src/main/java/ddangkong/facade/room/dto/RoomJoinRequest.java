package ddangkong.facade.room.dto;

import jakarta.validation.constraints.NotBlank;

public record RoomJoinRequest(
        @NotBlank
        String nickname,

        String imageUrl
) {

    @Override
    public String imageUrl() { // TODO : FE 작업 끝난 후 삭제 예정
        if (imageUrl == null || imageUrl.isBlank()) {
            return "https://velog.velcdn.com/images/gwichanlee/post/dfdaead8-d98a-4d42-a975-2fb3edd7dde6/image.png";
        }
        return imageUrl;
    }
}
