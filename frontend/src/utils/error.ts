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
  status = 555;
  message = '네트워크가 불안정해요. 다시 시도해주세요!';
}
