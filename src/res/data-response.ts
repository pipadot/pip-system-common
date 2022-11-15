import { CustomResponse } from './custom-response';

export class DataResponse extends CustomResponse {
  statusCode = 200;
  ResponseCode = 2;

  constructor(public message: string, public data: Object) {
    super(message, data);
    Object.setPrototypeOf(this, DataResponse.prototype);
  }

  serializeResponses() {
    return {
      response_code: this.ResponseCode,
      message: this.message,
      data: this.data,
    };
  }
}
