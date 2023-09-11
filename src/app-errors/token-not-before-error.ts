import { CustomErrorApp } from './custom-error';

export class PipTokenNotBeforeErrorApp extends CustomErrorApp {
  statusCode = 400;
  ResponseCode = -609;
  constructor(public message: string, public date: Date) {
    super(message);

    Object.setPrototypeOf(this, PipTokenNotBeforeErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: `${this.message} at ${this.date.toString()}`,
    };
  }
}
