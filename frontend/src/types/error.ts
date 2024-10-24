export type ErrorCode =
  | 'NOT_FOUND_BALANCE_CONTENT'
  | 'NOT_FOUND_BALANCE_OPTION'
  | 'NOT_READY_ROOM'
  | 'NOT_PROGRESSED_ROOM'
  | 'NOT_FINISHED_ROOM'
  | 'NOT_FOUND_ROOM'
  | 'ROUND_LESS_THAN_START_ROUND'
  | 'ROUND_GREATER_THAN_CURRENT_ROUND'
  | 'INVALID_ROUND_GAP'
  | 'INVALID_TIME_LIMIT'
  | 'INVALID_RANGE_TOTAL_ROUND'
  | 'ALREADY_EXIST_MASTER'
  | 'ALREADY_MASTER'
  | 'INVALID_MASTER_CREATION'
  | 'NOT_EXIST_MASTER'
  | 'NOT_EXIST_COMMON'
  | 'EXCEED_MAX_MEMBER_COUNT'
  | 'NOT_ROOM_MEMBER'
  | 'NOT_FOUND_ROOM_CONTENT'
  | 'MISMATCH_ROUND'
  | 'EMPTY_VOTE_DEADLINE'
  | 'ALREADY_VOTED'
  | 'VOTE_FINISHED'
  | 'VOTE_NOT_FINISHED'
  | 'CAN_NOT_CHECK_MATCHING_PERCENT'
  | 'FIELD_ERROR'
  | 'URL_PARAMETER_ERROR'
  | 'METHOD_ARGUMENT_TYPE_MISMATCH'
  | 'NO_RESOURCE_FOUND'
  | 'METHOD_NOT_SUPPORTED'
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_FOUND_COOKIE'
  | 'INVALID_COOKIE'
  | 'INVALID_NICKNAME';

export interface UrlParameterError extends ResponseError {
  errorCode: 'URL_PARAMETER_ERROR';
  message: string;
  violationErrors: FieldErrorInfo[];
}

export interface FieldError extends ResponseError {
  errorCode: 'FIELD_ERROR';
  message: string;
  fieldErrors: FieldErrorInfo[];
}

export interface ResponseError {
  errorCode: ErrorCode;
  message: string;
}

export interface FieldErrorInfo {
  field: string;
  rejectedValue: string;
  reason: string;
}
