import { CustomError } from './custom-error';

export class PipTokenExpiredError extends CustomError {
  statusCode = 400;
  ResponseCode = -607;
  constructor(public expiredAt: Date) {
    super('Access Token is expired.');

    Object.setPrototypeOf(this, PipTokenExpiredError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.message, field: this.expiredAt.toString() }],
    };
  }
}
