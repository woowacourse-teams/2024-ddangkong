import { NETWORK_ERROR_STATUS, UNHANDLED_ERROR_STATUS } from '@/constants/errorStatus';
import { ERROR_MESSAGE } from '@/constants/message';
import { ErrorCode } from '@/types/error';

interface CustomErrorParams {
  errorCode: ErrorCode;
  status: number;
  message?: string;
}

export class CustomError extends Error {
  errorCode: string;
  status: number;

  constructor({ errorCode, status }: CustomErrorParams) {
    super();
    this.errorCode = errorCode;
    this.status = status;
    this.message = ERROR_MESSAGE[errorCode];
  }
}

export class NetworkError extends Error {
  status = NETWORK_ERROR_STATUS;
  message = '네트워크가 불안정해요. 다시 시도해주세요!';
}

export class UnhandledError extends Error {
  status = UNHANDLED_ERROR_STATUS;
  message = '예기치 못한 에러가 발생했어요. 관리자에게 문의 바랍니다.';
}
