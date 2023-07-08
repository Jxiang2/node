import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFoundException extends HttpException {
  constructor(msg?: string, status?: HttpStatus) {
    super(
      msg || "Bad request (just an example)",
      status || HttpStatus.BAD_REQUEST,
    );
  }
}
