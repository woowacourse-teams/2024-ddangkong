package ddangkong.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {

    // BalanceContent
    NOT_FOUND_BALANCE_CONTENT("존재하지 않는 컨텐츠입니다."),
    NOT_ENOUGH_BALANCE_CONTENT("질문 수가 부족합니다. category: %s"),

    // BalanceOption
    INVALID_BALANCE_OPTION_COUNT("밸런스 컨텐츠의 옵션이 %d개입니다."),
    NOT_FOUND_BALANCE_OPTION("해당 옵션이 존재하지 않습니다."),

    // Room
    INVALID_RANGE_TOTAL_ROUND("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"),
    // todo s로 변경
    INVALID_RANGE_TIME_LIMIT("시간 제한은 %dms 이상, %dms 이하만 가능합니다. requested timeLimit: %d"),
    ROUND_LESS_THAN_START_ROUND("startRound보다 크거나 같아야 합니다. startRound : %d, round : %d"),
    ROUND_GREATER_THAN_CURRENT_ROUND("currentRound보다 작거나 같아야 합니다. currentRound : %d, round : %d"),
    NOT_ALLOWED_ROUND_GAP("currentRound과 round의 차이는 %d이하여야 합니다. currentRound : %d, round : %d"),
    NOT_READY_ROOM("방이 준비 상태가 아닙니다."),
    NOT_PROGRESSED_ROOM("해당 방은 게임을 진행하고 있지 않습니다."),
    NOT_FINISHED_ROOM("방이 종료되지 않았습니다."),
    NOT_FOUND_ROOM("방이 존재하지 않습니다."),

    // Member
    ALREADY_EXIST_MASTER("이미 방장이 존재합니다."),
    INVALID_MASTER_CREATION("방에 멤버가 존재하면 방장을 생성할 수 없습니다. 현재 멤버 수: %d"),
    NOT_EXIST_MASTER("방장이 존재하지 않습니다."),
    EXCEED_MAX_MEMBER_COUNT("방의 최대 인원을 초과했습니다. 현재 멤버 수: %d"),
    NOT_ROOM_MEMBER("방에 존재하지 않는 멤버입니다."),

    // RoomContent
    NOT_FOUND_CURRENT_ROUND_ROOM_CONTENT("해당 방의 현재 라운드의 컨텐츠가 존재하지 않습니다. currentRound: %d"),
    NOT_FOUND_ROOM_CONTENT("방에 존재하지 않는 컨텐츠입니다."),
    ALREADY_ROUND_STARTED("해당 라운드는 이미 시작했습니다."),
    MISMATCH_ROUND("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : %d, 방 라운드 : %d"),
    EMPTY_ROUND_ENDED_AT("라운드 종료 시간이 설정되지 않았습니다."),

    // RoomVote
    ALREADY_VOTED("이미 투표했습니다. nickname: %s, option name: %s"),
    VOTE_FINISHED("투표가 종료되었습니다."),
    VOTE_NOT_FINISHED("아직 투표가 종료되지 않았습니다."),

    // Common
    FIELD_ERROR("입력이 잘못되었습니다."),
    URL_PARAMETER_ERROR("입력이 잘못되었습니다."),
    METHOD_ARGUMENT_TYPE_MISMATCH("입력한 값의 타입이 잘못되었습니다."),
    NO_RESOURCE_FOUND("요청한 리소스를 찾을 수 없습니다."),
    METHOD_NOT_ALLOWED("허용되지 않은 메서드입니다."),
    INTERNAL_SERVER_ERROR("서버 오류가 발생했습니다. 관리자에게 문의하세요."),

    ;

    private final String message;
}
