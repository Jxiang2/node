import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

// custom exception object
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const name = exception.name;
    const status = exception.getStatus();
    const message = exception.message;

    // Enhance the orginal exception by adding more info to the response
    response.status(status).json({
      type: name,
      statusCode: status,
      message,

      path: request.url,

      timestamp: new Date().toISOString(),
    });
  }
}
