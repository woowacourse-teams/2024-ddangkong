package ddangkong.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ClientErrorCode {

    // BalanceContent
    NOT_FOUND_BALANCE_CONTENT("존재하지 않는 컨텐츠입니다."),

    // BalanceOption
    NOT_FOUND_BALANCE_OPTION("해당 옵션이 존재하지 않습니다."),

    // Room
    NOT_READY_ROOM("방이 준비 상태가 아닙니다."),
    NOT_PROGRESSED_ROOM("해당 방은 게임을 진행하고 있지 않습니다."),
    NOT_FINISHED_ROOM("방이 종료되지 않았습니다."),
    NOT_FOUND_ROOM("방이 존재하지 않습니다."),
    ROUND_LESS_THAN_START_ROUND("startRound보다 크거나 같아야 합니다. startRound : %d, round : %d"),
    ROUND_GREATER_THAN_CURRENT_ROUND("currentRound보다 작거나 같아야 합니다. currentRound : %d, round : %d"),
    INVALID_ROUND_GAP("currentRound과 round의 차이는 %d이하여야 합니다. currentRound : %d, round : %d"),

    // RoomSetting
    // todo s로 변경
    INVALID_TIME_LIMIT("시간 제한은 %s 만 가능합니다. requested timeLimit: %d"),
    INVALID_RANGE_TOTAL_ROUND("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"),

    // Member
    ALREADY_EXIST_MASTER("이미 방장이 존재합니다."),
    ALREADY_MASTER("해당 멤버는 이미 방장입니다. memberId : %d"),
    INVALID_MASTER_CREATION("방에 멤버가 존재하면 방장을 생성할 수 없습니다. 현재 멤버 수: %d"),
    NOT_EXIST_MASTER("방장이 존재하지 않습니다."),
    NOT_EXIST_COMMON("일반 멤버가 존재하지 않습니다."),
    EXCEED_MAX_MEMBER_COUNT("방의 최대 인원을 초과했습니다. 현재 멤버 수: %d"),
    NOT_ROOM_MEMBER("방에 존재하지 않는 멤버입니다."),
    INVALID_NICKNAME("닉네임은 공백이어선 안되며 최대 %d글자여야 합니다."),
    INVALID_MEMBER_ID("해당 ID에 일치하는 멤버가 없습니다."),

    // RoomContent
    NOT_FOUND_ROOM_CONTENT("방에 존재하지 않는 컨텐츠입니다."),
    MISMATCH_ROUND("컨텐츠의 라운드가 일치하지 않습니다. 방 컨텐츠의 라운드 : %d, 방 라운드 : %d"),
    EMPTY_VOTE_DEADLINE("라운드 종료 시간이 설정되지 않았습니다."),

    // RoomVote
    ALREADY_VOTED("이미 투표했습니다. nickname: %s, option name: %s"),
    VOTE_FINISHED("투표가 종료되었습니다."),
    VOTE_NOT_FINISHED("아직 투표가 종료되지 않았습니다."),
    CAN_NOT_CHECK_MATCHING_PERCENT("종료되지 않은 방의 투표 매칭도는 확인할 수 없습니다."),

    // Cookie
    NOT_FOUND_COOKIE("일치하는 쿠키가 없습니다."),
    INVALID_COOKIE("유효하지 않는 쿠키입니다."),

    // Common
    FIELD_ERROR("입력이 잘못되었습니다."),
    URL_PARAMETER_ERROR("입력이 잘못되었습니다."),
    METHOD_ARGUMENT_TYPE_MISMATCH("입력한 값의 타입이 잘못되었습니다."),
    NO_RESOURCE_FOUND("요청한 리소스를 찾을 수 없습니다."),
    METHOD_NOT_SUPPORTED("허용되지 않은 메서드입니다."),
    MEDIA_TYPE_NOT_SUPPORTED("허용되지 않은 미디어 타입입니다."),
    ALREADY_DISCONNECTED("이미 클라이언트에서 요청이 종료되었습니다."),
    INTERNAL_SERVER_ERROR("서버 오류가 발생했습니다. 관리자에게 문의하세요."),
    ;

    private final String message;
}
