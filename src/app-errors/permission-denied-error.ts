import { CustomErrorApp } from './custom-error';

export class PermissionDeniedErrorApp extends CustomErrorApp {
  statusCode = 403;
  ResponseCode = -610;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, PermissionDeniedErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.message,
    };
  }
}
