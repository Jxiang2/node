import { HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    console.log("HI!!!");

    if (!authorization) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .send({ error: "No authorization header" });
      return;
    }
    console.log("ValidateCustomerMiddleware");
    next();
  }
}
