import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = 403;
  ResponseCode = -603;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.message }],
    };
  }
}
