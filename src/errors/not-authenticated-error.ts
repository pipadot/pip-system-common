import { CustomError } from './custom-error';

export class NotAuthenticateError extends CustomError {
  statusCode = 401;
  ResponseCode = -601;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, NotAuthenticateError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.message }],
    };
  }
}
