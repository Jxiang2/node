import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { LifecycleService } from "../lifecycle.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthMiddleware.name);

  public constructor(private readonly lifecycleService: LifecycleService) {}

  public async use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(AuthMiddleware.name);

    const userId = "123";
    await this.lifecycleService.setUserId(userId);

    next();
  }
}
