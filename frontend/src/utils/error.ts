import { ERROR_MESSAGE } from '@/constants/message';
import { ErrorCode } from '@/types/error';

interface CustomErrorParams {
  errorCode: ErrorCode;
  message: string;
  status: number;
}

export class CustomError extends Error {
  errorCode: string;
  status: number;

  constructor({ errorCode, status }: CustomErrorParams) {
    super();
    this.errorCode = errorCode;
    this.message = ERROR_MESSAGE[errorCode];
    this.status = status;
  }
}

export class NetworkError extends Error {
  status = 555;
  message = '네트워크가 불안정해요. 다시 시도해주세요!';
}

export class UnhandledError extends Error {
  status = 5002;
  message = '예기치 못한 에러가 발생했어요. 관리자에게 문의 바랍니다.';
}
