import { CustomErrorApp } from './custom-error';

export class NotFoundErrorApp extends CustomErrorApp {
  statusCode = 404;
  ResponseCode = -606;
  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: 'Not Found',
    };
  }
}
