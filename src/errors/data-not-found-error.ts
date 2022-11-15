import { CustomError } from './custom-error';

export class DataNotFoundError extends CustomError {
  statusCode = 404;
  ResponseCode = -2;
  constructor() {
    super('Data not found');

    Object.setPrototypeOf(this, DataNotFoundError.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      error: [{ message: 'Data Not Found' }],
    };
  }
}
