import { CustomErrorApp } from './custom-error';

export class DuplicateDriverErrorApp extends CustomErrorApp {
  statusCode = 400;
  ResponseCode = -613;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, DuplicateDriverErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.message,
    };
  }
}
