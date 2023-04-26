import { CustomErrorApp } from './custom-error';

export class PipTokenExpiredErrorApp extends CustomErrorApp {
  statusCode = 400;
  ResponseCode = -607;
  constructor(public expiredAt: Date) {
    super('Access Token is expired');

    Object.setPrototypeOf(this, PipTokenExpiredErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: `${this.message} at ${this.expiredAt.toString()}`,
    };
  }
}
