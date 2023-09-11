import { CustomError } from './custom-error';

export class PipJsonWebTokenError extends CustomError {
  statusCode = 400;
  ResponseCode = -608;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, PipJsonWebTokenError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.message }],
    };
  }
}
