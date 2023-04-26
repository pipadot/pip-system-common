import { CustomErrorApp } from './custom-error';

export class NotAuthorizedErrorApp extends CustomErrorApp {
  statusCode = 403;
  ResponseCode = -603;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, NotAuthorizedErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.message,
    };
  }
}
