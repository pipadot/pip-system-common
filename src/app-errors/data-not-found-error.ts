import { CustomErrorApp } from './custom-error';

export class DataNotFoundErrorApp extends CustomErrorApp {
  statusCode = 404;
  ResponseCode = -602;
  constructor() {
    super('Data not found');

    Object.setPrototypeOf(this, DataNotFoundErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: 'Data Not Found',
    };
  }
}
