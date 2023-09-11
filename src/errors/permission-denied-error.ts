import { CustomError } from './custom-error';

export class PermissionDeniedError extends CustomError {
  statusCode = 403;
  ResponseCode = -610;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, PermissionDeniedError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.message }],
    };
  }
}
