import { CustomErrorApp } from './custom-error';

export class PipJsonWebTokenErrorApp extends CustomErrorApp {
  statusCode = 400;
  ResponseCode = -608;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, PipJsonWebTokenErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.message,
    };
  }
}
