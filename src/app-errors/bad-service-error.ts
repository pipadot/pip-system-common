import { CustomErrorApp } from './custom-error';

export class BadServiceErrorApp extends CustomErrorApp {
  statusCode = 400;
  ResponseCode = -612;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadServiceErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.message,
    };
  }
}
