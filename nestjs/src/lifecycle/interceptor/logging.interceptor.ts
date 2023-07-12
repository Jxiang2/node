import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from "@nestjs/common";
import { Request, Response } from "express";
import { tap } from "rxjs";
import { LifecycleService } from "../lifecycle.service";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  // possible because middleware is run before interceptor
  public constructor(private readonly lifecycleService: LifecycleService) {}

  public async intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();

    const { method, path: url } = req;

    this.logger.debug(
      "from lifecycleService: ",
      `userId: ${await this.lifecycleService.getUserId()}`,
    );

    const now = Date.now();

    // Done excuting controller
    return next.handle().pipe(
      tap((res) => {
        const { statusCode } = response;

        this.logger.log(
          `${method} - ${url} - ${statusCode} - ${Date.now() - now}ms`,
        );

        this.logger.debug("response: ", res); // response obejct
      }),
    );
  }
}
