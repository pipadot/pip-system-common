import { CustomErrorApp } from './custom-error';

export class NotAuthenticateErrorApp extends CustomErrorApp {
  statusCode = 401;
  ResponseCode = -601;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, NotAuthenticateErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.message,
    };
  }
}
