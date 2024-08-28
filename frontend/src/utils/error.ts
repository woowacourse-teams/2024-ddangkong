import { ErrorCode } from '@/types/error';

interface CustomErrorParams {
  errorCode: ErrorCode;
  message: string;
  status: number;
}

export class CustomError extends Error {
  errorCode: string;
  status: number;

  constructor({ errorCode, message, status }: CustomErrorParams) {
    super();
    this.errorCode = errorCode;
    this.message = message;
    this.status = status;
  }
}

export class NetworkError extends Error {
  status = 555;

  constructor(message: string) {
    super();
    this.message = message;
  }
}
