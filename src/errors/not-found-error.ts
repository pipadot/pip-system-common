import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;
  ResponseCode = -603;
  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: 'Not Found' }],
    };
  }
}
