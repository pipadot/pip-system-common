import { CustomErrorApp } from './custom-error';

export class BadRequestErrorApp extends CustomErrorApp {
  statusCode = 400;
  ResponseCode = -600;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.message,
    };
  }
}
