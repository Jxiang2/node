import { Module } from "@nestjs/common";
import { CustomersController } from "./controller/customer.controller";
import { CustomersService } from "./service/customer.service";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
