package ddangkong.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ServerErrorCode {

    // Encryption
    CIPHER_EXCEPTION("Cipher 사용 중 문제가 발생하였습니다."),

    // BalanceContent
    NOT_ENOUGH_BALANCE_CONTENT("질문 수가 부족합니다. category: %s"),

    // BalanceOption
    INVALID_BALANCE_OPTION_COUNT("밸런스 컨텐츠의 옵션이 %d개입니다."),

    // Member
    INVALID_MASTER_COUNT("방장이 %d명이 아닙니다. 현재 방장 수: %d, roomId: %d"),
    NOT_EXIST_MEMBER_IN_ROOM("방에 멤버가 존재하지 않습니다."),

    // RoomContent
    NOT_FOUND_CURRENT_ROUND_ROOM_CONTENT("해당 방의 현재 라운드의 컨텐츠가 존재하지 않습니다. currentRound: %d"),
    VOTE_DEADLINE_CONFIGURED("해당 라운드의 투표 마감 시간은 이미 설정되었습니다."),
    ;

    private final String message;
}
