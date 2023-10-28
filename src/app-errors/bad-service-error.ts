import { CustomAppError } from './custom-app-error';

export class BadServiceErrorApp extends CustomAppError {
  statusCode = 400;
  ResponseCode = -612;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadServiceErrorApp.prototype);
  }

  serializeErrors() {
    return {
      response_code: this.ResponseCode,
      message: this.message,
    };
  }
}
