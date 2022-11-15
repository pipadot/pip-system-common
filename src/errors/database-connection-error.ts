import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';
  ResponseCode = -604;

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: this.reason }],
    };
  }
}
