import { CustomError } from './custom-error';

export class InvalidRefreshTokenError extends CustomError {
  statusCode = 400;
  ResponseCode = -611;
  reason = 'Invalid Refresh Token';

  constructor() {
    super('Invalid Refresh Token');

    Object.setPrototypeOf(this, InvalidRefreshTokenError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.reason }],
    };
  }
}
