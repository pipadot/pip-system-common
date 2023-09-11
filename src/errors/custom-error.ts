export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract ResponseCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): {
    response_code: number;
    error: { message: string; field?: string }[];
  };
}
