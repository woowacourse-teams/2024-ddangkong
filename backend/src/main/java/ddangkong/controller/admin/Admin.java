package ddangkong.controller.admin;

import java.io.Serializable;
import lombok.Getter;

@Getter
public class Admin implements Serializable {

    private final String nickname;

    public Admin(String nickname) {
        this.nickname = nickname;
    }
}
