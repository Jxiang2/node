import {
  MiddlewareConsumer,
  Module,
  RequestMethod,
  Scope,
} from "@nestjs/common";
import { LifecycleService } from "./lifecycle.service";
import { AuthMiddleware } from "./middleware/auth.middleware";
import { LifeCycleController } from "./lifecycle.controller";
import { AuthGuard } from "./guard/auth.guard";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "./interceptor/logging.interceptor";

@Module({
  controllers: [LifeCycleController],
  providers: [
    LifecycleService,
    { provide: APP_GUARD, useClass: AuthGuard },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
      scope: Scope.REQUEST, // becasue lifecycle.service is request scoped
    },
  ],
})
export class LifeCycleModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: "lifecycle", method: RequestMethod.GET });
  }
}
