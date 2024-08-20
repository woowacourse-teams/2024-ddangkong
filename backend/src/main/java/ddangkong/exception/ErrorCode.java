package ddangkong.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {

    // Room
    INVALID_RANGE_TOTAL_ROUND("총 라운드는 %d 이상, %d 이하만 가능합니다. requested totalRound: %d"),
    INVALID_RANGE_TIME_LIMIT("시간 제한은 %ds 이상, %ds 이하만 가능합니다. requested timeLimit: %d"),
    ROUND_LESS_THAN_START_ROUND("startRound보다 크거나 같아야 합니다. startRound : %d, round : %d"),
    ROUND_GREATER_THAN_CURRENT_ROUND("currentRound보다 작거나 같아야 합니다. currentRound : %d, round : %d"),
    NOT_ALLOWED_ROUND_GAP("currentRound과 round의 차이는 %d이하여야 합니다. currentRound : %d, round : %d"),
    NOT_READY_ROOM("방이 준비 상태가 아닙니다."),
    NOT_PROGRESSED_ROOM("해당 방은 게임을 진행하고 있지 않습니다."),
    NOT_FINISHED_ROOM("방이 종료 상태가 아닙니다."),
    NOT_FOUND_ROOM("방이 존재하지 않습니다."),
    ;

    private final String message;
}
