import { CustomErrorApp } from './custom-error';

export class DatabaseConnectionErrorApp extends CustomErrorApp {
  statusCode = 500;
  reason = 'Error connecting to database';
  ResponseCode = -604;

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.reason,
    };
  }
}
