package ddangkong.controller.admin;

import lombok.Getter;

@Getter
public class Admin {

    private final String nickname;

    public Admin(String nickname) {
        this.nickname = nickname;
    }
}
