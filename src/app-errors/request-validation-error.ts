import { ValidationError } from 'express-validator';
import { CustomErrorApp } from './custom-error';

export class RequestValidationErrorApp extends CustomErrorApp {
  statusCode = 400;
  ResponseCode = -605;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationErrorApp.prototype);
  }

  serializeErrors() {
    return {
      status: this.ResponseCode,
      message: this.errors[0].msg,
    };
  }
}
