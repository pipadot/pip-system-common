export abstract class CustomAppError extends Error {
  abstract statusCode: number;
  abstract ResponseCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomAppError.prototype);
  }

  abstract serializeErrors(): {
    response_code: number;
    message: string;
  };
}
