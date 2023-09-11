export abstract class CustomErrorApp extends Error {
  abstract statusCode: number;
  abstract ResponseCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomErrorApp.prototype);
  }

  abstract serializeErrors(): {
    status: number;
    message: string;
  };
}
