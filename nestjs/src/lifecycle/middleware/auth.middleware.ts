import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { LifecycleService } from "../lifecycle.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthMiddleware.name);

  constructor(private readonly lifecycleService: LifecycleService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(AuthMiddleware.name);

    const userId = "123";
    this.lifecycleService.setUserId(userId);

    next();
  }
}
