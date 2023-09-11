import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = 400;
  ResponseCode = -600;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.message }],
    };
  }
}
