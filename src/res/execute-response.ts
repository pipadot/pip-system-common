import { CustomResponse } from './custom-response';

export class ExecuteResponse extends CustomResponse {
  statusCode = 200;
  ResponseCode = 1;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ExecuteResponse.prototype);
  }

  serializeResponses() {
    return {
      response_code: this.ResponseCode,
      message: this.message,
    };
  }
}
