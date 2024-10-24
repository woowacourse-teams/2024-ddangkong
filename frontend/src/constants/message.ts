import { ErrorCode } from '@/types/error';

export const ERROR_MESSAGE: Record<ErrorCode, string> = {
  // 방 관련 에러 (room)
  NOT_READY_ROOM: '해당 방의 게임이 이미 시작되었어요. 게임이 끝날 때까지 기다려볼까요?', // 게임 시작된 방에 참가 요청할 때
  NOT_PROGRESSED_ROOM: '이미 게임이 종료되었어요. 최종 결과를 확인해볼까요?', // FIXME: 방장이 최종 결과 화면으로 넘어갔는데, 화면 안보고 있었으면 투표 화면에 갇힘
  NOT_FINISHED_ROOM: '해당 방의 게임이 아직 종료되지 않았어요.',
  NOT_FOUND_ROOM: '해당 방을 찾을 수 없어요. 방을 새로 만들어주세요!', // 없는 방 또는 모두 나간 방에 참여를 요청할 때

  // 유저 관련 에러 (master)
  INVALID_NICKNAME: '닉네임은 최소 1글자 이상 최대 12글자 이하여야 합니다.',
  NOT_ROOM_MEMBER: '사용자가 해당 방에 존재하지 않아요. 다시 접속해볼까요?', // 잘못된 memberId를 보낼 때 (투표, 최종 결과)
  EXCEED_MAX_MEMBER_COUNT: '방의 최대 인원을 초과했습니다.', // 인원이 꽉 찬 방에 들어가려고 할 때
  ALREADY_EXIST_MASTER: '이미 방장이 존재합니다.',
  ALREADY_MASTER: '해당 멤버는 이미 방장입니다.',
  INVALID_MASTER_CREATION: '방에 멤버가 존재하면 방장을 생성할 수 없습니다.',
  NOT_EXIST_MASTER: '방장이 존재하지 않습니다.',
  NOT_EXIST_COMMON: '일반 멤버가 존재하지 않습니다.',

  // 방 설정 관련 에러 (roomSetting)
  INVALID_TIME_LIMIT: '타이머는 10초, 15초, 30초, 60초로만 설정 가능합니다.',
  INVALID_RANGE_TOTAL_ROUND: '총 라운드는 5, 7, 10 라운드로만 설정 가능합니다.',
  EMPTY_VOTE_DEADLINE: '라운드 종료 시간이 설정되지 않았습니다.',

  // 라운드 관련 에러 (round)
  MISMATCH_ROUND: '이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!', // 방장이 다음 라운드로 넘어갔는데, 화면 안보고 있었으면 지나간 투표 결과 요청
  ROUND_LESS_THAN_START_ROUND: 'startRound보다 크거나 같아야 합니다.',
  ROUND_GREATER_THAN_CURRENT_ROUND: 'currentRound보다 작거나 같아야 합니다.',
  INVALID_ROUND_GAP: 'currentRound과 round의 차이는 ?이하여야 합니다.',

  // 컨텐츠 관련 에러 (content)
  NOT_FOUND_BALANCE_CONTENT: '존재하지 않는 컨텐츠네요. 게임을 다시 진행해주세요!',
  NOT_FOUND_ROOM_CONTENT: '해당 방에 존재하지 않은 컨텐츠입니다. 게임을 다시 진행해주세요!',
  NO_RESOURCE_FOUND: '요청한 리소스를 찾을 수 없습니다. 게임을 다시 진행해주세요!',

  // 투표 관련 에러 (vote)
  NOT_FOUND_BALANCE_OPTION: '옵션을 올바르게 선택해주세요.',
  ALREADY_VOTED: '이미 투표가 반영되었어요. 해당 라운드가 끝날 때까지 기다려볼까요?', // 해당 라운드에 투표한 유저가 또 투표할 때
  VOTE_FINISHED: '투표가 이미 종료되었어요.',
  VOTE_NOT_FINISHED:
    '이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!', // TODO: 방장이 다음 라운드로 넘어갔는데, 화면을 안보고 있던 유저가 현재 진행 중인 투표 결과 요청 실패

  // 매칭도 관련 에러 (matching, final)
  CAN_NOT_CHECK_MATCHING_PERCENT: '종료되지 않은 방의 투표 매칭도는 확인할 수 없습니다.',

  // 클라이언트 로직 에러
  FIELD_ERROR: '필드값 입력이 잘못되었습니다.',
  URL_PARAMETER_ERROR: 'URL parameter 입력이 잘못되었습니다.',
  METHOD_ARGUMENT_TYPE_MISMATCH: '입력한 값의 타입이 잘못되었습니다.',
  METHOD_NOT_SUPPORTED: '허용되지 않은 메서드입니다.',

  // 서버 에러
  INTERNAL_SERVER_ERROR: '서버에 오류가 발생했어요. 다시 시도해 주세요!',

  // 쿠키 관련 에러(권한)
  NOT_FOUND_COOKIE:
    '사용자 정보가 있어야 방에 참여할 수 있어요. 홈화면으로 이동하여 방을 새로 만들어주세요!',
  INVALID_COOKIE:
    '사용자 정보가 있어야 방에 참여할 수 있어요. 홈화면으로 이동하여 방을 새로 만들어주세요!',
};
