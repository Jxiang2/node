import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { CustomerController } from "./controller/customer.controller";
import { CustomerService } from "./service/customer.service";
import { ValidateCustomerMiddleware } from "./middleware/validate.middleware";

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ValidateCustomerMiddleware).exclude({path: ..., method: ...}).forRoutes(CustomerController);
    consumer.apply(ValidateCustomerMiddleware).forRoutes({
      path: "customers/search/:id",
      method: RequestMethod.GET,
    });
  }
}
