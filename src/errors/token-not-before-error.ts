import { CustomError } from './custom-error';

export class PipTokenNotBeforeError extends CustomError {
  statusCode = 400;
  ResponseCode = -609;
  constructor(public message: string, public date: Date) {
    super(message);

    Object.setPrototypeOf(this, PipTokenNotBeforeError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.message, field: this.date.toString() }],
    };
  }
}
