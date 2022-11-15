export abstract class CustomResponse {
  abstract statusCode: number;
  abstract ResponseCode: number;

  constructor(message: string, data?: Object) {
    Object.setPrototypeOf(this, CustomResponse.prototype);
  }

  abstract serializeResponses(): {
    response_code: number;
    message: string;
    data?: Object;
  };
}
